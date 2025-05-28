import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: Colors.background },
          headerTitleStyle: { color: Colors.text },
          headerTintColor: Colors.primary,
          tabBarStyle: {
            backgroundColor: Colors.background,
            borderTopColor: Colors.card,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.secondary,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="mapa"
          options={{
            title: 'Mapa',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="locais"
          options={{
            title: 'Locais',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="business-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="sos"
          options={{
            title: 'SOS',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="alarm-light-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
