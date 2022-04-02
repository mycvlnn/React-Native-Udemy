import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [listGoals, setListGoals] = useState([]);

  console.log("re-render");

  const goalInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnteredGoal(enteredText);
  };

  const addGoalSubmit = () => {
    setListGoals((currentListGoals) => {
      return [
        ...currentListGoals,
        { text: enteredGoal, id: Math.random().toString() },
      ];
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
        <FlatList
          data={listGoals}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
            s;
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
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
