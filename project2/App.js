import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
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
    screen = <GameScreen />;
  };
  
  return (
    <><StatusBar style='light' />
      <LinearGradient style={styles.rootScreen} colors={['#72063c','#ddb52f']}>
        <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
          {screen}
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