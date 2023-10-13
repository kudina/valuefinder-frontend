import { createBrowserRouter } from "react-router-dom";


import Index from './Pages/Landing/Index';
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Post from "./Pages/Post/Index"
import Profile from "./Pages/Auth/Profile";
import Userbio from './Pages/Contract/Userbio'
import Editpost from "./Pages/Post/Editpost";
import Contractroom from './Pages/Contract/Contractroom';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-job",
    element: <Post/>,
  },

  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/userbio",
    element: <Userbio/>,
  },
  {
    path: "/editpost",
    element: <Editpost/>,
  },
  {
    path: "/contract",
    element: <Contractroom/>,
  },

  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/create-job",
  //   element: <CreateJob />,
  // },
  // {
  //   path: "/client-billing",
  //   element: <Billing />,
  // },
  // {
  //   path: "/client-security",
  //   element: <Security />,
  // },
  // {
  //   path: "/client-membership",
  //   element: <Membership />,
  // },
]);

export default routes;
