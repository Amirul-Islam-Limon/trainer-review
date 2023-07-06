import AddService from "../../pages/AddService/AddService";
import AllServices from "../../pages/AllServices/AllServices";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");


const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/addService",
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/sign-up",
                element:<SignUp></SignUp>
            },
            {
                path: "/log-in",
                element:<Login></Login>
            },
            {
                path: "/services",
                element:<AllServices></AllServices>
            },
            {
                path: "/my-reviews",
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: "/blogs",
                element:<Blogs></Blogs>
            },
            {
                path: "services/:id",
                loader: (params) => {
                    console.log(params.params.id);
                    return fetch(`http://localhost:5000/services/${params.params.id}`);
                },
                element:<ServiceDetails></ServiceDetails>
            }

        ]
    }
])

export default router;