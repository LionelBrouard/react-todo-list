import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Products() {
  return (
    <View style={styles.container}>
      <Text>This is the Products component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
