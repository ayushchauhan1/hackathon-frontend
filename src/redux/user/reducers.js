import actions from "./actions";

const initialState = {
  aadhar: "",
  name: "",
  phone: "",
  email: "",
  token: "",
  city: "",
  gender: "",
  loading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
