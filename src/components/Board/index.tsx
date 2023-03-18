import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type BoardProps = {
  cards: Array<string>;
  onPressCard: (index: number) => void;
  matchedCards: Array<number>;
};

export function Board({ cards, onPressCard, matchedCards }: BoardProps) {
  return (
    <View style={styles.boardContainer}>
      {cards.map((card, index) => {
        // Verifica se a carta atual já foi encontrada
        if (matchedCards.includes(index)) {
          return null;
        }
        return (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => onPressCard(index)}
          >
            <Text style={styles.cardText}>{card}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
