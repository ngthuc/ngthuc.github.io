import React, {useEffect, useState} from 'react';
import './style.login.css';
import { signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {AUTH} from "../../firebase";

// const user = auth.currentUser;
const googleAuthProvider = new GoogleAuthProvider();

const LoginScreen = () => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const [user, setUser] = useState<any>({});

    const handleSignInWithGoogle = async () => {
        await signInWithPopup(AUTH, googleAuthProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user)
                console.log('SignIn with Google:', {token, user})
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log('SignIn fail:', {errorCode, errorMessage, email, credential});
                // ...
            });
    }

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = AUTH.onAuthStateChanged((user: any) => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    return (
        <div className="center-screen login-screen">
            {
                !isSignedIn ? <>
                    <p>Vui lòng đăng nhập:</p>
                    <button onClick={handleSignInWithGoogle}>Đăng nhập bằng Google</button>
                </> : <>
                    <p>Xin chào {AUTH.currentUser?.displayName || user.displayName}! Bạn hiện đã đăng nhập!</p>
                    <button onClick={() => signOut(AUTH)}>Đăng xuất</button>
                </>
            }
        </div>
    );
}

export default LoginScreen;
