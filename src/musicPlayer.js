import React, { useEffect, useState } from "react";
import {View,SafeAreaView,Text,Image,FlatList,Dimensions,Animated,StyleSheet,} from "react-native";

import songs from "./Data.json";
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

    const renderItem=({index,item})=>{
        return(
            <Animated.View style={{alignItmes:"center",
                                   width:width,
                                   transform:[{
                                    translateX:Animated.multiply(
                                        Animated.add(postion,-index),
                                        -100
                                    ),
                                   },
                                ],
                            }}>
                                <Animated.Image
                                    source={item.image}
                                    style={{width:320, height:320, borderRadius:5}}/>
            </Animated.View>
        );

    };

    return(
        <SafeAreaView style={StyleSheet.container}>
            <SafeAreaView style={{height:320}}>
                <Animated.FlatList
                    ref={slider}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrllEventThrottle={16}
                    data={songs}
                    renderItem={renderItem}
                    keyExtractor={(item)=>item.id}
                    onScroll={Animated.event(
                        [{nativeEvent:{contentOffset:{x:scrollx}}}],
                        {useNativeDriver:true}
                    )}/>
            </SafeAreaView>
            
            <View>
                <Text style={style.title}>{songs[songIndex].title}</Text>
                <Text style={style.title}>{songs[songIndex].artist}</Text>
            </View>

            <controller onNext={goNext} onPrev={goPrev}/>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    title: {
      fontSize: 28,
      textAlign: "center",
      textTransform: "capitalize",
    },
    artist: {
      fontSize: 18,
      textAlign: "center",
      textTransform: "capitalize",
    },
    container: {
      justifyContent: "space-evenly",
      height: height,
      maxHeight: 500,
    },
  });