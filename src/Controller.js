import React from "react";
import {View,TouchableOpacity,Stylesheet}from "react-native";
import {Icons} from 'react-native-vector-icons/MaterialIcons';

export default function controller({onNext,onPrev}){
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress ={onPrev}>
                <Icons name ="skip-previous" size={45}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icons name ="pause" size={45}/>
            </TouchableOpacity>

            <TouchableOpacity onPress ={onNext}>
                <Icons name ="skip-previous" size={45}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
    },
});