import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  board: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardFlipped: {
    transform: [{ rotateY: "180deg" }],
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backfaceVisibility: "hidden",
  },
  cardSolved: {
    backgroundColor: "#6AC259",
  },
  cardText: {
    fontSize: 24,
  },
});
