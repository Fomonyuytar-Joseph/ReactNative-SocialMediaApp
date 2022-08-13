/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 
 */

import React, {FC, useEffect} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const val = new Animated.Value(0);

const App: FC = () => {

  const animateValues = () => {
    Animated.timing(val,{
      toValue:1,
      duration:500,
      useNativeDriver:false,
    }).start();
  }

  useEffect(()=>{
    animateValues();

  },[])

  const coverInterpolate = val.interpolate({
    inputRange: [0, 1],
    outputRange: [9, 1],
  });


  const imageInterpolate = val.interpolate({
    inputRange:[0,1],
    outputRange:["200%","100%"]
  })

  const mainInterpolate = val.interpolate({
    inputRange:[0,1],
    outputRange:[0,1]

  })


  const dynamicFlex={
    flex:coverInterpolate
  }

  const dynamicImage={

    height:imageInterpolate

  }

  const dynamicMain={
     
    opacity:mainInterpolate

  }

  return (
    <View style={styles.container}>

      <Animated.View style={dynamicFlex}>

        <Animated.Image
          source={{
            uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHw%3D&w=1000&q=80',
          }}
          style={[styles.coverImage, dynamicImage]}
          width={screenWidth}
          height={200}
        />

      </Animated.View>

      <Animated.View style={[styles.main,dynamicMain]}>

        <View style={styles.popular}></View>

        <View style={{flex:3, backgroundColor:"blue"}}></View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  main: {
    flex: 3,
  },
  coverImage: {
    width: screenWidth,
    height: "100%"
  },
  popular:{
    flex:1,
    backgroundColor:"red"
  }
});

export default App;
