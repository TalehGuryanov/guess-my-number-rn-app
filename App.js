import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {StartGameScreen} from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from "react";
import {GameScreen} from "./screens/GameScreen";
import {COLORS} from "./constants/colors";
import {GameOverScreen} from "./screens/GameOverScreen";


export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  
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
  
  return (
      <LinearGradient style={styles.root} colors={[COLORS.primary4, COLORS.secondary]}>
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
