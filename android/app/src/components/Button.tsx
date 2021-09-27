import React from "react";
import {
    Text, 
    TouchableOpacity,
    StyleSheet, 
    TouchableOpacityProps} from "react-native";

    interface ButtonProps extends TouchableOpacityProps {
      title: string;
    }

export default function Button({title, ...rest}: ButtonProps){
   return (
   
   <TouchableOpacity 
    style={styles.button}
    activeOpacity={.7}
    {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 50,
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize:17,
        fontWeight: 'bold',
      
      },
})