import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const API_KEY = '8ad84f69d2fe41db5aae419a3ee3166f';

const textoClaro = '#E1E6F0';  // quase branco, suave para olhos no dark
const fundoEscuro = '#121212'; // preto quase absoluto para UI moderna
const azulFuturo = '#3399FF';  // azul vibrante para destacar títulos e ícones

export default function HomeScreen() {
  const [location, setLocation] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const alertasRecentes = [
    { id: '1', titulo: 'Chuva intensa prevista', tempo: '1h', icone: 'weather-pouring' },
    { id: '2', titulo: 'Possível alagamento na região', tempo: '3h', icone: 'water' },
    { id: '3', titulo: 'Risco de deslizamento', tempo: '5h', icone: 'alert-decagram' },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Permissão de localização é necessária.');
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);

      fetchWeather(loc.coords.latitude, loc.coords.longitude);
    })();
  }, []);

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      setWeather(res.data);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível obter os dados do clima.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={azulFuturo} />
        <Text style={{ color: textoClaro, marginTop: 10 }}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Status Atual */}
      <View style={styles.card}>
        <Text style={styles.title}>STATUS ATUAL</Text>
        <View style={styles.statusRow}>
          <Ionicons name="location-outline" size={24} color={azulFuturo} />
          <Text style={styles.statusText}>
            {weather?.name} - {weather?.sys?.country}
          </Text>
        </View>
        <View style={styles.statusRow}>
          <Ionicons name="cloud-outline" size={24} color="#66B2FF" />
          <Text style={styles.statusText}>
            {weather?.weather[0]?.description}
          </Text>
        </View>
        <View style={styles.statusRow}>
          <Ionicons name="thermometer-outline" size={24} color="#FF6B6B" />
          <Text style={styles.statusText}>
            Temp: {Math.round(weather?.main?.temp)}°C
          </Text>
        </View>
        <View style={styles.statusRow}>
          <Ionicons name="rainy-outline" size={24} color="#66B2FF" />
          <Text style={styles.statusText}>
            Umidade: {weather?.main?.humidity}%
          </Text>
        </View>
      </View>

      {/* Alertas Recentes */}
      <View style={styles.card}>
        <Text style={styles.title}>ALERTAS RECENTES</Text>
        <FlatList
          data={alertasRecentes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.alertRow}>
              <MaterialCommunityIcons
                name={item.icone}
                size={24}
                color="#FFB74D"
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.alertText}>{item.titulo}</Text>
                <Text style={styles.alertTime}>{item.tempo} atrás</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: fundoEscuro,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: fundoEscuro,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 12,
    color: azulFuturo,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusText: {
    marginLeft: 12,
    fontSize: 16,
    color: textoClaro,
    fontWeight: '500',
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  alertText: {
    fontSize: 15,
    fontWeight: '600',
    color: textoClaro,
  },
  alertTime: {
    fontSize: 13,
    color: '#AAAAAA',
  },
});
