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
    mutationFn: async (signupData) => {
      try {
        const res = await axios.post(AUTH_API.REGISTER, signupData);
        return res.data;
      } catch (e) {
        return e;
      }
    },
    onSuccess: (data) => {
      console.log("User registered:", data.user);
    },
  });

  return { loginMutation, registerMutation };
};

export default authQueries;
