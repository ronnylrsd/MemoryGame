import React, { useCallback, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { Board } from "../../components/Board";
import { styles } from "./styles";

type Props = {
  cards: Array<string>;
};

export function Game({ cards }: Props) {
  const [selectedCards, setSelectedCards] = useState<Array<number>>([]);
  const [matchedCards, setMatchedCards] = useState<Array<number>>([]);
  const [shuffledCards, setShuffledCards] = useState<Array<string>>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handlePressCard = useCallback(
    (index: number) => {
      if (selectedCards.includes(index) || matchedCards.includes(index)) {
        return;
      }

      const newSelectedCards = [...selectedCards, index];
      setSelectedCards(newSelectedCards);

      if (newSelectedCards.length === 2) {
        const [firstIndex, secondIndex] = newSelectedCards;
        const firstCard = shuffledCards[firstIndex];
        const secondCard = shuffledCards[secondIndex];

        if (firstCard === secondCard) {
          const newMatchedCards = [...matchedCards, firstIndex, secondIndex];
          setMatchedCards(newMatchedCards);
          setSelectedCards([]);
          setScore((prevScore) => prevScore + 1);
        } else {
          setTimeout(() => {
            setSelectedCards([]);
          }, 1000);
        }
      }
    },
    [selectedCards, matchedCards, shuffledCards]
  );

  const handleRestartGame = useCallback(() => {
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
    setGameOver(false);
    shuffleCards();
  }, []);

  const shuffleCards = useCallback(() => {
    const doubledCards = cards.concat(cards);
    const shuffled = doubledCards.sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }, [cards]);

  useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

  useEffect(() => {
    if (
      matchedCards.length === shuffledCards.length &&
      shuffledCards.length > 0
    ) {
      setGameOver(true);
    }
  }, [matchedCards, shuffledCards]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memória</Text>
      {gameOver ? (
        <View style={styles.endGameContainer}>
          <Text style={styles.endGameTitle}>Fim de Jogo</Text>
          <Text style={styles.endGameScore}>Pontuação: {score}</Text>
          <Button title="Reiniciar" onPress={handleRestartGame} />
        </View>
      ) : (
        <View style={styles.gameContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Pontuação:</Text>
            <Text style={styles.score}>{score}</Text>
          </View>
          <Board
            cards={shuffledCards}
            onPressCard={handlePressCard}
            matchedCards={matchedCards}
          />
        </View>
      )}
    </View>
  );
}
