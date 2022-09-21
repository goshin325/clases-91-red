import { StatusBar } from 'expo-status-bar';
import { read } from 'package';
import { Component } from 'react';
import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native';
import BottomTabNavigator from './conponentes/BottomTabNavigator';

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> SHARE ART</Text>
      <StatusBar style="auto" />
      <BottomTabNavigator/>
      <TouchableOpacity style ={styles.button_style}>
       <Text style ={styles.title_but}>les´t be crea </Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8d85',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  button_style:{
  borderRadius:50,
  backgroundColor:"maroon",
  borderColor:"Dark red",
  borderWidth:2,
  height:30,
  width:30
  },

  titleText:{
   color: "white",
   fontWeight:"bold",
   fontSize: 44,
  fontFamily:'AppleSDGothicNeo-Regular'
  },

  title_but:{
    fontSize:15,
    fontFamily:'AppleSDGothicNeo-Regular',
    fontWeight:'bold'
  }

});
