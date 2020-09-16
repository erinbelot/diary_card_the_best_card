import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, Styles } from 'react-native';
import NextButton from '../components/NextButton';

export default function MindfulnessLayout( { pageAnswer, setPageAnswer, handleSaveAndNext, question  } ) {
  
  return (
    <>
      <Text style={styles.HeadingText}>Mindfulness</Text>
      <Text style={styles.developmentModeText}>{question}</Text>
      <Image
          source={
            __DEV__
              ? require("../assets/images/purple-emoji.png")
              : require("../assets/images/urge-man.png")
          }
          style={styles.emoji}
        />
      <NextButton onPress={() => { handleSaveAndNext(question) }} />
    </>
  )};

  const styles = StyleSheet.create({
   
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 15,
      lineHeight: 19,
      textAlign: 'center',
    },

    HeadingText: {
      marginTop: 50,
      marginBottom: 5,
      color: 'rgba(103, 106, 121, 0.9)',
      fontSize: 30,
      textAlign: 'center',
    },

    emoji: {
      width: 70,
      height: 70,
      marginLeft: 60,
      marginTop: 30,
    }
  });
