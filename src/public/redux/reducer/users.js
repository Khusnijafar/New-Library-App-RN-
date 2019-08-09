const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isFulfilled: false,
    token: ''
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false,
                isFulfilled: false
            }
        case "LOGIN_USER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                isFulfilled: false
            }
        case "LOGIN_USER_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                data: [state.data, action.payload],
                token: action.payload.data.token
            }
        default:
            return state;
    }
}

export default users