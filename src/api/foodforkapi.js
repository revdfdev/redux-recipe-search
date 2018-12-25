import axiosInstance from "./axiosInstance"

export default {
    
    searchPath(searchText) {
        const path = `/search?key=${process.env.REACT_APP_FOOD_FORK_KEY}&q=${searchText}&count=10`
        return axiosInstance.get(path)
    },

    searchSingle(title) { 
        const path = `/search?key=${process.env.REACT_APP_FOOD_FORK_KEY}&q=${title}`
        return axiosInstance.get(path)
    }
}

