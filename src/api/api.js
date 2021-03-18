import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '07c998b1-53de-4ad6-b35f-46c2872e5b7e'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    setUnFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    setFollow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })

    },
    getProfile(userId){
        return ProfileAPI.getProfile(userId);
    }
        
}

export const ProfileAPI = {
    getProfile(userId){
        return instance.get('profile/' + userId).then(response => response.data)
    },
    getStatus(userId){
        return instance.get('profile/status/' + userId)

    },
    updateStatus(status){
        return instance.put('profile/status', {status: status})
    }
    
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe){
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }

}




