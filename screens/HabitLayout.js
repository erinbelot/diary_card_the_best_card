import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, Styles } from 'react-native';
import  HappinessButton  from '../components/HappinessButton';
import NextButton from '../components/NextButton';
import  ListOfRangeButtons from '../components/ListOfRangeButtons';

export default function HabitLayout( { pageAnswer, setPageAnswer, handleSaveAndNext, question } ) {
  return (
    <>
      <View style={styles.welcomeContainer}>
        <Image
          source={
            __DEV__
              ? require("../assets/images/green-man.png")
              : require("../assets/images/green-man.png")
          }
          style={styles.welcomeImage}
        />
      </View>
      <Text style={styles.developmentModeText}>{question}</Text>
      <ListOfRangeButtons questions={[0,1,2,3]} useSymbols pageAnswer={pageAnswer} setPageAnswer={setPageAnswer} />
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
