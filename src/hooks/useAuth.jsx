import { useContext } from "react";
import AuthContext from "../context/AuthProvider";


const useAuth = () => {

    /* const { token } = useContext(AuthContext);
    
    return {
        token,
    }; */

    return useContext(AuthContext);
}

export default useAuth;