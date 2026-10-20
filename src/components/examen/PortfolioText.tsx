import { StyleSheet, Text, View } from "react-native";

export function PortfolioText() {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Jump start your crypto portfolio</Text>
      <Text style={styles.subtitle}>
        Take your investment portfolio to next level
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  tittle: {
    backgroundColor: "#00000",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 32,
    fontWeight: "600",
    letterSpacing: -0.64,
    lineHeight: 48,
  },
  subtitle: {
    backgroundColor: "#00000",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 21,
  },
});
