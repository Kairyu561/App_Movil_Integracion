// PantallaInicio.tsx (o PantallaInicio.js)
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App'; // Asegúrate de la ruta correcta

// Define el tipo de `navigation`
type InicioScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const PantallaInicio: React.FC = () => {
  const navigation = useNavigation<InicioScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
      <Button
        title="Reportar Denuncia"
        onPress={() => navigation.navigate('Formulario')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PantallaInicio;


