import http from './http'
import jwtDecode from 'jwt-decode'

//TODO: setJWT on http

export async function login(payload) {
    const { data } = await http.post('login/', payload)
    const { code, message } = data
    if (code === 200)
        localStorage.setItem('atis-login-token', message)

    return data
}

export function logout() {
    localStorage.removeItem('atis-login-token')
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem('atis-login-token')
        return jwtDecode(jwt)
    } catch (error) {
        return null
    }
}

export default {
    login,
    logout,
    getCurrentUser
}
