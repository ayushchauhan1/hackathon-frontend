import axios from "axios";
import setAuthToken from "./setAuthToken";
import { AsyncStorage } from "react-native";

_storeDataaadhar = async (token) => {
  try {
    await AsyncStorage.setItem("aadhar", token);
  } catch (error) {
    // Error saving data
    // console.log(error);
  }
};
_storeDatatoken = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    // Error saving data
    // console.log(error);
  }
};

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      setAuthToken(value);
    }
  } catch (error) {}
};

export async function login(contact1, password1) {
  const value = { contact: contact1, password: password1 };
  let authorized1 = false;
  console.log("con", contact1);
  return axios
    .get(`http://localhost:8000/register?aadhar=12345789105`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      authorized1 = true;
      // _storeDataaadhar(contact1);
      // const value1 = _retrieveData();
      return true;
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
}

export async function currentAccount() {
  const aadhar = await AsyncStorage.getItem("aadhar");
  let authorized1 = false;
  if (aadhar) {
    return axios
      .get(`/particluaruser?aadhar=${aadhar}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          authorized1 = true;
          const { result } = response.data;

          _storeDatatoken(response.data.result.token);
          return {
            aadhar: data.result.aadhar,
            name: data.result.name,
            phone: data.result.phone,
            email: data.result.email,
            token: data.result.token,
            city: data.result.city,
            gender: data.result.gender,
            authorized: authorized1,
          };
        }
      });
  }
}

export async function logout() {
  try {
    await AsyncStorage.removeItem("token");
  } catch (error) {}
}
