import * as React from "react";
import { Text as TextRN, StyleSheet } from "react-native";
import Theme from "constants/Theme";
import Colors from "constants/Colors";

export default function Text({ variant = "default", style, ...props }) {
  const variantStyle = Theme.variants[variant] || {};
  return <TextRN {...props} style={[styles.main, variantStyle, style]} />;
}

const styles = StyleSheet.create({
  main: { color: Colors.primaryText, fontSize: 16 },
});
