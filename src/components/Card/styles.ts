import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 80, // Definindo a largura do card
    height: 80,
    margin: 5,
    backgroundColor: "#FFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
