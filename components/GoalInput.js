import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image
} from "react-native";
import goalImage from "../assets/images/goal.png";
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
        <Image style={styles.image} source={goalImage} />
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
    flex: 1,
    backgroundColor: "#552177"
  },
  inputText: {
    width: "90%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    color: "#fff"
  },
  actions: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-around"
  },
  button: {
    marginRight: 10
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 24
  }
});
