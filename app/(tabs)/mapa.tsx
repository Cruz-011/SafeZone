import { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import Colors from '../../constants/Colors';

export default function Mapa() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [region, setRegion] = useState<Region>({
    latitude: -3.119, // Valor padrão até carregar
    longitude: -60.021,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Permissão de localização é necessária para usar o mapa.');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };

      setLocation(coords);
      setRegion({
        ...coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {/* Marcador fixo de exemplo */}
        <Marker coordinate={{ latitude: -3.119, longitude: -60.021 }} />
        <Marker coordinate={{ latitude: -3.13, longitude: -60.02 }} pinColor="red" />

        {/* Marcador na localização real */}
        {location && (
          <Marker
            coordinate={location}
            title="Você está aqui"
            description="Localização atual"
            pinColor="blue"
          />
        )}
      </MapView>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (location) {
              setRegion({
                ...location,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              });
            }
          }}
        >
          <Text style={styles.buttonText}>📍 Traçar Rota Segura</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
