import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa6";

const SignUp = () => {
    const [showPass, setShowPass] = useState(false)
    const [signUpError, setSignUpError] = useState('')
    const [signUpSuccess, setSignUpSuccess] = useState('')
    const { createUser, logInWithGoogle } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        // clear error
        setSignUpError('')
        setSignUpSuccess('')

        if (password.length < 6) {
            setSignUpError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Give me minimum a uppercase');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSignUpSuccess('New user created successfully')
                if (user) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "New user created successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        logInWithGoogle()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="shadow-2xl bg-white p-12 lg:w-1/2 mx-auto">
            <h4 className="text-2xl text-center mb-3">Sign up</h4>
            <form onSubmit={handleSignUp}>
                <div className="relative">
                    <input name="name" className="border p-4 w-full mb-4 rounded-md" type="text" placeholder="name" required />
                    <span className="absolute top-4 right-3"> <FaUserCheck className="  text-2xl"></FaUserCheck></span>
                </div>
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
                <input type="submit" className=" bg-sky-400 hover:bg-sky-500 mb-4  py-4 rounded-md w-full text-white" value="Sign up" />
            </form>

            <div className="flex justify-between items-center">
                <p>Already have an account? <Link to='/login' className="ml-2 mb-3 text-red-500">Login</Link> </p>
                <button onClick={handleGoogleLogin} className="btn">Google</button>
            </div>
            <div>
                {
                    signUpError && <p className="text-red-600 text-center">{signUpError}</p>
                }
                {
                    signUpSuccess && <p className="text-green-600 text-center">{signUpSuccess}</p>
                }
            </div>
        </div>
    );
};

export default SignUp;