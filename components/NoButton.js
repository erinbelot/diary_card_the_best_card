import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function NoButton( { binaryAnswer handleNoPress setPageAnswer} ) {
 return(
  // <Text style={styles.noButton}>No</Text>
  // onPress={() => { setPageAnswer }

  <TouchableOpacity style={styles.noButton} onPress={onPress}>
      <Text style={styles.noText}>No</Text>
    </TouchableOpacity>
 )}

// const styles = StyleSheet.create({
//   noText: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//     backgroundColor: '#FFC0CB',
//   },
// });



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noButton: {
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
});
