import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder="Your course goal !" />
        <Button title="Add Goal" />
      </View>
      <View style={styles.listGoals}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 30,
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
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
  },
});
