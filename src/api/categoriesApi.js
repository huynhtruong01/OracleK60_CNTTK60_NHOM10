import axiosClient from './axiosClient'

const categoriesApi = {
    getAll() {
        const url = '/categories'
        return axiosClient.get(url)
    },
    getCategory(id) {
        const url = `/categories/${id}`
        return axiosClient.get(url)
    },
}

export default categoriesApi
