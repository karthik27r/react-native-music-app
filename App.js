import React from "react";
import { StyleSheet,Text,View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'//import the icons.Specified in build.gradle

export default function App(){
  return(
    <View style = {{flex: 1, alignItems: "center",justifyContent:"space-around"}}>
      <Text style={{fontSize:40,textAlign:"center"}}>Music Player</Text>
      <Icon name="music" size={200}/>
    </View>
  )
}

const styles = StyleSheet.create({})
