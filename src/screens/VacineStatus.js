import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";

export default function App() {
  const [secbook1, changeit1] = useState("Not Vacinated");
  const [secbook2, changeit2] = useState("Not Vacinated");
  const [secbook3, changeit3] = useState(false);
  const [secbook4, changeit4] = useState(false);
  changeits1 = () => {
    changeit1("Vacinated");
    changeit3(true);
  };
  changeits2 = () => {
    changeit2("Vacinated");
    changeit4(true);
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 36,
          textAlign: "center",
          color: "#49000E",
          fontWeight: "bold",
        }}
      >
        Vaccination Status
      </Text>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 96,
            height: 96,
            alignContent: "center",
            marginTop: 100,
            marginBottom: 15,
          }}
          source={
            secbook3 && secbook4
              ? require("../../assets/vacinated.jpeg")
              : require("../../assets/danger.jpeg")
          }
        />
        <Text
          style={{
            fontSize: 36,
            textAlign: "center",
            color: "#49000E",
            fontWeight: "bold",
          }}
        >
          {secbook3 && secbook4 === true ? "Vacinated" : "Not Vacinated"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            textAlign: "left",
            color: "#49000E",
            fontWeight: "600",
            marginRight: 38,
          }}
        >
          Dosage 1
        </Text>
        <Image
          style={{
            width: 34,
            height: 34,
            alignContent: "center",
            marginRight: 20,
          }}
          source={
            secbook4
              ? require("../../assets/success.jpeg")
              : require("../../assets/danger.jpeg")
          }
        />
        <Text
          style={{
            fontSize: 18,
            textAlign: "left",
            color: "#49000E",
            fontWeight: "300",
            marginTop: 5,
          }}
          onPress={() => changeits2()}
        >
          ({secbook2})
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            textAlign: "left",
            color: "#49000E",
            fontWeight: "600",
            marginRight: 38,
          }}
        >
          Dosage 2
        </Text>
        <Image
          style={{
            width: 34,
            height: 34,
            alignContent: "center",
            marginRight: 20,
          }}
          source={
            secbook3
              ? require("../../assets/success.jpeg")
              : require("../../assets/danger.jpeg")
          }
        />
        <Text
          style={{
            fontSize: 18,
            textAlign: "left",
            color: "#49000E",
            fontWeight: "300",
            marginTop: 5,
          }}
          onPress={() => changeits1()}
        >
          ({secbook1})
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
