import { Text, TouchableOpacity, StyleSheet} from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: ()=> void;
    variant: "primary" | "secondary" | "tertiary";
}

export default function CustomButton ({title, onPress, variant}: CustomButtonProps){
   const styles = getstyles(variant);
    return(<TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}> {title} </Text>
    </TouchableOpacity>);
}
const getstyles = (variant:  "primary" | "secondary" | "tertiary") => StyleSheet.create({
    button:{
        borderRadius: 6,
        //operador ternario
        backgroundColor: variant === "primary" ? 'navy' :
                         variant === "secondary" ? 'gray' : 'green',
        padding: 12,
        width: 150,

    },
   buttonText:{
    color: '#fff'
   }
})