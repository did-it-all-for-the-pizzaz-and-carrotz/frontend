import axios from "axios";
import { apiURL } from "features/API";

export function getUser({login, password}) {
    return axios.post(apiURL+"/auth", {
        email: login,
        password
    })
}

export function registerUser({login, name, surname, password}) {
    return axios.post(apiURL+"/auth/register", {
        email: login,
        name,
        surname,
        password
    })
}
  