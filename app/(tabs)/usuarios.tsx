import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import api from '../../services/api';

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const carregarUsuarios = async () => {
    try {
      const response = await api.get<Usuario[]>('/usuarios');
      setUsuarios(response.data);
    } catch (err) {
      console.error('Erro ao carregar usuários', err);
    }
  };

  const adicionarUsuario = async () => {
    try {
      await api.post('/usuarios', { nome, email });
      setNome('');
      setEmail('');
      carregarUsuarios();
    } catch (err) {
      console.error('Erro ao adicionar usuário', err);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários</Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.nome} - {item.email}</Text>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Adicionar" onPress={adicionarUsuario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
});
