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

  const deleteGoalHandler = (idGoal) => {
    setListGoals((currentListGoal) => {
      return currentListGoal.filter((goalItem) => goalItem.id !== idGoal);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAdd={addGoalSubmit} />
      <GoalList listGoals={listGoals} onDelete={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 30,
    flex: 1
  }
});
