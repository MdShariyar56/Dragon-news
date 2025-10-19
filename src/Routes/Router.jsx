import { createBrowserRouter } from "react-router";
import HomeLayot from "../Layouts/HomeLayout"
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";



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
        element:<h1>Authentication Layout</h1>,
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