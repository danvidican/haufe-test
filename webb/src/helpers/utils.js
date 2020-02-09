import jwtDecoder from "jwt-decode";

export const isInternal = (token) => {
    return jwtDecoder(token).role === 'internal' ? true : false
}