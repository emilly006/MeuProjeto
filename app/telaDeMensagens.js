import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Tela de Mensagens</Text>
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

