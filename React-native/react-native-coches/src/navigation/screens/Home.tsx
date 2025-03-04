import { Text } from '@react-navigation/elements';
import { StyleSheet, View, Image } from 'react-native';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/images/coche.jpg')} // ✅ Usa require()
        style={styles.image}
      />
      <Text style={styles.welcomeText}>¡Bienvenido a la aplicación!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 500,
    height: 400,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
