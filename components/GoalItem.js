import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ value, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#470A6F" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDelete}
      >
        <Text style={styles.goalText}>{value}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "purple",
    borderRadius: 4,
    marginTop: 4
  },
  goalText: {
    color: "white",
    padding: 10
  },
  pressedItem: {
    backgroundColor: "#8C1BD7"
  }
});
