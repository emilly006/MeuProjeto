import React from 'react';
import {
StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Tela Esqueceu a senha</Text>
     <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
})
export default LotsOfStyles;

