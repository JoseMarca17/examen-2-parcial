import { StyleSheet, Text, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Crypt</Text>
      <Text style={styles.accent}>X</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 96,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 64,
    fontWeight: "700",
    lineHeight: 96,
  },
  accent: {
    color: "#6a28dd",
    fontFamily: "Poppins",
    fontSize: 64,
    fontWeight: "700",
    lineHeight: 96,
  },
});
