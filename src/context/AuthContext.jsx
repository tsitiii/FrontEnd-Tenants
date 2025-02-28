import axiosInstance from "@/Api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/Constant";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axiosInstance.get("/api/register");
                const userData = response.data;

                const foundUser = userData.find((u) => u.id === userId);
                if (foundUser) {
                    setUser({
                        id: foundUser.id,
                        role: foundUser.role,
                        first_name: foundUser.first_name, // Changed to match AppBar expectations
                        father_name: foundUser.father_name,
                        profile_picture: foundUser.profile_picture, // Changed to match AppBar expectations
                    });
                }
            } catch (error) {
                console.error("Error fetching user details:", error.message);
            }
        };

        if (userId) {
            fetchUserDetails();
        }
    }, [userId]);

    const login = async (phone, password) => {
        try {
            const response = await axiosInstance.post("/api/login/", { phone, password });
            const { access, refresh } = response.data;

            localStorage.setItem(ACCESS_TOKEN, access);
            localStorage.setItem(REFRESH_TOKEN, refresh);

            const decodedUser = jwtDecode(access);
            setUserId(decodedUser.user_id);
            
            setUser({  
                id: decodedUser.user_id,
                role: decodedUser.role,
            });

            const role = decodedUser.role;

            switch (role) {
                case "is_admin":
                    navigate("/admin/dashboard");
                    break;
                case "is_landlord":
                case "is_tenant":
                    navigate("/user/userhome");
                    break;
                default:
                    navigate("/");
                    break;
            }
        } catch (err) {
            console.error("Login failed:", err);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };