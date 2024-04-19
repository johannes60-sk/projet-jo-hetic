import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.removeItem('user');
        navigate("/Login");
    },[])
};

export default Logout;
