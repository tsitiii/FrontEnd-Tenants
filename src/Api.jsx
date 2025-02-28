import axios from 'axios'
import { ACCESS_TOKEN , REFRESH_TOKEN} from './Constant';


const axiosInstance=  axios.create({
    baseURL:"https://backend-tenant-tenure-system-u4dz.vercel.app/",
    withCredentials:true
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response)=>{
        return response
    },

    async (error) =>{
        const originalRequest=error.config;

        if(error.response.status===401 && !originalRequest._retry){
            originalRequest._retry=true; 

         try{
            const refresh= localStorage.getItem(REFRESH_TOKEN)

            const res = await axios.post  ("https://backend-tenant-tenure-system-u4dz.vercel.app/api/login/", {
                refresh,
            });
            const newAccess= res.data.access
            localStorage.setItem(ACCESS_TOKEN,newAccess)
            originalRequest.headers['Authorization']= `Bearer ${newAccess}`
            return axiosInstance(originalRequest)
        
        }   catch(refreshError){
            console.log("Token refresh failed",refreshError)

            localStorage.removeItem(ACCESS_TOKEN)
            localStorage.removeItem(REFRESH_TOKEN)
            window.location.href="/"

        }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance

