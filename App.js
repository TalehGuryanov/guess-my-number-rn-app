import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {StartGameScreen} from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import {useCallback, useState} from "react";
import {GameScreen} from "./screens/GameScreen";
import {COLORS} from "./constants/colors";
import {GameOverScreen} from "./screens/GameOverScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  
  console.log(fontsLoaded, fontError)
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }
  
  const gameOverHandler = () => {
    setGameIsOver(true);
  }
  
  const restartGameHandler = () => {
    setGameIsOver(false);
    setUserNumber(null);
  }
  
  let screen = <StartGameScreen onPickNumber={startGameHandler}/>;
  
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  
  if(gameIsOver) {
    screen = <GameOverScreen userNumber={userNumber} onRestart={restartGameHandler}/>;
  }
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
      <LinearGradient
          style={styles.root}
          colors={[COLORS.primary4, COLORS.secondary]}
          onLayout={onLayoutRootView}
      >
        <ImageBackground
            source={require('./assets/images/background.png')}
            style={styles.root}
            resizeMode={"cover"}
            imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.root}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
