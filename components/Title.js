import {StyleSheet, Text} from "react-native";
import {COLORS} from "../constants/colors";

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
    color: COLORS.secondary,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    borderRadius: 8,
    padding: 12,
  }
})