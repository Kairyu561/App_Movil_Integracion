import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaInicio from './screens/PantallaInicio';
import FormularioReporte from './screens/PantallaFormulario';
import { enableScreens } from 'react-native-screens';


// Define el tipo de parámetros que recibe cada pantalla en el stack
export type RootStackParamList = {
  Inicio: undefined;         // PantallaInicio no recibe parámetros
  Formulario: undefined;     // FormularioReporte no recibe parámetros
};
enableScreens();
// Crear el stack de navegación
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        {/* Pantalla Inicio */}
        <Stack.Screen 
          name="Inicio" 
          component={PantallaInicio} 
          options={{ title: 'Inicio' }} // Personaliza el título si deseas
        />

        {/* Pantalla de Formulario */}
        <Stack.Screen 
          name="Formulario" 
          component={FormularioReporte} 
          options={{ title: 'Formulario de Reporte' }} // Personaliza el título si deseas
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
