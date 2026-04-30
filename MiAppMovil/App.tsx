import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a mi app de Gabriela Portillo jajs :3!</Text>
      <StatusBar style="auto" />
      <CustomButton 
      title={"App"} 
      onPress={()=>{
        console.log("Press desde boton App")}}
        />
        <CustomButton 
      title={"Secondary Button"} 
      onPress={()=>{
        console.log("Press desde boton Secundario")}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6a6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
