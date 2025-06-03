import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  Pressable,
  StyleSheet,
} from 'react-native';

type UserInfo = {
  emergencyPhone: string;
  bloodType: string;
  region: string;
  diseases: string;
  allergies: string;
};

export default function UserInfo() {
  const router = useRouter();

  const [form, setForm] = useState<UserInfo>({
    emergencyPhone: '',
    bloodType: '',
    region: '',
    diseases: '',
    allergies: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = {
          emergencyPhone: '(11) 99999-9999',
          bloodType: 'O+',
          region: 'São Paulo - SP',
          diseases: 'Nenhuma',
          allergies: 'Poeira',
        };
        setForm(res);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados');
      }
    };

    fetchData();
  }, []);

  const handleChange = (field: keyof UserInfo, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      // await api.post('/user-info', form);
      Alert.alert('Sucesso', 'Informações salvas com sucesso!');
      setIsEditing(false);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar informações');
    }
  };

  const renderField = (
    label: string,
    field: keyof UserInfo,
    placeholder: string,
    multiline = false
  ) => {
    if (isEditing) {
      return (
        <View style={styles.card}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={form[field]}
            multiline={multiline}
            numberOfLines={multiline ? 3 : 1}
            onChangeText={(text) => handleChange(field, text)}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.card}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{form[field] || 'Não informado'}</Text>
        </View>
      );
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Informações de Saúde</Text>

      {renderField('Telefone de Emergência', 'emergencyPhone', '(XX) XXXXX-XXXX')}
      {renderField('Tipo Sanguíneo', 'bloodType', 'Ex.: O+, A-, AB+')}
      {renderField('Região que Mora', 'region', 'Cidade, Bairro')}
      {renderField('Doenças', 'diseases', 'Descreva doenças (se houver)', true)}
      {renderField('Alergias', 'allergies', 'Descreva alergias (se houver)', true)}

      <Pressable
        onPress={isEditing ? handleSave : () => setIsEditing(true)}
        style={[
          styles.button,
          { backgroundColor: isEditing ? '#34C759' : '#007AFF' },
        ]}
      >
        <Text style={styles.buttonText}>{isEditing ? 'Salvar' : 'Editar Informações'}</Text>
      </Pressable>

      {isEditing && (
        <Pressable onPress={() => setIsEditing(false)} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </Pressable>
      )}

      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>Voltar</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: '#FF3B30',
    fontWeight: '600',
  },
  backButton: {
    marginTop: 25,
    alignItems: 'center',
  },
  backText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
