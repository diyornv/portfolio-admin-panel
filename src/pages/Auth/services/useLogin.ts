import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type LoginData = {
    email: string;
    password: string;
}

export const useLogin = () => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: (data: LoginData) =>
            axios.post("/.netlify/functions/login", data).then((res) => res.data),
    })
}