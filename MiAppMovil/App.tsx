import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import CustomInput from "./src/components/CustomInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a mi app de Gabriela Portillo jajs :3!</Text>
      <StatusBar style="auto" />
      <CustomInput 
      type={"number"} 
      placeholder={""} 
      value={""}
      onChange={function (text: string): void {} } />
      <CustomButton 
      title={"App"} 
      onPress={()=>{
        console.log("Press desde boton App");
        }
      }
      variant="primary"
        />
        <CustomButton 
      title={"Secondary Button"} 
      onPress={()=>{
        console.log("Press desde boton Secundario");
      }}
      variant="secondary"
        />
        <CustomButton 
      title={"Tertiary Button"} 
      onPress={()=>{
        console.log("Press desde boton Terciario");
      }}
      variant="tertiary"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a6a6ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
