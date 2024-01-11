import {StyleSheet, Text} from "react-native";

export const Title = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ddb25f',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#ddb25f',
    borderRadius: 8,
    padding: 12,
  }
})