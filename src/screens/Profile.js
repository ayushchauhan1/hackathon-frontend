import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  ImagePropTypes,
} from "react-native";
import { connect } from "react-redux";
import Toast from "react-native-simple-toast";
import { Card, FAB } from "react-native-paper";

const mapStateToProps = ({ user, dispatch }) => ({
  dispatch,
  user,
});
// import BoxContainer from './container/container';
class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>Home</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <Image
            style={{ width: 120, height: 80 }}
            source={require("../../assets/aadhaar.png")}
          />
          <Text
            style={{
              fontSize: 16,
              paddingTop: 30,
              paddingLeft: 20,
              color: "#49000E",
            }}
          >
            AADHAAR({this.props.user.aadhar})
          </Text>
        </View>
        <Card style={styles.myCard}>
          <View style={styles.cardView}>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.text}>Name: {this.props.user.name}</Text>
              <Text style={styles.text}>Phone: {this.props.user.phone}</Text>
              <Text style={styles.text}>Email: {this.props.user.email}</Text>
              <Text style={styles.text}>City: {this.props.user.city}</Text>
            </View>
          </View>
        </Card>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonStyle}>
            <Button
              title="Slot Booking"
              color="#4267B2"
              onPress={() => this.props.navigation.navigate("SlotBooking")}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title="Vacination Status"
              color="#4267B2"
              onPress={() => this.props.navigation.navigate("VaccineStatus")}
            />
          </View>
        </View>

        {/* <View>
      <BoxContainer style={styles.container1}>
10
          <Text>Box Content1</Text>
11
      </BoxContainer>
      </View> */}
      </View>
    );
  }
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container1: {
    backgroundColor: "yellow",

    height: 100,
    borderRadius: 10,
  },
  myCard: {
    margin: 30,
    backgroundColor: "#4267B2",
    height: "auto",
    width: "85%",
    padding: 10,
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  text: {
    fontSize: 16,
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5,
    width: "35%",
  },
});
