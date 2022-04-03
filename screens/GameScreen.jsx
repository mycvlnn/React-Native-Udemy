import { useState, useEffect, useMemo } from "react";

import { Text, View, StyleSheet, Alert } from "react-native";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let maxBoundary = 100;
let minBoundary = 1;

const GameScreen = ({ chosenNumber, onGameOver }) => {
  const initialGuess = useMemo(() => {
    return generateRandomBetween(minBoundary, maxBoundary, chosenNumber);
  }, []);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    //direction => 'lower', 'greater'

    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "greater" && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel"
        }
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newGuess);
  };

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      onGameOver();
    }
  }, [currentGuess, chosenNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.text}>Higher or lower ?</Text>
      </View>
      <View style={styles.actions}>
        <ButtonPrimary onClick={nextGuessHandler.bind(this, "lower")}>
          -
        </ButtonPrimary>
        <ButtonPrimary onClick={nextGuessHandler.bind(this, "greater")}>
          +
        </ButtonPrimary>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 36
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10
  },
  actions: {
    flexDirection: "row"
  }
});
