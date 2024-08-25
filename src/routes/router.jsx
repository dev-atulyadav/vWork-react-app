import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../components/Home/Home";
import { Login } from "../components/User/Login";
import Map from "../components/Map/Mapp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
        {
            path:"/",
            element:<Home />,
            children:[
                {
                    path: "/login",
                    element: <Login />
                },{
                    path: "/map",
                    element: <Map />
                }
            ]
        }
    ]
  },
]);
