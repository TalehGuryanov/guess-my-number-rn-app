import { View, TextInput, StyleSheet } from 'react-native';
import {PrimaryButton} from "../components/PrimaryButton";

export const StartGameScreen = () => {
  return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} maxLength={2} keyboardType={"number-pad"}/>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: '#ddb25f',
    borderBottomWidth: 2,
    borderBottomColor: '#ddb25f',
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