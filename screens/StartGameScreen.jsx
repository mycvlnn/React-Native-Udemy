import { useState } from "react";

import { View, TextInput, StyleSheet, Alert } from "react-native";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import Title from "../components/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
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
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.title}>
        <Title>Guess My Number</Title>
      </View>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
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
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100
  },
  title: {
    alignItems: "center"
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
