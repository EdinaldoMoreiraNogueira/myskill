import React from "react";
import {
    Text, 
    TouchableOpacity,
    StyleSheet, 
    TouchableOpacityProps} from "react-native";

    interface SkillCardsProps extends TouchableOpacityProps{
      skill: string;
    }

export default function SkillCards({skill, ...rest}: SkillCardsProps){
   return (
   
    <TouchableOpacity 
    style={styles.buttonSkill}
    {...rest}
    >
   <Text style={styles.textSkill}>
 {skill}
   </Text>
   </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    
textSkill:{
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  buttonSkill:{
  
    backgroundColor: '#1f1e25',
    padding:15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 50
  }
})