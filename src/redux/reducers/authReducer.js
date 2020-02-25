const initState = {
    token: localStorage.getItem('atis-login-token')
}

export default function(state = initState, action) {
    switch(action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: {}
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null
            }
        default: 
            return state
    }
}