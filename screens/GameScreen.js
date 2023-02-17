/** @format */
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, roundsHandler }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState([userNumber]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("lie", "wron", [{ text: "sorry", style: "cancel" }]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary, userNumber, currentGuess);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    roundsHandler();
    setGuesses((g) => [currentGuess, ...g]);
  }

  return (
    <View style={styles.screen}>
      <View>
        <Title>Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <Card>
        <InstructionText style={styles.instructionText}>
          higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList
          data={guesses}
          renderItem={(itemData) => (
            <GuessLogItem roundNumber={itemData.index} guess={itemData.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    marginTop: 100,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
});
