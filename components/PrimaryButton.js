import { View, StyleSheet, Text, Pressable } from 'react-native';


export const PrimaryButton = ({ onPress, children }) => {
  return (
      <View style={styles.buttonContainer}>
        <Pressable
            onPress={onPress}
            android_ripple={{color: "#640223"}}
            style={({pressed}) => pressed ? [styles.button, styles.pressed] : styles.button}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>

  )
}
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75
  }
})