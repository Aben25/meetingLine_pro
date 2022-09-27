import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import {  } from '../context/auth';
import { useAuth } from '../hooks/useAuth';
import { register } from '../services/firebase';



const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    const navigate = useNavigate()

   

    return (
        <>
            <section class="">
                <div class="px-6 h-full text-gray-300">
                    <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form name='registration_form'>
                           
                                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p class="text-center font-semibold mx-4 mb-0">Sign Up</p>
                                </div>

                                <div class="mb-6">
                                    <input
                                        type="text"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        value={name}
                                        placeholder="Enter your Name"
                                        required
                                        onChange={e => setName(e.target.value)} 
                                    />
                                </div>

                                <div class="mb-6">
                                    <input
                                        type='email'
                                        value={email}
                                        placeholder="Enter your email"
                                        required
                                        onChange={e => setEmail(e.target.value)} 
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                        />
                                  
                                
                                </div>

                                <div class="mb-6">
                                    <input
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        type='password'
                                        value={password}
                                        required
                                        placeholder='Enter your password'
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>


                            

                                <div class="text-center lg:text-left">
                                    <button
                                        onClick={(event) => { event.preventDefault(); register(name,email, password);}}
                                        type='submit'
                                        class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Sign Up
                                    </button>
                           
                                </div>
                            </form>
                            <span>
                                Already have an account?
                                <Link to='/'>login</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;
