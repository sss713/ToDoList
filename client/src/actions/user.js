import axios from 'axios'
import { setUser } from '../reducers/userReducer'

export const registration = async (login, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/registration', {
            login,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }

}

export const authorization = (login, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/authorization', {
                login,
                password
            })
            await dispatch(await setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e)
        }
    }

}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}