import React from 'react'

export default function NoButton( { binaryAnswer handleNoPress setPageAnswer} ) {
 return (
  <Text> no </Text>
  onPress={() => { setPageAnswer }
 )
}

const styles = StyleSheet.create({
  noButton: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
