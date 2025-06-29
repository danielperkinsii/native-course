import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Deck from "./src/Deck";
import { Card, Button } from "@rneui/themed";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    text: "Card #2",
    uri: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    text: "Card #3",
    uri: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    text: "Card #5",
    uri: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    text: "Card #6",
    uri: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    text: "Card #7",
    uri: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    text: "Card #8",
    uri: "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Deck data={DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardText: {
    backgroundColor: "blue",
    color: "red",
  },
});
