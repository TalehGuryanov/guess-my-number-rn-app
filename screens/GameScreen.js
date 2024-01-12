import {Text, View, StyleSheet} from "react-native";
import {Title} from "../components/Title";
import {useState} from "react";
import {NumberContainer} from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  
  if(randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

export const GameScreen = ({userNumber}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
      <View style={styles.screen}>
        <Title>Opponent's guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text>Higher or Lower?</Text>
        </View>
        <View>
          <Text>Log Rounds</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  }
})