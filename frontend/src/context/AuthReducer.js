const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                user: true
            }
        case 'logout':
            return {
                user: false
            }

        default:
            return { ...state };
    }
}

export default AuthReducer