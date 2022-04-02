import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalSubmit = (enteredGoal) => {
    setListGoals((currentListGoals) => {
      return [
        ...currentListGoals,
        { text: enteredGoal, id: Math.random().toString() }
      ];
    });
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const deleteGoalHandler = (idGoal) => {
    setListGoals((currentListGoal) => {
      return currentListGoal.filter((goalItem) => goalItem.id !== idGoal);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title="New Goal" onPress={showModal} />
      <GoalInput
        onCloseModal={hideModal}
        visible={modalVisible}
        onAdd={addGoalSubmit}
      />
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
