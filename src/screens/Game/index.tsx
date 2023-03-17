import React, { useEffect, useState } from "react";
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

  function handlePressCard(index: number) {
    //Verifica se a carta selecionada já foi correspondido
    if (matchedCards.includes(index)) {
      return;
    }
    // Verifica se já há uma carta selecionada
    if (selectedCards.length === 1) {
      // Armazena o índice da carta atualmente selecionada
      const currentCardIndex = index;

      // Verifica se a carta atual é igual à carta previamente selecionada
      if (shuffledCards[currentCardIndex] === shuffledCards[selectedCards[0]]) {
        // Adiciona as cartas selecionadas ao array matchedCards
        setMatchedCards((prevMatchedCards) => [
          ...prevMatchedCards,
          ...selectedCards,
          currentCardIndex,
        ]);

        // Adiciona 1 à pontuação
        setScore((prevScore) => prevScore + 1);
      }

      // Limpa as cartas selecionadas
      setSelectedCards([]);
    } else {
      // Adiciona o índice da carta selecionada
      setSelectedCards((prevSelectedCards) => [...prevSelectedCards, index]);
    }
  }

  function handleRestartGame() {
    setSelectedCards([]);
    setScore(0);
    setGameOver(false);
  }

  function shuffleCards() {
    const doubledCards = cards.concat(cards);
    const shuffled = doubledCards.sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    // Verifica se o jogador acertou todas as cartas
    if (matchedCards.length === shuffledCards.length) {
      setGameOver(true);
    }
  }, [matchedCards]);

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
          <Board cards={shuffledCards} onPressCard={handlePressCard} />
        </View>
      )}
    </View>
  );
}
