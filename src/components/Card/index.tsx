import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  value: string;
  index: number;
  onPress: (index: number) => void;
};

export function Card({ value, index, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(index)}>
      <Text style={styles.cardText}>{value}</Text>
    </TouchableOpacity>
  );
}
