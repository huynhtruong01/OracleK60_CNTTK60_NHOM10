import axiosClient from './axiosClient'

const blogsApi = {
    getAll(params) {
        const url = '/news'
        return axiosClient.get(url, { params })
    },
    getBlog(id) {
        const url = `/news/${id}`
        return axiosClient.get(url)
    },
}

export default blogsApi
