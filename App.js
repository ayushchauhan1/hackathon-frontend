import { StatusBar } from 'expo-status-bar';

import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Image ,Button,TouchableOpacity} from 'react-native';
// import Home from './container/home';


export default function App() {
  return(
  
 
    <View style={styles.container}>
      
      <View style={{flexDirection:'row'}}>
        <Image style={{width: 120, height: 80}} source={require('./assets/aadhaar.png')}/>
      <Text style={{fontSize:32,paddingTop:30,paddingLeft:20,color: "#49000E"}}>Link AADHAAR</Text>
      </View>
      <TextInput style={styles.input}
      placeholder='enter aadhaar card no.'
      placeholderTextColor="#F8EDF1"
      keyboardType= 'numeric'
      editable={true}
      
     
      />
    
    <View style={styles.bottom}>
          <Button
          color= "#CF0029"
          
            title="OK" />
        </View>
         
      <StatusBar style="auto" /> 
      </View>
  );}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:300,
  marginLeft:30,
  marginRight:30,
  },
  input: {
     backgroundColor: "#CF0029",
    opacity: 0.8,
    borderWidth:1,
    borderColor: "#777",
    borderRadius:10,
    width:"100%",
    height:60,
    marginTop:30,
    
    padding:10,

  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    width: "100%",
    
    
    
  }
}); 
