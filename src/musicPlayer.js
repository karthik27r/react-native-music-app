import React, { useEffect, useState } from "react";
import {View,SafeAreaView,Text,Image,FlatList,Dimensions,Animated,StyleSheet,} from "react-native";

import songs from "./Data";
import controller from "./Controller";

const {width,height}=Dimensions.get("window");

export default function Player(){

    const scrollx = useRef(new Animated.vvalue(0)).current;

    const slider = useRef(null);

    const [songIndex,setSongIndex]=useState(0);

    const position = useRef(Animated.divide(scrollx,width)).current;

    useEffect(()=>{
        
        
        scrollx.addListener(({value})=>{
            const val = Math.round(value/width);
            setSongIndex(val);
        });

        return()=>{
            scrollX.removeAllListeners();
        };


    }, []);

    const goNext =() => {
        slider.current.scrollToOffset({
            offset:(songIndex+1)*width,
        });
    };

    const goPrev =() => {
        slider.current.scrollToOffset({
            offset:(songIndex-1)*width,
        });
    };
}