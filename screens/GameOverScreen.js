import {View, StyleSheet, Image, useWindowDimensions, ScrollView} from "react-native";
import {Title} from "../components/Title";
import {PrimaryButton} from "../components/PrimaryButton";
import {COLORS} from "../constants/colors";
import {InstructionText} from "../components/InstructionText";
import {useMemo} from "react";

export const GameOverScreen = ({rounds, userNumber, onRestart}) => {
  const {width, height} = useWindowDimensions();
  
  let imageSize = 300;
  
  const imageStyles = useMemo(() => {
    if (width < 430) {
      imageSize = 150;
    }
  
    if(height < 450) {
      imageSize = 100;
    }
    
    return {
      borderRadius: imageSize / 2,
      width: imageSize,
      height: imageSize,
    }
  },[width, height]);
  
  return (
      <ScrollView style={styles.screen}>
        <View style={styles.root}>
          <Title>GAME OVER</Title>
          <View style={[styles.imageWr, imageStyles]}>
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
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  root: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWr: {
    borderColor: COLORS.primary4,
    borderWidth: 3,
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