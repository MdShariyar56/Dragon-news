import { createBrowserRouter } from "react-router";
import HomeLayot from "../Layouts/HomeLayout"
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";



const router = createBrowserRouter([



    {
        path:'/',
        element: <HomeLayot></HomeLayot>,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
             {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json")
            },
            
        ],
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children: [
           {
                path:"/auth/login",
                element: <Login></Login>
           },
           {
                path:"/auth/register",
                element: <Register></Register>,
           }
        ]
    },
    {
        path:'/news',
        element:<h1>Nwes Layout</h1>,
    },
    {
        path:'/*',
        element:<h1>Error404</h1>
    }
]);

export default router;