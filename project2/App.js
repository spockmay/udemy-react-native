import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './utils/colors'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNum, setUserNum] = useState()
  const [gameOver, setGameOver] = useState(false)

  const [loaded, error] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNum(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  
  if (userNum) {
    screen = <GameScreen numToGuess={userNum} onGameOver={setGameOver}/>;
  };

  if (gameOver) {
    screen = <GameOverScreen />
  }
  
  return (
    <>
      <StatusBar style='light' />
      <LinearGradient style={styles.rootScreen} colors={[Colors.primary500, Colors.secondary500]}>
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