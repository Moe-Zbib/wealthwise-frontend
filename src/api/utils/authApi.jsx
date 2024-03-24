import axios from "axios";
import { AUTH_API } from "../endpoints/authEndpoints";
import { useMutation } from "@tanstack/react-query";

export const Login = async () => {
  const { data } = await axios.post(AUTH_API.LOGIN);
  return data;
};

export const Register = async () => {
  const { data } = await axios.post(AUTH_API.REGISTER);
  return data;
};
