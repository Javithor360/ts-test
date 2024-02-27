import axios from 'axios'

export const test = async () => {
    return await axios.post(
        `http://localhost:5656/`,
        {}
    )
}