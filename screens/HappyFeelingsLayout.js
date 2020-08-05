import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, Styles } from 'react-native';
import NextButton from '../components/NextButton';

export default function HappyFeelingsLayout( { pageAnswer, setPageAnswer, handleSaveAndNext, question  } ) {
  
  return (
    <>
      <Text style={styles.developmentModeText}>{question}</Text>
      <NextButton onPress={() => { handleSaveAndNext(question) }} />
    </>
  )};

  const styles = StyleSheet.create({
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
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
