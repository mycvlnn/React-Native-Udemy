import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello guys</Text>
      <Text
        style={{ margin: 16, padding: 16, borderColor: "blue", borderWidth: 1 }}
      >
        Another Text
      </Text>
      <Button title="Click me" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    backgroundColor: "blue",
    color: "white",
  },
});
