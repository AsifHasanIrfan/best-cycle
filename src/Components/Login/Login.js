import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import firebaseConfig from '../../Components/firebaseConfig';
import "firebase/auth";
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    }

const Login = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(userContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        photo:''
    });
    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            setLoggedInUser(signedInUser);
            setUser(signedInUser);
            setUserToken();
            sessionStorage.setItem('email', signedInUser.email);
            history.replace(from);
        }).catch((error) => {
            const errorMessage = error.message;
            const email = error.email;
            console.log(errorMessage, email)
        });
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div className="container d-flex justify-content-center login">
            <button className="login-btn" onClick={handleGoogleSingIn}>Continue With Google</button>
        </div>
    );
};

export default Login;