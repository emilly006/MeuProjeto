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
     <Text style={styles.title}>Tela de jogos</Text>
      <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>Inscrição</Text>
   </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C1E94',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
})
export default LotsOfStyles;

