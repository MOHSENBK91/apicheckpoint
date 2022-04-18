import {ADD_USER,DELETE_USER} from './action-types'
import Axios from 'axios'

// export const getUsers = () => {
//     return (dispatch) => {
//     return  Axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//       dispatch({
//         type: 'GET_USERS',
//         payload: res.data,
//       });
//     });
//   };
// }

export const getUsers = () => async (dispatch) =>{
    try {
        const users = await Axios.get('https://jsonplaceholder.typicode.com/users')
        return dispatch({
            type: 'GET_USERS',
            payload: users.data,
        })
    } catch (error) {
        console.log(error)
    }
}
export const getOneUser = (id) => async (dispatch) =>{
    try {
        const user = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return dispatch({
            type: 'GET_ONE_USER',
            payload: user.data,
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPostUser = (id) => async (dispatch) =>{
    try {
        const user = await Axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
        return dispatch({
            type: 'GET_POST_USER',
            payload: user.data,
        })
    } catch (error) {
        console.log(error)
    }
}


export const addNewUser = (user) =>{
    return{
        type:ADD_USER,
        payload:user
    }
}

export const deleteUser = (userId) =>{
    return{
        type:DELETE_USER,
        payload:userId
    }
}