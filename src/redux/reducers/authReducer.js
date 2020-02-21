const initState = {
    token: localStorage.getItem('atis-login-token'),
    isAuthenticated: null,
    user: null
}

export default function(state = initState, action) {
    switch(action.type) {
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
            }
        default: 
            return state
    }
}