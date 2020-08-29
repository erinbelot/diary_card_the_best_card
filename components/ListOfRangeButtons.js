import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import HappinessButton from '../components/HappinessButton'

export default function ListOfRangeButtons( { questions, useSymbols, pageAnswer, setPageAnswer } ) {
  return (
    <View style={styles.answerOptions}>
          {questions.map ((n) =>
          {
            return (
              <View key={`key_${n}`}>
                <TouchableOpacity
                  key={`option_${n}`}
                  style={[
                    styles.buttonGraph,
                    styles[`buttonGraphSize${n}`],
                    (n === pageAnswer ? styles.buttonGraphHighlight : null)
                  ]}
                  onPress={() => { setPageAnswer(n) }}>
                  <Text>{useSymbols ? '' : n}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
 )};

 const styles = StyleSheet.create({
  answerOptions: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 60,
  },
  selectedGraphButton: {
    backgroundColor: '#ffffff',
  },
  buttonGraph: {
    backgroundColor: '#FFC0CB',
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
    backgroundColor: '#ffccff',
  },

  highlightedGraphButton: {
    backgroundColor: '#A4A7B1',

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
