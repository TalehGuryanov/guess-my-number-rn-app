import {View, StyleSheet, Text, Dimensions} from "react-native";
import {COLORS} from "../../constants/colors";

export const NumberContainer = ({children}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
      </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondary,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: COLORS.secondary,
    fontSize:  deviceWidth < 380 ? 24 : 36,
    fontFamily: 'montserrat-bold',
  }
})