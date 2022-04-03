import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import imageBackground from "./assets/background.jpg";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState("");

  const pickedNumberHandler = (pickedNumber) => {
    setPickedNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen />;
  }

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
        <StatusBar style="light" />
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  background: {
    opacity: 0.2
  }
});
