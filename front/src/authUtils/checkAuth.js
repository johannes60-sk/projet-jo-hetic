export const deleteCookie = () => {
    for (let cookie of document.cookie.split(";")) {
        if (cookie.trim().startsWith("jwt=")) {
            console.log('cookie')
            const newCookie = cookie.replace("jwt=", "");
            document.cookie = `jwt=${newCookie}; expires=Thu, 01 Jan 1970 00:00:00 UTC}`;
        }
    }
}

export const checkAuth = async (setIsLogged) => {
    try {
        const token = document.cookie.split(';').find((cookie) => cookie.includes('jwt'));
        if (!token) {
            setIsLogged(false);
            console.log('no token')
            // return <Navigate to="/Login" replace />;
        } else {
            const response = await fetch("http://localhost:3000/users/verify", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.substring(5),
                },
            })

            const data = await response.json();
            console.log(data.result);
            setIsLogged(data.result);
            !data.result && deleteCookie();
        }
    } catch (error) {
        setIsLogged(false);
        console.error("Error:", error);
        deleteCookie();
    }
}
