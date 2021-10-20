export const initialState = {
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {

        case "REGISTER_USER":
            return{
                ...state,
                user: action.user
            }
        case "SIGN_IN_USER":
            return{
                ...state,
                user: action.user
            }
       
        default:
            return state
    }
}

export default reducer