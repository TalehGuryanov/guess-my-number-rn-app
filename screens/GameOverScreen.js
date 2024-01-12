import {Text, View, StyleSheet} from "react-native";
import {Title} from "../components/Title";
import {PrimaryButton} from "../components/PrimaryButton";

export const GameOverScreen = ({rounds, userNumber, onRestart}) => {
  return (
      <View style={styles.screen}>
        <Title>Game Over</Title>
        <Text>Number of rounds: {rounds}</Text>
        <Text>Number was: {userNumber}</Text>
        <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
})