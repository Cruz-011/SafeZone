import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function Dados() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [bairro, setBairro] = useState('');
  const [sangue, setSangue] = useState('');
  const [telefone, setTelefone] = useState('');
  const [emergencia, setEmergencia] = useState('');

  useEffect(() => {
    const checkDados = async () => {
      const saved = await AsyncStorage.getItem('dados');
      if (saved) router.replace('/(tabs)');
    };
    checkDados();
  }, []);

  const salvar = async () => {
    if (!nome || !bairro || !sangue || !telefone) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios!');
      return;
    }
    const dados = { nome, bairro, sangue, telefone, emergencia };
    await AsyncStorage.setItem('dados', JSON.stringify(dados));
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Dados</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Bairro"
        style={styles.input}
        value={bairro}
        onChangeText={setBairro}
      />
      <TextInput
        placeholder="Tipo Sanguíneo"
        style={styles.input}
        value={sangue}
        onChangeText={setSangue}
      />
      <TextInput
        placeholder="Telefone"
        style={styles.input}
        value={telefone}
        keyboardType="phone-pad"
        onChangeText={setTelefone}
      />
      <TextInput
        placeholder="Telefone de Emergência"
        style={styles.input}
        value={emergencia}
        keyboardType="phone-pad"
        onChangeText={setEmergencia}
      />

      <Button title="Salvar e Continuar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 }
});
