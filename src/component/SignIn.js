import React from 'react';
import LoggedIMG from "../assets/Sign iN.png"
import { signInWithGoogle } from './firebase'

const SignInButton = () => {
  return (
    <button onClick={signInWithGoogle}>
      <img src={LoggedIMG} alt="" className='h-10 object-contain'/>
    </button>
  );
};

export default SignInButton;
