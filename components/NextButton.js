import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function NextButton( { handleNextPress } ) { 
  return(
    <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
      <Text>Next</Text>
    </TouchableOpacity>
  )}

const styles = StyleSheet.create({
  nextButton: {
    fontSize: 50,
    backgroundColor: '#5B6172',
    color: '#ffffff',
    // fontFamily: 'Cabin',
    fontWeight: 'bold',
  }
});
