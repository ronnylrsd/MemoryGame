import React, { useState } from "react";
import { Text, View } from "react-native";
import { Board } from "../../components/Board";
import { styles } from "./styles";

type Props = {
  cards: Array<string>;
};

export function Game({ cards }: Props) {
  const [selectedCards, setSelectedCards] = useState<Array<number>>([]);

  const handlePressCard = (index: number) => {
    // adiciona o índice da carta selecionada
    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, index]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memória</Text>
      <Board cards={cards} onPressCard={handlePressCard} />
    </View>
  );
}
