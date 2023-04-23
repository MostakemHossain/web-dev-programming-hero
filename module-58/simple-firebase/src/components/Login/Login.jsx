import React from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

import app from '../../firebase/firebase.init';
import { useState } from 'react';
const Login = () => {
    const auth=getAuth(app);
    const provider= new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();

    const [user,setUser]=useState(null)

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const Loggeduser= result.user;
            console.log(Loggeduser);
            setUser(Loggeduser);
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleLogout=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result)
            setUser(null)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    const handleGithubLogIn=()=>{
       signInWithPopup(auth,githubProvider)
       .then(result=>{
        const logUser= result.user;
        setUser(logUser);
       })
       .catch(error=>{
        console.error(error)
       })

    }
    return (
        <div>
           { user ? <button onClick={handleLogout}>Logout</button>:
            <div>
                <button onClick={handleGoogleSignIn}>Google login</button>
                <button onClick={handleGithubLogIn}>Github Login</button>
            </div>
                }

            {
                user && <div>
                    <h3>Name :{user.displayName}</h3>
                    <p>Email : {user.email}</p>

                    <img src={user.photoURL} alt="" />
                </div>

            }
        </div>
    );
};

export default Login;