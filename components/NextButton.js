import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function NextButton( { onPress } ) { 
  return(
    <TouchableOpacity style={styles.nextButton} onPress={onPress}>
      <Text style={styles.nextText}>NEXT</Text>
    </TouchableOpacity>
  )}

const styles = StyleSheet.create({
  nextButton: {
    fontSize: 50,
    backgroundColor: '#8c909c',
    color: '#ffffff',
    height: '9%',
    // fontFamily: 'Cabin',
    fontWeight: 'bold',
  },
  nextText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    position: 'absolute',
    textAlign: 'left',
  }

});
