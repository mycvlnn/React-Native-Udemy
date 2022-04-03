import { useState } from "react";

import { View, TextInput, StyleSheet, Alert } from "react-native";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputNumberHandler = (enteredValue) => {
    setEnteredNumber(enteredValue);
  };

  const resetInputNumber = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    console.log("enteredNumber", enteredNumber);

    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputNumber
          }
        ]
      );
    }
    onPickNumber(chosenNumber);

    console.log("Valid number");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputNumber}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={inputNumberHandler}
      />
      <View style={styles.actions}>
        <ButtonPrimary onClick={resetInputNumber}>Reset</ButtonPrimary>
        <ButtonPrimary onClick={confirmInputHandler}>Confirm</ButtonPrimary>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
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
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 3,
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
