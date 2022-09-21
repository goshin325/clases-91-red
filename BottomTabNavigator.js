import React, { Component } from "react";
 import { NavigationContainer } from "@react-navigation/native";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
  import SonyScreen from "../screen/Sony";
   import busquedaScreen from "../screen/busqueda";

const Tab = createBottomTabNavigator();
    
export default class BottomTabNavigator extends Component { 
    render() {
         return ( 
         <NavigationContainer> 
        <Tab.Navigator> 
        <Tab.Screen name="Sony" component={SonyScreen} />
         <Tab.Screen name="Busqueda" component={busquedaScreen} /> 
         </Tab.Navigator> 
         </NavigationContainer> );
          } }