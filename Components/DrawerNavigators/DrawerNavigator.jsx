import React from "react";
import { View, Text, Button } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pantry from "../Pantry/Pantry";
import RecipesPage from "../RecipesPage/RecipesPage";
import HomeScreen from "../HomeScreen/HomeScreen";
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="RecipesPage" component={RecipesPage} />
      <Drawer.Screen name="Pantry" component={Pantry} />
      <Drawer.Screen options={{headerShown:false}} name="Log Out" component={HomeScreen} />
    </Drawer.Navigator>
  )
}


export default DrawerNavigator;