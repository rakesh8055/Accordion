import { FcGoogle } from "react-icons/fc"
import React from 'react';
import './LoginPage.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase/firebase.utils";
import { onAuthStateChanged } from "@firebase/auth";

const LoginPage = (props) => {
    let navigate = useNavigate();

    const handleclick = () => {
        signInWithGoogle().then((result) => {
            navigate('/adviser')
        })
    }

    onAuthStateChanged(auth, (user) => {
        if(user) {
            navigate('/adviser');
        }
    })

    return(
        <div className='login'>
            <h1 data-testid='login-header'>Sign in using Google</h1>
            <button onClick={handleclick} className='google-login-btn' data-testid='google-login-btn'><FcGoogle/></button>
        </div>
    )
}
export default LoginPage;