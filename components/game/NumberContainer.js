import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    padding: 20,
    margin: 30
  },
  numberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.accent500
  }
});
