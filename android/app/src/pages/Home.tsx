import React, {useState, useEffect} from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  TextInput,
  Platform,
  FlatList
} from 'react-native';
import Button from '../components/Button';
import SkillCards from '../components/SkillCards';


interface ISkillData{
  id: string;
  name: string;

}

export default function Home(){
  
  const [newSkill, setNewSkill] = useState("");

  const [mySkill, setMySkill] = useState<ISkillData[]>([]);

  const [greting, setGreting] = useState('');

  function handleAddNewSkill(){

    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkill([...mySkill, data])

  }

  function handleRemoveSkill (id: string){
    setMySkill(oldSkill => oldSkill.filter(item => item.id !== id))
  }

  useEffect(()=>{
    const currentHours = new Date().getHours();

    if(currentHours < 12){
      setGreting('Bom dia (:');
    }
    else if(currentHours > 12 && currentHours < 18){
      setGreting('Boa tarde (:');
    }
    else{
      setGreting('Boa noite (:');
    }
  },[mySkill])

  return (
    <View style={styles.container} >

     
      <Text style={styles.title}>Seja Bem Vindo, Edinaldo</Text>

      <TextInput
      style={styles.input}
      placeholder="New Skill"
      placeholderTextColor="#999"
      onChangeText={setNewSkill}
      />

     <Button
      onPress={handleAddNewSkill}
      title="Add"
      />
      <Text style={[styles.title, {marginTop: 50}]}>
       New Skill
      </Text>
     
      <FlatList
      data={mySkill}
      keyExtractor={item => item.id}
      renderItem={({item})=>(
        <SkillCards 
        skill={item.name} 
        onPress={() => handleRemoveSkill(item.id)}
        />
      )}
      />

      <Text style={styles.greting}>
        {greting}
      </Text>
   
    </View>
  )

}
const styles = StyleSheet.create({
  
  container:{
  flex: 1, 
  backgroundColor: '#121015',
  paddingHorizontal: 30,
  paddingVertical: 70,
},

title:{
  color: '#FFFFFF',
  fontSize: 24,
  fontWeight: 'bold'
},
input:{
  backgroundColor: '#1f1e25',
  color:'#FFFFFF',
  fontSize:15,
  padding: Platform.OS === 'ios'? 15 : 10,
  borderRadius: 8,
  marginTop: 50,
},
greting: {
  color: '#FFFFFF',
  fontSize: 24,
}

})