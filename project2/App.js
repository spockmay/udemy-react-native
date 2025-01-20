import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react'

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNum, setUserNum] = useState()

  function pickedNumberHandler(pickedNumber) {
    setUserNum(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  
  if (userNum) {
    screen = <GameScreen numToGuess={userNum}/>;
  };
  
  return (
    <>
      <StatusBar style='light' />
      <LinearGradient style={styles.rootScreen} colors={['#72063c','#ddb52f']}>
        <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
          <SafeAreaView style={{ flex: 1 }}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  background: {
  },
  backgroundImage: {
    opacity: 0.15,
  }
});