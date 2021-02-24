import axios from "axios";

const maxKey = "2bcfffa6-a05b-4b2e-afa6-743329bd3ae8"
const IvanKey = "271f60c5-c9d5-4c9d-9fc9-7a9e273c6f18"
const AlonaKey = "2bcfffa6-a05b-4b2e-afa6-743329bd3ae8"

const inctance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": maxKey
    }
});


export const usersApi = {
    getUser(currentPage, pageSize) {
        return inctance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowOnUser(id){
        return inctance.delete(`follow/${id}`)
    },
    followOnUser(id){
        return inctance.post(`follow/${id}`)
    },
    getProfile(userId){
        return inctance.get(`profile/${userId}`);
        
    }
}

export const authApi = {
    
    me() {
        return inctance.get(`auth/me`);
    }
}
export const profileApi = {
    getUser(currentPage, pageSize) {
        return inctance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}
export const followApi = {
    getUser(currentPage, pageSize) {
        return inctance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}





