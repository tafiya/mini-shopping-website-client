import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
//import Cart from "../Pages/Cart/Cart";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        // {
        //   path:'cart',
        //   element: <Cart></Cart>

        // },
        // {
        //   path:'membership',
        //   element:<PrivateRouter><Membership></Membership></PrivateRouter>

        // },
        {
            path:'login',
            element:<Login></Login>
          },
          {
            path:'signup',
            element:<Signup></Signup>
          },
        //   {
        //     path:'viewDetails/:id',
        //     element:<VeiwDetails></VeiwDetails>,
        //     loader: ()=> fetch(`https://online-chat-nook-server.vercel.app/posts`)
        //   },
         
      ]
    },
  
   
    // {
    //     path: 'dashboard',
    //     element: <Dashboard></Dashboard>,
    //     children: [

    //       {
    //         path: 'addPost',
    //         element:<PrivateRouter><AddPost></AddPost></PrivateRouter>
    //       },
    //       {
    //         path: 'dHome',
    //         element:<Dhome></Dhome>
    //       },
    //       {
    //         path:'myProfile',
    //         element:<PrivateRouter><MyProfile></MyProfile></PrivateRouter>,

    //       },
    //       {
    //         path:'myPosts',
    //         element:<PrivateRouter><MyPost></MyPost></PrivateRouter>,

    //       },
          
    //     {
    //         path: 'manageUser',
    //         element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    //       },
    //       {
    //         path:'announcement',
    //         element:<AdminRoute><Announcement></Announcement></AdminRoute>
    //       },


    //       {
    //           path: 'adminProfile',
    //           element:<AdminProfile><AdminProfile></AdminProfile></AdminProfile> 
    //         },
    //       {
    //           path: 'reportComment',
    //           element: <AdminRoute><ReportedComment></ReportedComment></AdminRoute>
    //         },

    //     ]
    //   }
  ]);