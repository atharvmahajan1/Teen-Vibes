import axios from "axios";
const accessToken = localStorage.getItem("accessToken");
const headers = {
  Authorization: `Bearer ${accessToken}`,
};
let url;
url = "http://localhost:4000";
//url = "https://synopsis-ai-fullstack-production.up.railway.app";
url = "https://teen-vibes-production.up.railway.app";
import {
  LoadUserRequest,
  LoadUserSuccess,
  LoadUserFailure,
  LoginRequest,
  LoginSuccess,
  LoginFailure,
  RegisterRequest,
  RegisterSuccess,
  RegisterFailure,
  LogoutUserRequest,
  LogoutUserSuccess,
  LogoutUserFailure,
} from "../Reducers/UserReducers";

export const registerUser = (name, email, password) => async (dispatch) => {
  console.log(name, email, password);
  try {
    dispatch({
      type: RegisterRequest.type,
    });

    const { data } = await axios.post(
      `${url}/api/v1/signup`,
      { payload: { name, email, password } },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: RegisterSuccess.type,
      payload: data.user,
    });
    localStorage.setItem("accessToken", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    window.open("/", "_self");
  } catch (error) {
    dispatch({
      type: RegisterFailure.type,
      payload: error.response,
    });
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LoginRequest.type,
    });

    const { data } = await axios.post(
      `${url}/api/v1/login`,
      { payload: { email, password } },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: LoginSuccess.type,
      payload: data.user,
    });
    localStorage.setItem("accessToken", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    window.open("/", "_self");
  } catch (error) {
    dispatch({
      type: LoginFailure.type,
      payload: error.response,
    });
  }
};
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LogoutUserRequest.type,
    });

    await axios.get(`${url}/api/v1/logout`);

    dispatch({
      type: LogoutUserSuccess.type,
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  } catch (error) {
    dispatch({
      type: LogoutUserFailure.type,
      payload: error.response,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LoadUserRequest.type,
    });

    // Fetch user profile using axios

    const { data } = await axios.get(`${url}/api/v1/me`, { headers });

    dispatch({
      type: LoadUserSuccess.type,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LoadUserFailure.type,
      payload: error.response,
    });
  }
};
