import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';


type FormularioReporteProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Formulario'>;
};

const FormularioReporte: React.FC<FormularioReporteProps> = ({ navigation}) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('Mantencion de Calles');
  const [imagen, setImagen] = useState<string | null>(null);
  

  const seleccionarImagen = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response && response.assets && response.assets.length > 0) {
        setImagen(response.assets[0].uri ?? null);
      }
    });
  };

  const enviarFormulario = () => {   
    console.log({
      titulo,
      descripcion,
      categoria,
      imagen,
  });
    Alert.alert("Reporte enviado", "Su reporte ha sido enviado con éxito");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Atrás</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Reportar</Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />

      <Text style={styles.label}>Categoría</Text>
      <Picker
        selectedValue={categoria}
        style={styles.picker}
        onValueChange={(itemValue) => setCategoria(itemValue)}
      >
        <Picker.Item label="Seleccione una Categoria" value="SELECCION" />
        <Picker.Item label="Mantención de Calles" value="Mantencion de Calles" />
        <Picker.Item label="Áreas Verdes" value="Areas Verdes" />
        <Picker.Item label="Asistencia Social" value="Asistencia Social" />
        <Picker.Item label="Seguridad" value="Seguridad" />
      </Picker>

      <TouchableOpacity style={styles.imageButton} onPress={seleccionarImagen}>
        <Text style={styles.imageButtonText}>Subir Evidencia Fotográfica</Text>
      </TouchableOpacity>
      {imagen && <Image source={{ uri: imagen }} style={styles.imagePreview} />}

      <Button title="Enviar Reporte" onPress={enviarFormulario} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    marginBottom: 16,
  },
  imageButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  imageButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
});

export default FormularioReporte;

