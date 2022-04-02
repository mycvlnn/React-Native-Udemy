import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ value, onDelete }) => {
  return (
    <Pressable onPress={onDelete}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{value}</Text>
      </View>
    </Pressable>
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
