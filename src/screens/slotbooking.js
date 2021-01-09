import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function slotBooking() {
  const [book, changeBOOking] = useState({
    status: "NoT BOOKED Yet!",
    clor: "red",
    botton: "green",
    date: "",
  });
  const [secbook1, changeit1] = useState("BOOK");
  const [secbook2, changeit2] = useState("BOOK");

  const clickHandlar = () => {
    changeBOOking({
      status: "BOOKED!",
      clor: "green",
      botton: "grey",
      date: "Dosage#1 02/04/21                Dosage#2 23/04/21",
    });
  };
  const fist = () => {
    clickHandlar();
    changeit1("BOOKED");
  };
  const second = () => {
    clickHandlar();
    changeit2("BOOKED");
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>
        {book.status}
      </Text>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Image
          style={{ width: 30, height: 30, marginTop: 5, marginRight: 5 }}
          source={require("../../assets/ticket.jpeg")}
        />
        <Text style={{ color: "#49000E", fontWeight: "bold", fontSize: 28 }}>
          Slot Booking!
        </Text>
      </View>
      <Text style={{ color: "#49000E", fontWeight: "bold", fontSize: 24 }}>
        Near By vacination centers
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 24, margin: 20 }}>Date </Text>
        <Text
          style={{
            fontSize: 24,
            marginLeft: 40,
            marginTop: 20,
            marginBottom: 20,
            marginRight: 10,
            color: "#49000E",
          }}
        >
          Avialability{" "}
        </Text>
        <Text style={{ fontSize: 24, margin: 20, color: "#49000E" }}>
          Booking
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 24,
            margin: 20,
            color: "#49000E",
            fontWeight: "bold",
          }}
        >
          Hospital XYZ{" "}
        </Text>
        <Text
          style={{
            fontSize: 24,
            margin: 20,
            color: "green",
            fontWeight: "bold",
          }}
        >
          YES{" "}
        </Text>
        <TouchableOpacity style={styles.button} onPress={fist}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
            {secbook1}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 24,
            margin: 20,
            color: "#49000E",
            fontWeight: "bold",
          }}
        >
          Hospital ABC
        </Text>
        <Text
          style={{ fontSize: 24, margin: 20, color: "red", fontWeight: "bold" }}
        >
          NO{" "}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
            BOOK
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 24,
            margin: 20,
            color: "#49000E",
            fontWeight: "bold",
          }}
        >
          Hospital PQR{" "}
        </Text>
        <Text
          style={{
            fontSize: 24,
            margin: 20,
            color: "green",
            fontWeight: "bold",
          }}
        >
          YES{" "}
        </Text>

        <TouchableOpacity style={styles.button} onPress={second}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
            {secbook2}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={{ width: 60, height: 60, marginLeft: 20 }}
          source={require("../../assets/map.jpeg")}
        />
        <Text style={{ color: "#49000E", fontSize: 18, margin: 10 }}>
          see on map
        </Text>
      </View>
      <Text
        style={{
          color: "#49000E",
          fontSize: 24,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        {book.date}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    width: 80,
    height: 30,
    backgroundColor: "green",
    alignItems: "center",
    borderRadius: 10,
    margin: 20,
  },
});
