import axios from "axios";
import React, { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import Profile from "./Profile";
import Toast from "react-native-simple-toast";

const mapStateToProps = ({ user, dispatch }) => ({
  dispatch,
  user,
});

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aadhar: "",
    };
  }
  handleAadharChange = (value) => {
    this.setState({
      aadhar: value,
    });
  };
  handleAuth = () => {
    let value = { aadhar: this.state.aadhar };
    this.props.dispatch({
      type: "user/LOGIN",
      payload: value,
    });
    // return <Profile />;
    // Toast.show("Successfully Logged In");
    // this.props.navigation.navigate("Profile");
  };

  componentDidMount = () => {
    // axios
    //   .get("http://127.0.0.1:8000/users/")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // fetch("http://127.0.0.1:8000/users", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // });
  };
  render() {
    console.log(this.props.user);
    if (this.props.user.aadhar) {
      return <Profile />;
    } else {
      return (
        <Fragment>
          <StatusBar barStyle="dark-content" backgroundColor="#4267B2" />

          <View style={styles.container}>
            <View
              style={{ flexDirection: "row", marginTop: 100, marginLeft: 10 }}
            >
              <Image
                style={{ width: 120, height: 80 }}
                source={require("../../assets/aadhaar.png")}
              />
              <Text
                style={{
                  fontSize: 32,
                  paddingTop: 30,
                  paddingLeft: 20,
                  color: "#49000E",
                }}
              >
                Link AADHAAR
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="enter aadhaar card no."
              placeholderTextColor="#F8EDF1"
              keyboardType="numeric"
              editable={true}
              onChangeText={this.handleAadharChange}

              // onChangeText={val=>onChangeText(val)}
              // value={value}
            />

            <View style={styles.bottom}>
              <Button
                color="#4267B2"
                title="OK"
                onPress={() => this.handleAuth()}
              />
            </View>

            <StatusBar style="auto" />
          </View>
        </Fragment>
      );
    }
  }
}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: "#4267B2",
    opacity: 0.8,
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 10,
    width: "100%",
    height: 60,
    marginTop: 30,

    padding: 10,
  },

  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    width: "100%",
  },
});
