import {View, StyleSheet, Text} from "react-native";
import {COLORS} from "../../constants/colors";

export const NumberContainer = ({children}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondary,
    borderRadius: 8,
    padding: 24,
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: COLORS.secondary,
    fontSize: 36,
    fontWeight: 'bold',
  }
})