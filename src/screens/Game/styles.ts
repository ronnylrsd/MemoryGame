import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
  },
  endGameContainer: {
    alignItems: "center",
  },
  endGameTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  endGameScore: {
    fontSize: 18,
    marginBottom: 32,
  },
  gameContainer: {
    alignItems: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
