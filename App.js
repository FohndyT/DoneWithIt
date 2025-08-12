import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  const hanfdlePress = () => console.log("Text pressed");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={hanfdlePress}>
        Coucou tout le monde !
      </Text>
      <TouchableHighlight onPress={() => console.log("Heeeyyyyy")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
