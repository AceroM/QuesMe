const GET_USER = 'GET_USER';
const CHANGE_USER = 'CHANGE_USER';

const initialUser = {
    username: ''
}

export const getUser = user => ({ type: GET_USER, user });
export const changeUser = user => ({ type: CHANGE_USER, user });

export default function (state = initialUser, action) {
    var data = state;
    switch (action.type) {
        case GET_USER:
            return action.user
        case CHANGE_USER:
            data.username = action.user;
            return {
                ...data
            }
        default:
            return state;
    }
}