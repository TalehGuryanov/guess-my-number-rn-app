import { View, TextInput, StyleSheet, Alert } from 'react-native';
import {PrimaryButton} from "../components/PrimaryButton";
import {useState} from "react";
import {COLORS} from "../constants/colors";

export const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  
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
  
  return (
      <View style={styles.inputContainer}>
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
      </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.primary3,
    borderRadius: 8,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
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