import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const Root = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Expo Google Places!</Text>
      <Link href="/address-search">Search an address</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 100,
  },
  heading: {
    width: "100%",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default Root;
