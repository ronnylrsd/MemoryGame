import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  cardContainer: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 8,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  cardText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
