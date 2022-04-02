import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [listGoals, setListGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnteredGoal(enteredText);
  };

  const addGoalSubmit = () => {
    console.log("enteredGoal", enteredGoal);
    const updatedListGoals = [...listGoals];
    updatedListGoals.push(enteredGoal);
    setListGoals(updatedListGoals);
  };

  const renderListGoals = () => {
    return listGoals.map((goal, index) => {
      return (
        <View style={styles.goalItem} key={index}>
          <Text style={styles.goalText}>{goal}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          style={styles.inputText}
          placeholder="Your course goal !"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalSubmit} />
      </View>
      <View style={styles.listGoals}>
        <Text>List of goals...</Text>
        <ScrollView alwaysBounceVertical={false}>
          {renderListGoals()}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 30,
    flex: 1,
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
    flex: 1,
  },
  inputText: {
    width: "70%",
    borderColor: "blue",
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 4,
    padding: 8,
  },
  listGoals: {
    marginTop: 10,
    flex: 5,
  },
  goalItem: {
    backgroundColor: "purple",
    borderRadius: 4,
    marginTop: 4,
    padding: 10,
  },
  goalText: {
    color: "white",
  },
});
