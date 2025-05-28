import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Alert, Linking } from 'react-native';
import * as Location from 'expo-location';
import Colors from '../../constants/Colors';

type LocalSeguro = {
  id: string;
  nome: string;
  latitude: number;
  longitude: number;
  descricao: string;
};

export default function LocaisSeguros() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locaisSeguros, setLocaisSeguros] = useState<LocalSeguro[]>([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Permissão de localização é necessária para exibir os locais seguros.');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };

      setLocation(coords);

      // Mock dos locais seguros
      const locaisMock: LocalSeguro[] = [
        {
          id: '1',
          nome: 'Escola Municipal Jardim Verde',
          latitude: coords.latitude + 0.002,
          longitude: coords.longitude + 0.002,
          descricao: 'Área elevada, nunca registra alagamentos.',
        },
        {
          id: '2',
          nome: 'Praça Central',
          latitude: coords.latitude - 0.003,
          longitude: coords.longitude + 0.0015,
          descricao: 'Ponto seguro, bem sinalizado e iluminado.',
        },
        {
          id: '3',
          nome: 'Posto de Saúde Bairro Norte',
          latitude: coords.latitude + 0.001,
          longitude: coords.longitude - 0.002,
          descricao: 'Local preparado para emergências.',
        },
        {
          id: '4',
          nome: 'Centro Comunitário Zona Oeste',
          latitude: coords.latitude - 0.002,
          longitude: coords.longitude - 0.0025,
          descricao: 'Abrigo temporário em casos de emergência.',
        },
      ];

      setLocaisSeguros(locaisMock);
    })();
  }, []);

  const abrirNoMapa = (local: LocalSeguro) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${local.latitude},${local.longitude}`;
    Linking.openURL(url);
  };

  const renderItem = ({ item }: { item: LocalSeguro }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Pressable style={styles.button} onPress={() => abrirNoMapa(item)}>
        <Text style={styles.buttonText}>📍 Ver no Mapa</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Locais Seguros Próximos</Text>
      <FlatList
        data={locaisSeguros}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 12,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
