/** @format */
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, SafeAreaView, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameIsOverHandler() {
    setGameIsOver(true);
  }

  function onStartNewGame() {
    setUserNumber(null);
    setRounds(0);
  }

  function roundsHandler() {
    setRounds(rounds + 1);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameIsOverHandler}
        roundsHandler={roundsHandler}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        rounds={rounds}
        userNumber={userNumber}
        onStartNewGame={onStartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
