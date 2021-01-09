import { all, takeEvery, put, call } from "redux-saga/effects";
import { login, currentAccount, logout } from "../../services/users";
import actions from "./actions";
import { AsyncStorage } from "react-native";
import Toast from "react-native-simple-toast";

export function* LOGIN({ payload }) {
  const { aadhar } = payload;
  yield put({
    type: "user/SET_STATE",
    payload: {
      loading: true,
    },
  });
  const success = yield call(login, aadhar);
  console.log(success.data);
  // yield put({
  //   type: "user/LOAD_CURRENT_ACCOUNT",
  // });
  if (success) {
    // AsyncStorage.getItem("token");
    Toast.show("Successfully Logged In");
    try {
      yield put({
        type: "user/SET_STATE",
        payload: {
          aadhar: success.data.aadhar,
          phone: success.data.phone,
          email: success.data.email,
          token: success.data.token,
          city: success.data.city,
          name: success.data.name,
          gender: success.data.gender,
        },
      });
    } catch (error) {}
  }
}

export function* LOAD_CURRENT_ACCOUNT() {
  yield put({
    type: "user/SET_STATE",
    payload: {
      loading: true,
    },
  });
  const response = yield call(currentAccount);
  if (response) {
    const { name, phone, email, token, city, gender } = response;
    // console.log("SETTING STATE");
    try {
      yield put({
        type: "user/SET_STATE",
        payload: {
          name,
          phone,
          email,
          token,
          city,
          gender,
        },
      });
    } catch (error) {}
  }
  yield put({
    type: "user/SET_STATE",
    payload: {
      loading: false,
    },
  });
}

export function* SET_ADDRESS({ payload }) {
  yield put({
    type: "user/SET_STATE",
    payload: {
      address: payload,
    },
  });
}

export function* SET_CITY({ payload }) {
  yield put({
    type: "user/SET_STATE",
    payload: {
      city: payload,
    },
  });
}

export function* SET_ITEM({ payload }) {
  yield put({
    type: "user/SET_STATE",
    payload: {
      item: payload,
    },
  });
}
export function* LOGOUT() {
  yield put({
    type: "user/SET_STATE",
    payload: {
      id: "",
      name: "",
      role: "",
      contact: "",
      email: "",
      avatar: "",
      authorized: false,
      loading: false,
    },
  });
  yield call(logout);
  Toast.show("Successfully Logged Out");
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOGOUT, LOGOUT),
  ]);
}
