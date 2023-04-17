// создаем функцию которая возвращает промис запроса axios
import axios from "axios"
import { rootApi } from "../api"

const getPosts = () => {
    return axios.get(rootApi + '/posts')
}

// получить один пост
const getPost = (id) => {
    return axios.get(`${rootApi}/posts/${id}`)
}

export default {
    get: getPosts,
    getPost: getPost
}