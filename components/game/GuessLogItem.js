import {View, StyleSheet} from "react-native";
import {InstructionText} from "../InstructionText";
import {COLORS} from "../../constants/colors";

export const GuessLogItem = ({roundNumber, guess}) => {
  return (
      <View style={styles.item}>
        <InstructionText style={styles.text}>#{roundNumber}</InstructionText>
        <InstructionText style={styles.text}>Opponent's Guess: {guess}</InstructionText>
      </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    backgroundColor: COLORS.primary3,
    borderRadius: 6,
  },
  text: {
    fontSize: 18,
    color: COLORS.secondary
  }
})