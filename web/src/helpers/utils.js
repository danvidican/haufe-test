import jwtDecoder from "jwt-decode";

export const isInternal = (token) => {
    console.log(jwtDecoder(token))
    return jwtDecoder(token).role === 'ROLE_CUSTOMER' ? true : false
}