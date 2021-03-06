import React from "react";
import {View,TouchableOpacity,StyleSheet}from "react-native";
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function Controller({onNext,onPrev}){
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress ={onPrev}>
                <Icons name ="skip-previous" size={45} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icons name ="pause" size={45} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity onPress ={onNext}>
                <Icons name ="skip-next" size={45} color="white"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        flexDirection:"row",
        justifyContent:"space-around",
        color:'white',
    },
});