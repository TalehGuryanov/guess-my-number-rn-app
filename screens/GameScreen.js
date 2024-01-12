import {View, StyleSheet, Alert} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {Title} from "../components/Title";
import {useState, useEffect, useMemo} from "react";
import {NumberContainer} from "../components/game/NumberContainer";
import {PrimaryButton} from "../components/PrimaryButton";
import {Card} from "../components/Card";
import {InstructionText} from "../components/InstructionText";

let maxBoundary = 100;
let minBoundary = 1;

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  
  if(randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

export const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  
  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess])
  
  const nextGuessHandler = (direction) => {
    if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert('Don\'t lie!',
          'You know that this is wrong...',
          [{text: 'Sorry!', style: 'cancel'}]
      );
      return;
    }
    
    if(direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  }

  return (
      <View style={styles.screen}>
        <Title>Opponent's guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
          <View style={styles.buttons}>
              <View style={styles.button}>
                <PrimaryButton onPress={nextGuessHandler.bind(null, 'lower')}>
                  <Ionicons name={"md-remove"} size={24}/>
                </PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={nextGuessHandler.bind(null, 'greater')}>
                  <Ionicons name={"md-add"} size={24}/>
                </PrimaryButton>
              </View>
            </View>
        </Card>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  }
})