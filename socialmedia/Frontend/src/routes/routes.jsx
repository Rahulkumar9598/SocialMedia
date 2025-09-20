import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";

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
                }
            ]
        }
    ]
)

export default routes