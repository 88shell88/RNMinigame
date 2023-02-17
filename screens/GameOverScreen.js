/** @format */

import { Image, Text, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game over</Title>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        <Text style={styles.highlightText}>{rounds}</Text> rounds to guess
        <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 100,

    flex: 1,
    padding: 24,
  },
  container: {
    borderRadius: 200,
    height: 200,
    height: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
