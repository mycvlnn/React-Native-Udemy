import { View, TextInput, StyleSheet } from "react-native";
import ButtonPrimary from "../components/Button/ButtonPrimary";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputNumber}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.actions}>
        <ButtonPrimary>Reset</ButtonPrimary>
        <ButtonPrimary>Confirm</ButtonPrimary>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: "#3D0421",
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.25
  },
  inputNumber: {
    fontSize: 20,
    color: "#ff9933",
    borderBottomColor: "#ff9933",
    borderBottomWidth: 5,
    width: 50,
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto"
  },
  actions: {
    flexDirection: "row"
  }
});
