import { SERVER_URL } from "./baseUrl";
import axios from "axios";

export const AUTH_API = {
  LOGIN: `${SERVER_URL}/auth/login`,
  REGISTER: `${SERVER_URL}/auth/register`,
};

export const loginUser = async (user) => {
  console.log("requesting...");
  const { data } = await axios.post(`${SERVER_URL}/auth/login`, user);
  return data;
};

export const createUser = async (user) => {
  const { data } = await axios.post(`${SERVER_URL}/auth/register`, user);
  return data;
};
