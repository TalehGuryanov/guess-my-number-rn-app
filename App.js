import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {StartGameScreen} from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from "react";
import {GameScreen} from "./screens/GameScreen";
import {COLORS} from "./constants/colors";


export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
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
            {userNumber ? <GameScreen userNumber={userNumber}/> : <StartGameScreen onPickNumber={startGameHandler}/>}
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
