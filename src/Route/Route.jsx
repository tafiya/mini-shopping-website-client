import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
//import Cart from "../Pages/Cart/Cart";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../layouts/DashBoard";
import AddItems from "../Pages/dashboard/AddItems/AddItems";
import AllUsers from "../Pages/dashboard/AllUsers/AllUsers";



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
  
   
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        // {
        //   path: 'payment',
        //   element: <Payment></Payment>
        // },
        // {
        //   path: 'paymentHistory',
        //   element: <PaymentHistory></PaymentHistory>
        // },

          // admin routes
          {
            path: 'addItems',
            element: <AddItems></AddItems>
          },
          // {
          //   path: 'manageItems',
          //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
          // },
          // {
          //   path: 'updateItem/:id',
          //   element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          //   loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
          // },
          {
            path: 'users',
            element: <AllUsers></AllUsers>
          }
      ]
    }
  ]);