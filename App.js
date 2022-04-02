import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import imageBackground from "./assets/background.jpg";

export default function App() {
  return (
    <LinearGradient
      colors={["#7F194C", "#F2B846"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        style={styles.rootContainer}
        source={imageBackground}
        resizeMode="repeat"
        imageStyle={styles.background}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  background: {
    opacity: 0.25
  }
});
