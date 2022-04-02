import { View, Text, StyleSheet } from "react-native";

const GoalItem = ({ value }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{value}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "purple",
    borderRadius: 4,
    marginTop: 4,
    padding: 10
  },
  goalText: {
    color: "white"
  }
});
