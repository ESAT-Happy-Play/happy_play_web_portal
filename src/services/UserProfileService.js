import { toast } from 'react-toastify';
import ApiService from './ApiService';

export const UserProfileService = {
    getProfileInfo: async () => {
        return await ApiService.get(`${process.env.REACT_APP_GATEWAY_URL}/api/Account/current`)
        .then((res) => {
            if (!res.status) { 
                toast.error("Sorry, unsuccessfull gateway communication."); 
                return false; 
            }
            return res;
        })
    },
    updateProfilePic: async (data) => {
        let objData = { user: data }
        return await ApiService.put(`${process.env.REACT_APP_GATEWAY_URL}/api/UserProfile/update/profilePic`, objData)
        .then((res) => {
            if (!res.status) { 
                if (res.data.response.status === 400) {
                    toast.error(res.data.response.data.errorMessage); 
                } else {
                    toast.error("Sorry, unsuccessfull gateway communication."); 
                }
                return false; 
            }
            return res.data;
        })
    },
    updatePersonalDetails: async (data) => {
        let objData = { user: data }
        return await ApiService.put(`${process.env.REACT_APP_GATEWAY_URL}/api/UserProfile/update/personalDetails`, objData)
        .then((res) => {
            if (!res.status) { 
                if (res.data.response.status === 400) {
                    toast.error(res.data.response.data.errorMessage); 
                } else {
                    toast.error("Sorry, unsuccessfull gateway communication."); 
                }
                return false; 
            }
            return res.data;
        })
    },
    updateAddressDetails: async (data) => {
        let objData = { user: data }
        return await ApiService.put(`${process.env.REACT_APP_GATEWAY_URL}/api/UserProfile/update/addressDetails`, objData)
        .then((res) => {
            if (!res.status) { 
                if (res.data.response.status === 400) {
                    toast.error(res.data.response.data.errorMessage); 
                } else {
                    toast.error("Sorry, unsuccessfull gateway communication."); 
                }
                return false; 
            }
            return res.data;
        })
    },
    updateWorkDetails: async (data) => {
        let objData = { user: data }
        return await ApiService.put(`${process.env.REACT_APP_GATEWAY_URL}/api/UserProfile/update/workDetails`, objData)
        .then((res) => {
            if (!res.status) { 
                if (res.data.response.status === 400) {
                    toast.error(res.data.response.data.errorMessage); 
                } else {
                    toast.error("Sorry, unsuccessfull gateway communication."); 
                }
                return false; 
            }
            return res.data;
        })
    }
}