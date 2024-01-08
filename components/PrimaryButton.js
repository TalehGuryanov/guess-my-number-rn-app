import { View, StyleSheet, Text } from 'react-native';


export const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonContainer: {
  
  }
})