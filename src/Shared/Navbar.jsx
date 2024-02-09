import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import profile from '../assets/image/istockphoto-1495088043-612x612.jpg'
// import Swal from "sweetalert2";
// import useAnnouncement from "../hooks/useAnnouncement";
import useCart from './../hooks/useCart';
import Swal from "sweetalert2";


const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
 
  const [cart] =useCart()
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      Swal.fire("Logout successfully done!");
    })
    .catch(error=>console.log(error));
  }
    const navOption=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/membership'>Membership</NavLink></li>
    <li><Link to='/dashboard/cart'> <button className="btn">
     <FaShoppingCart />
  <div className="badge badge-secondary"> +{cart.length}</div>
</button></Link></li>
          
    </>
    return (
        <>
             <div className="navbar  text-black fixed z-10 bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
             {navOption}
            </ul>
          </div>
         <a className="btn btn-ghost uppercase  text-xl">D e p o t</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navOption}
          </ul>
        </div>
        <div className="navbar-end">
        {
        user?<div className="dropdown dropdown-bottom dropdown-end text-black">
        <label tabIndex={0} className=" m-1"><img src={user.photoURL? user.photoURL:profile} alt="" className=" border rounded-full h-12 w-12" /></label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a className="text-accent text-base font-semibold">{user.displayName}</a></li>
          <li><a><button className="hover:btn btn-outline btn-accent  " onClick={handleLogout}>Logout</button></a></li>
          <li><Link to='/dashboard/dHome'><button className=" hover:btn btn-outline btn-accent  ">Dashboard</button></Link></li>

        </ul>
      </div> :<Link to='/login'><button className=" btn btn-outline btn-accent text-white">Join us</button></Link>
    
      }
      {/* <li><Link to='/dashboard/cart'> <button className="btn">
     <FaShoppingCart />
  <div className="badge badge-secondary"> +{cart.length}</div>
</button></Link></li> */}
        </div>
      </div>
        </>
   
    );
};

export default Navbar;



