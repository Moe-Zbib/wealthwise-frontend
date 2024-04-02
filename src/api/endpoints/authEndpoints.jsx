import { SERVER_URL } from "./baseUrl";
import axios from "axios";

export const AUTH_API = {
  LOGIN: `${SERVER_URL}/auth/login`,
  REGISTER: `${SERVER_URL}/auth/register`,
};

export const loginUser = async (user) => {
  const { data } = await axios.post(`${SERVER_URL}/auth/login`, user, {
    withCredentials: true,
  });
  return data;
};

export const createUser = async (user) => {
  const { data } = await axios.post(`${SERVER_URL}/auth/register`, user);
  return data;
};

export const forgotPassword = async (email) => {
  const payload = {
    email: email,
    resetLink: "http://google.com",
  };
  const { data } = await axios.post(
    `${SERVER_URL}/auth/forgot-password`,
    payload
  );
  return data;
};
