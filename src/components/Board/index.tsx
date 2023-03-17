import React, { useState } from "react";
import { View } from "react-native";
import { Card } from "../Card";
import { styles } from "./styles";

type Props = {
  cards: Array<string>;
  onPressCard: (index: number) => void;
};

export function Board({ cards, onPressCard }: Props) {
  const [selectedCards, setSelectedCards] = useState<Array<number>>([]);

  const handlePressCard = (index: number) => {
    // adiciona o índice da carta selecionada
    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, index]);

    // chama a função onPressCard passando o índice da carta
    onPressCard(index);
  };

  const renderCards = () => {
    return cards.map((card, index) => {
      // verifica se a carta foi selecionada
      const isSelected = selectedCards.includes(index);

      return (
        <Card
          key={index}
          value={card}
          index={index}
          onPress={handlePressCard}
        />
      );
    });
  };

  return <View style={styles.board}>{renderCards()}</View>;
}
