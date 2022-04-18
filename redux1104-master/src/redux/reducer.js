import {ADD_USER,DELETE_USER} from './action-types'


const init = {
users:[],
user:[],
post:[]
}

export const userReducer = (state = init, action) =>{
    switch (action.type) { 
        case ADD_USER: return{
            ...state,
            users: [...state.users,action.payload]
        }
        case DELETE_USER: return{
            ...state,
            users: state.users.filter(user => user.id != action.payload)
        }
        case 'GET_USERS': return{
            ...state,
            users: action.payload
        }
        case 'GET_ONE_USER': return{
            ...state,
            user: action.payload
        }
        case 'GET_POST_USER': return{
            ...state,
            post: action.payload
        }
        
        default:return state
    }
}