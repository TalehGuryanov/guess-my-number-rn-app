import {View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useState, useMemo} from "react";

import {PrimaryButton} from "../components/PrimaryButton";
import {COLORS} from "../constants/colors";
import {Title} from "../components/Title";
import {Card} from "../components/Card";
import {InstructionText} from "../components/InstructionText";

export const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const {height} = useWindowDimensions();
  
  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  }
  
  const resetInputHandler = () => {
    setEnteredNumber('');
  }
  
  const confirmInputHandler = () => {
    const formattedNumber = parseInt(enteredNumber);
    
    if(isNaN(formattedNumber) || formattedNumber <= 0 || formattedNumber > 99) {
      Alert.alert(
          'Invalid number!',
          'Number has to be a number between 1 and 99.',
          [{text: 'Okay', style: 'destructive',
            onPress: resetInputHandler}
          ])
      
      return null;
    }
  
    onPickNumber(formattedNumber)
  }
  
  const marginTop = useMemo(() =>height <= 430 ? 30 : 100, [height]);
  
  return (
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View style={{marginTop, ...styles.rootContainer}}>
            <Title>Start a new game!</Title>
            <Card>
              <InstructionText>
                Enter a number
              </InstructionText>
              <TextInput
                  style={styles.input}
                  maxLength={2}
                  keyboardType={"number-pad"}
                  onChangeText={numberInputHandler}
                  value={enteredNumber}
              />
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: COLORS.secondary,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secondary,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
})