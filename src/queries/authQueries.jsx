import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AUTH_API } from "../api/endpoints/authEndpoints";

const authQueries = () => {
  const loginMutation = useMutation({
    mutationFn: (loginData) => {
      return axios.post(AUTH_API.LOGIN, loginData);
    },
  });

  const registerMutation = useMutation({
    mutationFn: (signupData) => {
      const res = axios.post(AUTH_API.REGISTER, signupData);
      console.log(res.data);
    },
  });

  return { loginMutation, registerMutation };
};

export default authQueries;
