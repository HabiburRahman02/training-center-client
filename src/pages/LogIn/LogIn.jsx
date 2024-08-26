import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const LogIn = () => {
    const [showPass, setShowPass] = useState(false)
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')
    const { logIn, logInWithGoogle } = useContext(AuthContext);

    const location = useLocation()
    console.log(location)
   

    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setLoginError('')
        setLoginSuccess('')

        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setLoginSuccess('Login successfully')
                
            })
            .catch(error => {
                console.log(error)
                setLoginError("Wrong email or password")
            })
    }
    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="shadow-2xl bg-white p-12 lg:w-1/2 mx-auto">
            <h4 className="text-2xl text-center mb-3">Log in</h4>
            <form onSubmit={handleLogIn}>
                <div className="relative">
                    <input name="email" className="border p-4 w-full mb-4 rounded-md" type="email" placeholder="email" required />
                    <span className="absolute top-4 right-3"> <MdEmail className="  text-2xl"></MdEmail></span>
                </div>
                <div className="relative">
                    <input
                        name="password"
                        className="border p-4 w-full mb-4 rounded-md"
                        type={showPass ? 'text' : 'password'}
                        placeholder="password"
                        required
                    />
                    <span className="absolute bottom-8 right-3 " onClick={() => setShowPass(!showPass)}>

                        {
                            showPass ?
                                <FaEyeSlash className="text-2xl"></FaEyeSlash>

                                : <FaEye className="text-2xl"></FaEye>
                        }
                    </span>
                </div>
                <input type="submit" className=" bg-sky-400 hover:bg-sky-500 mb-4  py-4 rounded-md w-full text-white" value="Log in" />
            </form>

            <div className="flex justify-between items-center">
                <p>Are you new to this website? <Link to='/signup' className="ml-2 mb-3 text-red-500" >Sign up</Link> </p>
                <button onClick={handleGoogleLogin} className="btn">Google</button>
            </div>
            <div>
                {
                    loginError && <p className="text-red-600 text-center">{loginError}</p>
                }
                {
                    loginSuccess && <p className="text-green-600 text-center">{loginSuccess}</p>
                }
            </div>
        </div>
    );
};

export default LogIn;