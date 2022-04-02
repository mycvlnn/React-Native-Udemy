import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const GoalInput = ({ onAdd }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAdd(enteredGoal);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoal}
        style={styles.inputText}
        placeholder="Your course goal !"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
    flex: 1
  },
  inputText: {
    width: "70%",
    borderColor: "blue",
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 4,
    padding: 8
  }
});
