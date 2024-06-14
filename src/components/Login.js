import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { login } from '../features/userSlice';

import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [open, setOpen] = useState('false');

  const auth = getAuth();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login({
          email: user.email,
          uid: user.uid,
        }));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center text-white'>
      <div className='h-[300px] w-80 bg-blue-600 px-6 my-4'>
        <div>
          <h2 className='text-3xl font-bold pb-6 text-center'>Login</h2>
          <form className='flex flex-col items-center'>
            <div className='w-full relative'>
              <input 
              className='border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent'
              type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
              <MdMail className='absolute top-[40%] right-3'/>
            </div>
            <div className='w-full relative'>
              <input
              className='border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent'
              type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
              <FaLock className='absolute top-[35%] right-3'/>
            </div>
            <button
            className='my-2 py-2 w-full rounded-full'
            type="submit" onClick={signIn}>Sign In</button>
            <span>Don't have an account? <span>Register</span></span>
          </form>

        </div>
      </div>
    </div>
    /** 
    <div className="login">
      <form>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>
      </form>
    </div>
    */
  );
}

export default Login;
