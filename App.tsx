// App.tsx (o App.js)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaInicio from './screens/Home';
import FormularioReporte from './screens/Formulario';

// Define el tipo de parámetros del stack
export type RootStackParamList = {
  Home: undefined;  // Aquí puedes agregar más parámetros si los necesitas
  Formulario: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>(); // Asegúrate de incluir el tipo aquí

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PantallaInicio} />
        <Stack.Screen name="Formulario" component={FormularioReporte} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}