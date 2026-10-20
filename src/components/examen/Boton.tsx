import { Pressable, StyleSheet, Text } from "react-native";

type BotonProps = {
  title?: string;
  onPress?: () => void;
};
export function Boton({ title = "Get Started", onPress }: BotonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#6552FE",
    borderRadius: 16,
    height: 52,
    justifyContent: "center",
    shadowColor: "#6552FE",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.24,
    shadowRadius: 24,
    elevation: 8,
  },
  pressed: {
    opacity: 0.88,
  },
  label: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
});
