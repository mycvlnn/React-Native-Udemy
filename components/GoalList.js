import { View, Text, StyleSheet, FlatList } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = (props) => {
  const { listGoals } = props;

  return (
    <View style={styles.listGoals}>
      <Text style={styles.titleGoal}>List of goals...</Text>
      <FlatList
        data={listGoals}
        alwaysBounceVertical={false}
        renderItem={(itemData) => {
          return <GoalItem value={itemData.item.text} />;
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
};

export default GoalList;

const styles = StyleSheet.create({
  listGoals: {
    marginTop: 10,
    flex: 5
  },
  titleGoal: {
    fontWeight: "bold",
    marginBottom: 20
  }
});
