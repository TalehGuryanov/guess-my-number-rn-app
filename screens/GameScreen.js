import {View, StyleSheet, Alert, FlatList, useWindowDimensions} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {Title} from "../components/Title";
import {useState, useEffect, useMemo} from "react";
import {NumberContainer} from "../components/game/NumberContainer";
import {PrimaryButton} from "../components/PrimaryButton";
import {Card} from "../components/Card";
import {InstructionText} from "../components/InstructionText";
import {GuessLogItem} from "../components/game/GuessLogItem";

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

export const GameScreen = ({userNumber, onGameOver, onCalcRounds}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const {width, height} = useWindowDimensions();
  
  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess])
  
  useEffect(() => {
     maxBoundary = 100;
     minBoundary = 1;
  }, [])
  
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
    onCalcRounds();
    setGuessRounds((prevState) => [newRndNumber, ...prevState])
  }
  const guessRoundsLength = useMemo(() => guessRounds.length, [guessRounds]);
  
  let content = <>
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
  </>
  
  if(width > 500) {
    content =
      <View style={styles.buttonsContainerWide}>
        <View style={styles.button}>
          <PrimaryButton onPress={nextGuessHandler.bind(null, 'lower')}>
            <Ionicons name={"md-remove"} size={24}/>
          </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.button}>
          <PrimaryButton onPress={nextGuessHandler.bind(null, 'greater')}>
            <Ionicons name={"md-add"} size={24}/>
          </PrimaryButton>
        </View>
      </View>
  }

  return (
      <View style={styles.screen}>
        <Title>Opponent's guess</Title>
        {content}
        <View style={styles.listWr}>
          <FlatList
              data={guessRounds}
              keyExtractor={item => item.toString()}
              renderItem={({item, index}) => (
                  <GuessLogItem guess={item} roundNumber={guessRoundsLength - index}/>
              )}
              style={styles.list}
          />
        </View>
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
  buttonsContainerWide: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  listWr: {
    flex: 1,
  },
  list: {
    marginTop: 24,
  }
  
})