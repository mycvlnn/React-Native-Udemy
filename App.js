import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [listGoals, setListGoals] = useState([]);

  const addGoalSubmit = (enteredGoal) => {
    setListGoals((currentListGoals) => {
      return [
        ...currentListGoals,
        { text: enteredGoal, id: Math.random().toString() }
      ];
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAdd={addGoalSubmit} />
      <GoalList listGoals={listGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 30,
    flex: 1
  }
});
