import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        android_ripple={{ color: Colors.primary800 }}
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={onClick}
      >
        <Text style={styles.btnText} onPress={onClick}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  btnOuterContainer: {
    overflow: "hidden",
    borderRadius: 28,
    flex: 1,
    marginHorizontal: 4
  },
  btnInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary500,
    elevation: 4
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 13,
    fontWeight: "500"
  },
  pressed: {
    opacity: 0.8
  }
});
