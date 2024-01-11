import { StyleSheet, ImageBackground } from 'react-native';
import {StartGameScreen} from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
      <LinearGradient style={styles.root} colors={['#4e0329', '#ddb25f']}>
        <ImageBackground
            source={require('./assets/images/background.png')}
            style={styles.root}
            resizeMode={"cover"}
            imageStyle={styles.backgroundImage}
        >
          <StartGameScreen />
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
