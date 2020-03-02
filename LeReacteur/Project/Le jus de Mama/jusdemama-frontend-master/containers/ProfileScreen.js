import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen() {
  // const { params } = useRoute();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text>user id : {params.userId}</Text> */}
      <Text style={styles.yellowTextBold} t>
        REJOIGNEZ-NOUS
      </Text>
      <Text style={styles.maroonText}>
        Commandez, buvez et consignez vos bouteilles préferées
      </Text>
      <TouchableOpacity
        style={styles.yellowButton}
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text>CONNEXION</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.whiteButton}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text>S'INSCRIRE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUpCom");
        }}
      >
        <Text style={styles.buttonText}>Vous êtes commerçant?</Text>
        <Text style={styles.buttonText}>
          Devenez un point de collecte partenaire de consigne !
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  yellowButton: {
    backgroundColor: "#FEBE3D",
    width: 340,
    height: 50,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  whiteButton: {
    backgroundColor: "white",
    width: 340,
    height: 50,
    marginTop: 30,
    marginBottom: 30,
    color: "#4B3B0E",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  yellowTextBold: {
    color: "#FEBE3D",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 30
  },
  maroonText: {
    fontSize: 18,
    color: "#4B3B0E",
    width: 300,
    marginBottom: 30,
    textAlign: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 12,
    color: "#4B3B0E",
    width: 350,
    marginBottom: 5,
    textAlign: "center",
    textDecorationLine: "underline"
  }
});
