import axios from "axios";
import { AUTH_API } from "../endpoints/authEndpoints";

export const Login = async () => {
  const { data } = await axios.post(AUTH_API.LOGIN);
  return data;
};
