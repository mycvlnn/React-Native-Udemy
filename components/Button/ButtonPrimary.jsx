import { View, Text, Pressable, StyleSheet } from "react-native";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        android_ripple={{ color: "#640233" }}
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
    marginTop: 4
  },
  btnInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#72063c",
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
