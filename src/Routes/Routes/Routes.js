import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Main from "../../layout/Main/Main";
import Register from "../../components/Register/Register";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";
import Profile from "../../components/UserProfile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])