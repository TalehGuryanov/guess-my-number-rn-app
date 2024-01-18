import {View, StyleSheet, Dimensions} from "react-native";
import {COLORS} from "../constants/colors";

export const Card = ({children, style}) => {
  return (
      <View style={[styles.card, style]}>
        {children}
      </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.primary3,
    borderRadius: 8,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  }
})