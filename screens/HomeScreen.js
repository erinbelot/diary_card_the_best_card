import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useCallback, useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';

import { MonoText } from '../components/StyledText';
import  HappinessButton  from '../components/HappinessButton';

export default function HomeScreen() {
  const [name, setName] = useState('counter')
  const [count, setCount] = useState(0)
  const [numberAnswer, setNumberAnswer] = useState(null)

  useEffect(() => {
    const db = SQLite.openDatabase("diaryCard")
    db.transaction((tx) => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS responses (
        question STRING NOT NULL,
        date TEXT,
        answer INTEGER NOT NULL DEFAULT 0)
      `);
    });
  }, []);

  const updateCount = (increase) => {
    const db = SQLite.openDatabase("counters")
    db.transaction((tx) => {
      tx.executeSql(`UPDATE counters SET total=total+1 WHERE name="counter"`, [], console.log, console.log);

      tx.executeSql(
        `SELECT counters.total FROM counters WHERE counters.name="counter"`,
        [],
        (transaction, result) => { setCount(result.rows.item(0).total) },
        console.log
      );
    });
  }

  const handleNextPress = () => {
    const db = SQLite.openDatabase("diaryCard")
    db.transaction((tx) => {
      tx.executeSql(`INSERT INTO responses (question, answer) VALUES ("how are you?", ${numberAnswer})`, [], console.log, console.log);

    // then go to next page
    });
  }

  const handleNumberPress = (i) => {
    setNumberAnswer(i)
  }

  const valueToSymbols = ['▁','▂','▆','█']

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
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

        <TouchableOpacity
          style={styles.helpLink}
          onPress={updateCount}
        >
          <Text style={styles.developmentModeText}>How strong was your urge to gamble?</Text>
         
        </TouchableOpacity>

        <View style={styles.answerOptions}>
          {[0, 1, 2, 3].map ((n,i) => 
          {
            return (
              <>
                <HappinessButton key={`key_${n}`} amount={n}/>
                <TouchableOpacity
                  key={`option_${i}`}
                  style={i === numberAnswer ? styles.highlightedButton : styles.standardButton}
                  onPress={() => { handleNumberPress(i) }}>
                  <Text>{valueToSymbols[i]}</Text>
                </TouchableOpacity>
            </>)
          })}
        </View> 
        
      
              
          

          {/* {/ <View style={styles.answerOption}>
            <Text>{'numberAnswer:'}{numberAnswer}</Text>
          </View> } */}
        

        <TouchableOpacity
          style={styles.helpLink}
          onPress={handleNextPress}
        >
          <Text>Next</Text>
        </TouchableOpacity>

      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}
        >
          <MonoText style={styles.codeHighlightText}>
            navigation/BottomTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

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
