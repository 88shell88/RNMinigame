/** @format */
import { View, StyleSheet, Text } from "react-native";

function GameLogItem({ roundNumber, guess }) {
  return (
    <View>
      <Text style={styles.summaryText}>{roundNumber}</Text>
      <Text>{guess}</Text>
    </View>
  );
}

export default GameLogItem;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    marginTop: 100,
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
