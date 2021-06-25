import React, { useContext } from 'react';
import { faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './SignIn.css'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { firebaseConfig } from '../Auth/FirebaseConfig';
import { useForm } from 'react-hook-form';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const SignIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [, setLoggedInUser] = useContext(UserContext);

    const googleHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const SignInUser = {
                    isSignedIn: true,
                    email: email,
                    name: displayName,
                    photo: photoURL,
                    success: true
                }
                setLoggedInUser(SignInUser);

                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });

    }

    return (
        <>
            <div class="form">
                <form class="form-horizontal signIn" onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-wrap" >
                        <h2>Login</h2>
                        <div class="form-group">
                            <label for="email">Username:</label>
                            <div class="relative">
                                <input   {...register("name", { required: true })} class="form-control form-input" type="text" placeholder="Username" />
                                {errors.name?.type === 'required' && "name is required"}
                                <i class="icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </i>

                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email">Password:</label>
                            <div class="relative">
                                <input  {...register("password", { required: true })} class="form-control form-input" type="password" required="" placeholder="Password" />
                                {errors.password?.type === 'required' && "password is required"}

                                <i class="icon">
                                    <FontAwesomeIcon icon={faKey} />
                                </i>
                            </div>
                            <span class="pull-right"><small><a className="forgot" href="#">Forgot Password?</a></small></span>
                        </div>

                        <div class="login-btn">
                            <a href="#">
                                <button class="movebtn movebtnsu" type="Submit">
                                    Login
                                    <i class="ms-3">
                                        <FontAwesomeIcon icon={faLock} />
                                    </i>
                                </button>
                            </a>
                            <div class="relative">
                                <hr />
                                <span class="login-text">or login with</span>
                            </div>
                            <div class="clearfix"></div>
                            <div class="social-btn clearfix">
                                <a href="#">
                                    <button onClick={googleHandler} class="movebtn google" type="Submit">
                                        Google

                                    </button>
                                </a>
                                <a href="#">
                                    <button class="movebtn facebook" type="Submit">
                                        Facebook
                                        <i class="fa fa-fw fa-facebook"></i>
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div class="sign-up">
                        <Link to='/signup' class="signbtn"><small>Not a member? Sign Up <i>(Click me)</i></small></Link>
                    </div>
                </form>

            </div>
        </>
    );
};

export default SignIn;