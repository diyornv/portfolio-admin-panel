import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type LoginData = {
    email: string;
    password: string;
};

const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const LOCAL_API = "http://13.203.104.23:3000/auth/login";
const PROD_API = "/.netlify/functions/login";

export const useLogin = () => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: (data: LoginData) =>
            axios.post(isLocal ? LOCAL_API : PROD_API, data).then((res) => res.data),
    });
};