import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlePseudoChange = (event) => {
    setFormValues({
      ...formValues,
      email: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    setFormValues({
      ...formValues,
      password: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        document.cookie = `jwt=${data.token}; expires=${new Date(Date.now() + 3600 * 60).toUTCString()}`;
        // sessionStorage.setItem("user", JSON.stringify(data));
        // navigate("/");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // log cookies
  console.log(document.cookie);

  useEffect(() => {
    // console.log(document.cookie.startsWith("token="));

    if (document.cookie) {
      document.cookie.split(";").forEach((cookie) => {
        console.log(cookie);
      });
    }

  }, [document.cookie]);

  // delete cookie
  const deleteCookie = () => {
    // console.log(document.cookie.split(";"));
    for(let cookie of document.cookie.split(";")) {
      // console.log('ok')
      // console.log(cookie.startsWith("jwt="));
      if(cookie.trim().startsWith("jwt=")) {
        console.log('cookie')
        const newCookie = cookie.replace("jwt=", "");
        document.cookie = `jwt=${newCookie}; expires=Thu, 01 Jan 1970 00:00:00 UTC}`;
      }
    }
  }

  return (
    <>
    <button onClick={deleteCookie}>Delete cookie</button>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Teddy Riner
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Se connecter
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pseudo
                  </label>
                  <input
                    type="text"
                    name="pseudo"
                    id="pseudo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Teddy Riner"
                    required=""
                    onChange={handlePseudoChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handlePasswordChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Se connecter
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  not yet registered?{" "}
                  <Link
                    to="/register"
                    classNameName="btn login-btn mt-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    S'inscrire
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
