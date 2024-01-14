import {Text, StyleSheet} from "react-native";
import {COLORS} from "../constants/colors";

export const InstructionText = ({children, style}) => {
  return (
      <Text style={[styles.text, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'montserrat-regular',
    color: COLORS.secondary,
    fontSize: 24,
  }
})