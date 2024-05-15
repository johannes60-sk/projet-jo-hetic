import { useEffect } from "react";

const Logout = () => {

    const deleteCookie = () => {
        for(let cookie of document.cookie.split(";")) {
            if(cookie.trim().startsWith("jwt=")) {
            console.log('cookie')
            const newCookie = cookie.replace("jwt=", "");
            document.cookie = `jwt=${newCookie}; expires=Thu, 01 Jan 1970 00:00:00 UTC}`;
            }
        }
    }

    useEffect(() => {
        deleteCookie();
        window.location.href = "/";
    },[])
};

export default Logout;
