import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your course goal !" />
        <Button title="Add Goal" />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        {/* <Text>List of goals...</Text> */}
        <Text style={styles.box}>1</Text>
        <Text style={styles.box}>2</Text>
        <Text style={styles.box}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 30,
  },
  box: {
    padding: 30,
    backgroundColor: "orange",
    borderRadius: 10,
    color: "white",
    overflow: "hidden",
  },
});
