import axios from 'axios'

export const registration = async (login, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/registration', {
            login,
            password
        })
        console.log(response.data.message)
        alert(response.data.message)
    } catch (e) {
        alert(e)
    }

}