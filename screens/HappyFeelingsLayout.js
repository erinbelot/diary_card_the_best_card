import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, Styles } from 'react-native';
import NextButton from '../components/NextButton';

export default function HappyFeelingsLayout( { pageAnswer, setPageAnswer, handleSaveAndNext, question  } ) {
  
  return (
    <>
      <Image
        source={
          __DEV__
            ? require("../assets/images/joy.png")
            : require("../assets/images/joy.png")
        }
        style={styles.welcomeImage}
      />
      <Text>Joy</Text>
      <Text style={styles.developmentModeText}>{question}</Text>
     
      <NextButton onPress={() => { handleSaveAndNext(question) }} />
    </>
  )};

  // render() {
  //   return (
  //     <ScrollView scrollEnabled={this.state.scrollEnabled}>
  //      <MultiSlider
  //        ...
  //        onValuesChangeStart={this.disableScroll}
  //        onValuesChangeFinish={this.enableScroll}
  //      />
  //    </ScrollView>
  //    );

  const styles = StyleSheet.create({
    welcomeImage: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 20,
      lineHeight: 19,
      textAlign: 'center',
    },
  });
