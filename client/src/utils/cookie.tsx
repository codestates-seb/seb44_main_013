import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = ({name, value, options}:any) => {
    return cookies.set(name, value, {...options})
}

export const getCookie = (name:any) => {
    return cookies.get(name)
}

export const removeCookie = (name:any) => {
    return cookies.remove(name);
}