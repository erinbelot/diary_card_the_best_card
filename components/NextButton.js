import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function NextButton( { onPress } ) { 
  return(
    <TouchableOpacity style={styles.nextButton} onPress={onPress}>
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
