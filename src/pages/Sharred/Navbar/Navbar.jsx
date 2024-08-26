import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Log out successfully",
                    showConfirmButton: false,
                    timer: 2500
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/about'>About</Link></li> */}

        {
            user && <>
                <li><Link to='/myReview'>My review</Link></li>
                <Link className="btn" onClick={handleLogOut}>Log out</Link>
            </>


        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <h3>Jym</h3>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='signup'> <button className="btn  btn-outline btn-secondary mr-4 px-6">Sign up</button></Link>
                <Link to='login'> <button className="btn btn-secondary px-6">Log in</button></Link>
            </div>
        </div>
    );
};

export default Navbar;