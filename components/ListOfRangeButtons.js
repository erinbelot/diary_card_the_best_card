import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import HappinessButton from '../components/HappinessButton';
const valueToSymbols = ['▁','▂','▆','█']

export default function ListOfRangeButtons( { questions, useSymbols, pageAnswer, setPageAnswer } ) {
  return (
    <View style={styles.answerOptions}>
          {questions.map ((n) =>
          {
            return (
              <View key={`key_${n}`}>
                <TouchableOpacity
                  key={`option_${n}`}
                  style={n === pageAnswer ? styles.highlightedButton : styles.standardButton}
                  onPress={() => { setPageAnswer(n) }}>
                  <Text>{useSymbols ? valueToSymbols[n] : n}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>

 )};

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  highlightedButton: {
    backgroundColor: '#f59',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 100,
    height: 70,
    width: 70,
    padding: 10,
    display: 'flex',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  standardButton: {
    backgroundColor: '#9af',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 100,
    height: 70,
    width: 70,
    padding: 10,
    display: 'flex',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 20,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
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
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
    fontSize: 37,

  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },

  answerOptions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  answerOption: {

  }
});
