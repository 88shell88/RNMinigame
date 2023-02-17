/** @format */

import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
