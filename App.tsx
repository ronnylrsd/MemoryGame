import { StatusBar } from "react-native";
import { Game } from "./src/screens/Game";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Game cards={["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐵"]} />
    </>
  );
}
