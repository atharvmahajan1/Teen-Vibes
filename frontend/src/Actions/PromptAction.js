import axios from "axios";
const accessToken = localStorage.getItem("accessToken");
let url;
url = "http://localhost:4000";
url = "https://synopsis-ai-fullstack-production.up.railway.app";

import {
  PromptRequest,
  PromptSuccess,
  PromptFailure,
} from "../Reducers/PromptReducers";

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

export const analyzePrompt = (prompt) => async (dispatch) => {
  try {
    dispatch({
      type: PromptRequest.type,
    });

    const { data } = await axios.post(
      `${url}/api/v1/openaitext`,
      { text },
      { headers }
    );
    dispatch({
      type: PromptSuccess.type,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PromptFailure.type,
      payload: error.response,
    });
  }
};
