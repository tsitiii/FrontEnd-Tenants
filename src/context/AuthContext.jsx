import { createContext, useState, useEffect, useContext } from 'react';
import axiosInstance from '@/Api';
import { jwtDecode } from 'jwt-decode';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/Constant';
// import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const authContext = createContext();

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [userId, setUserId]= useState(null)

    // let userId
    
    useEffect(()=>{
        const fetchUserDetails = async () =>{
            // setLoading(true);
            try {
              const response= await axiosInstance.get('/api/register')
              const userData= response.data

              for (let i=0; i<userData.length; i++){
                if (userId===userData[i].id){
                    setUser({
                        id: userData[i].id,
                        role: userData[i].role,
                        firstName: userData[i].first_name,
                        fatherName: userData[i].father_name,
                        profilePicture: userData[i].profile_picture,
                    })
                    
                    break;
                }
              }
              
            } catch (error) {
              console.error(error.message);
            }
            setLoading(false);
          }
      if (userId){
        fetchUserDetails();
      }
          
    }, [userId])

    // const fetchUserDetails = async (userId) => {
    //     try {
    //         const response = await axiosInstance.get('/api/register/');
    //         const userData = response.data;
    //          console.log(userData)

    //         for (let i = 0; i < userData.length; i++) {
    //             console.log("id", userData[i].id)
    //             if (userId === userData[i].id) {
    //                 console.log("yesss")

    //                 setUser({
    //                     id: userData[i].id,
    //                     role: userData[i].role,
    //                     firstName: userData[i].first_name,
    //                     fatherName: userData[i].father_name,
    //                     profilePicture: userData[i].profile_picture,
    //                 })
                    
    //                 break;
    //             }
    //         }

    //     } catch (error) {
    //         console.error('Error fetching user details:', error);
    //     }
    // };


    const Login = async (phone, password) => {
        setLoading(false);
        try {
            const response = await axiosInstance.post('/api/login/', { phone, password });

            console.log(response)
            const { access, refresh } = response.data;
            console.log("Access_token", access)
            console.log("referesh_token", refresh)


            localStorage.setItem(ACCESS_TOKEN, access);
            localStorage.setItem(REFRESH_TOKEN, refresh);

            
            const decodedUser = jwtDecode(access);
            // const userId = decodedUser.user_id

            setUserId(decodedUser.user_id)


            console.log(decodedUser);
          


            // await fetchUserDetails(userId)

            
           
        } catch (err) {
            console.error('Login failed', err);
            setLoading(true);
            if (err.response && err.response.status) {
                throw new Error(`Login failed with status code ${err.response.status}`);
            } else {
                throw new Error('Login failed due to an unknown error');
            }}
        
        // } finally{
        //     switch (user.role) {
        //         case 'is_admin':
        //             navigate('/admin/dashboard');
        //             break;
        //         case 'is_landloard':
        //             navigate('/user/userhome');
        //             break;

        //         case 'is_tenant':
        //             navigate('/user/userhome');
        //             break;
        //         default:
        //             navigate('/');
        //             break;
        //     }

        // }
 
    };


    // useEffect(() => {
    //     axiosInstance.get("/api/register")
    //         .then((res) => {
    //             console.log(res)
    //             console.log(res.data)

    //         }).catch(err => console.error(err))

    // })

    // useEffect(() => {
    //     console.log("Updated user data:", user);
    // }, [user]); // Logs after `user` is updated


    
    if (user && user.role) {
        switch (user.role) {
            case 'is_admin':
                navigate('/news');
                break;
            case 'is_landloard':
                navigate('/user/userhome');
                break;

            case 'is_tenant':
                navigate('/user/userhome');
                break;
            default:
                navigate('/');
                break;
        }
    }

    
    const Logout = () => {
        setUser(null);
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);

    };



    return (
        <authContext.Provider value={{ user, Login, Logout }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;
