import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    borderColor: Colors.accent500,
    borderWidth: 3,
    padding: 6,
    color: Colors.accent500,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 4
  }
});
