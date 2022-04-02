import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

const GoalInput = ({ onAdd, visible, onCloseModal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setEnteredGoal("");
    onAdd(enteredGoal);
    onCloseModal();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          style={styles.inputText}
          placeholder="Your course goal !"
          onChangeText={goalInputHandler}
        />
        <View style={styles.actions}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <Button title="Cancel" onPress={onCloseModal} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
    flex: 1
  },
  inputText: {
    width: "90%",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8
  },
  actions: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-around"
  },
  button: {
    marginRight: 10
  }
});
