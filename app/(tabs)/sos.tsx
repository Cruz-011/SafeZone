import { View, Text, StyleSheet, Button, Linking } from 'react-native';
import Colors from '../../constants/Colors';

export default function SOS() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONTATO SOS</Text>

      <View style={styles.card}>
        <Button title="📞 Defesa Civil" color={Colors.primary} onPress={() => Linking.openURL('tel:199')} />
      </View>

      <View style={styles.card}>
        <Button title="📍 Enviar Minha Localização" color={Colors.primary} onPress={() => {}} />
      </View>

      <View style={styles.card}>
        <Button title="💬 WhatsApp" color={Colors.primary} onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 20 },
  title: { color: Colors.primary, fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: Colors.card, padding: 15, borderRadius: 10, marginBottom: 15 },
});
