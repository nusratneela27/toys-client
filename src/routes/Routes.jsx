import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import TeddeyDetails from "../pages/ToyDetails/TeddeyDetails/TeddeyDetails";
import CatDetails from "../pages/ToyDetails/CatDetails/CatDetails";
import DogDetails from "../pages/ToyDetails/DogDetails/DogDetails";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'teddy/:id',
                element: <PrivateRoute><TeddeyDetails></TeddeyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/teddy/${params.id}`)
            },
            {
                path: 'cat/:id',
                element: <CatDetails></CatDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/cat/${params.id}`)
            },
            {
                path: 'dog/:id',
                element: <DogDetails></DogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/dog/${params.id}`)
            },
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;