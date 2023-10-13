import axios from "axios";
import { login } from "../redux/auth-reducer";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "e876a39a-2217-4cf6-87bb-fa5300b130f3" }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;

            });
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanse.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolote mathot Plase profileAPI object.')
        return profileAPI.getProfile(userId)
    },
}



export const profileAPI = {
    getProfile(userId) {
        console.log(userId, userId);
        return instanse.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`);
    },
    updeteStatus(status) {
        return instanse.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`,);
    },

    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email, password, rememberMe});
    }, 

    logout() {
        return instanse.delete(`auth/login` );
    },
}
