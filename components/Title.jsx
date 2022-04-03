import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    borderColor: "#ff9933",
    borderWidth: 3,
    padding: 6,
    color: "#ff9933",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 4
  }
});
