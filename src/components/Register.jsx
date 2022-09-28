import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { } from '../context/auth';
import { useAuth } from '../hooks/useAuth';
import { register } from '../services/firebase';



const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()



    return (
        <>
            <form name='registration_form'>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">Sign Up</p>
                </div>

                <div className="mb-6">
                    <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        value={name}
                        placeholder="Name"
                        required
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <input
                        type='email'
                        value={email}
                        placeholder="Email"
                        required
                        onChange={e => setEmail(e.target.value)}
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />


                </div>

                <div className="mb-6">
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type='password'
                        value={password}
                        required
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>




                <div className="text-center lg:text-left">
                    <button
                        onClick={(event) => { event.preventDefault(); register(name, email, password); navigate('/') }}
                        type='submit'
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Sign Up
                    </button>

                </div>
            </form>
            <p>
                Already have an account?
                <Link to='/'> login</Link>
            </p>

        </>
    );
}

export default Register;
