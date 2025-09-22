import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import UserProfile from "../pages/UserProfile";

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path : "/about",
                    element : <About />
                },
                {
                  path: "/signup",
                  element: <SignUp />  
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/my-account",
                    element: <UserProfile />
                }
            ]
        }
    ]
)

export default routes