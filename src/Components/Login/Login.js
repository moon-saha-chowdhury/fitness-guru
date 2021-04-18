import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app() ;


const Login = () => {

    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn =()=>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => { 
         const {displayName, email,photoURL} = result.user;
         const signedInUser ={name:displayName, email,photo: photoURL}
         setLoggedInUser(signedInUser);
         history.replace(from);
         console.log(signedInUser);
    // ...
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div className="text-center mt-5">
     <h3 className=" text-warning pt-5 "><strong><FontAwesomeIcon icon={faDumbbell} /> Fitness Guru</strong></h3>
        <h4 className="pt-3" >Login With</h4>
        <br/>
        <button onClick={handleGoogleSignIn} className="btn btn-warning text-dark ml-auto mr-auto">
        <FontAwesomeIcon icon={faGoogle} /> Continue With Google</button>

    </div>
    );
};

export default Login;