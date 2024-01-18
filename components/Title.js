import {StyleSheet, Text, Platform} from "react-native";
import {COLORS} from "../constants/colors";

export const Title = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'montserrat-bold',
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.secondary,
    marginBottom: 16,
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: COLORS.secondary,
    borderRadius: 8,
    padding: 12,
  }
})