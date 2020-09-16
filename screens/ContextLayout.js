import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, Styles } from 'react-native';
import NextButton from '../components/NextButton';

export default function ContextLayout( { pageAnswer, setPageAnswer, handleSaveAndNext, question  } ) {
  
  return (
    <>
      <Text style={styles.HeadingText}>{`What happened today that \n may have contributed to \n emotional responses?`}</Text>
      <Text style={styles.developmentModeText}>{question}</Text>
    
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
      marginTop: 40,
      marginBottom: 5,
      color: 'rgba(103, 106, 121, 0.9)',
      fontSize: 27,
      textAlign: 'center',
    },

    SkillsText:{
      color: 'rgba(103, 106, 121, 0.9)',
      marginLeft: 150,
      marginBottom: 420,
      // this is literally here to push the next button into position. it's dumb and needs to be changed
    },
  });
