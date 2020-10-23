import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import  HappinessButton  from '../components/HappinessButton';
import NextButton from '../components/NextButton';
import  GraphButtons from '../components/GraphButtons';

export default function ContextLayout( { pageAnswer, setPageAnswer, handleSaveAndNext, question } ) {
  return (
    <>
      <Text style={styles.developmentModeText}>{question}</Text>
      <GraphButtons questions={[0,1,2,3]} useSymbols pageAnswer={pageAnswer} setPageAnswer={setPageAnswer} />
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
    answerOptions: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingBottom: 60,
    },
    selectedGraphButton: {
      backgroundColor: '#33FFC1',
    },
    buttonGraph: {
      backgroundColor: '#33FFC1',
      height: 60,
      width: 70,
      borderRadius:10,
      margin: 10,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
  
      elevation: 2,
    },
    buttonGraphSize0: {
      height: 60,
    },
    buttonGraphSize1: {
      height: 90,
    },
    buttonGraphSize2: {
      height: 120,
    },
    buttonGraphSize3: {
      height: 150,
    },
    buttonGraphHighlight: {
      backgroundColor: '#FF5733',
    },
  
    highlightedGraphButton: {
      backgroundColor: '#33FFC1',
  
      borderRadius: 100,
      height: 60,
      width: 115,
      display: 'flex',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
  
      elevation: 2,
  
    }
});
