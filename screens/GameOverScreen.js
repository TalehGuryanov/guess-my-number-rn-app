import {View, StyleSheet, Image, Dimensions} from "react-native";
import {Title} from "../components/Title";
import {PrimaryButton} from "../components/PrimaryButton";
import {COLORS} from "../constants/colors";
import {InstructionText} from "../components/InstructionText";

export const GameOverScreen = ({rounds, userNumber, onRestart}) => {
  return (
      <View style={styles.screen}>
        <Title>GAME OVER</Title>
        <View style={styles.imageWr}>
          <Image
              source={require('../assets/images/success.png')}
              style={styles.image}
          />
        </View>
        <View style={styles.textWr}>
            <InstructionText style={styles.text}>
              You needed
              <InstructionText style={[styles.text, styles.textBold]}> {rounds} </InstructionText>
              rounds to guess the number
              <InstructionText style={[styles.text, styles.textBold]}> {userNumber} </InstructionText>
            </InstructionText>
        </View>
        <View style={styles.btnWr}>
          <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
        </View>
      </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWr: {
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderColor: COLORS.primary4,
    borderWidth: 3,
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    overflow: 'hidden',
    marginVertical: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textWr: {
    marginBottom: 24,
  },
  text: {
    color: COLORS.primary4,
    textAlign: 'center',
  },
  textBold: {
    fontFamily: 'montserrat-bold',
  },
  btnWr: {
    width: '100%',
  }
})