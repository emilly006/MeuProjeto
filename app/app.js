import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from './cadastro';
import CriarCompeticao from './CriarCompetição';
import TelaDeTransmissao from './telaDeTransmissão';
import TelaDePerfil from './TelaDePerfil';
import EsqueceuSenha from './esqueceu a senha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CriarCompeticao" component={CriarCompeticao} />
        <Stack.Screen name="TelaDeTransmissao" component={TelaDeTransmissao} />
        <Stack.Screen name="TelaDePerfil" component={TelaDePerfil} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
