import { View, TextInput, StyleSheet } from "react-native";
import ButtonPrimary from "../components/Button/ButtonPrimary";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <ButtonPrimary>Reset</ButtonPrimary>
      <ButtonPrimary>Confirm</ButtonPrimary>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: "#72063c",
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.25
  }
});
