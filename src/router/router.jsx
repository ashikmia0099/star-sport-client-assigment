import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Pages/Home/Home";
import SportComponent from "../components/Pages/SportComponent/SportComponent";
import AddComponent from "../components/Pages/AddComponent/AddComponent";
import Details from "../components/Pages/Details/Details";

import SignUp from "../components/Pages/Auth/SignUp/SignUp";
import MyEquipment from "../components/Pages/MyEquipment/MyEquipment";
import UpdateEquipment from "../components/Pages/UpdateEquipment/UpdateEquipment";
import SignIn from "../components/Pages/Auth/SignIn/SignIn";
import PrivateRouter from "./PrivateRouter";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
import ContractUs from "../components/Pages/ContractUs/ContractUs";


const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/sportcomponent',
                element:<SportComponent></SportComponent>
            },
            {
                path: '/mycomponent',
                element: <PrivateRouter><MyEquipment></MyEquipment></PrivateRouter> 
            },
            {
                path: '/updateComponent/:id',
                element: <PrivateRouter><UpdateEquipment></UpdateEquipment></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/cards/${params.id}`)
            },
            {
                path: '/addComponent',
                element:<PrivateRouter><AddComponent></AddComponent></PrivateRouter>
            },
            {
                path: '/details/:id',
                element:<PrivateRouter><Details></Details></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/cards/${params.id}`)
            },
            {
                path: '/signIn',
                element:<SignIn></SignIn>
            },
            {
                path: '/SignUp',
                element:<SignUp></SignUp>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contractus',
                element: <ContractUs></ContractUs>
            }
        ]
    }
])


export default router;