import React from 'react';
import { Link, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {


    return (
        <>
            <form class="form-horizontal signIn">
                <div class="form-wrap" >
                    <h2>SignUp</h2>

                    <div class="form-group">
                        <div class="relative">
                            <input class="form-control form-input" id="name" type="text" required="" autofocus="" title="" autocomplete="" placeholder="Email Address" />
                            <div class="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="relative">
                            <input class="form-control form-input" id="name" type="text" required="" autofocus="" title="" autocomplete="" placeholder="Username" />
                            <i class="icon">
                                <FontAwesomeIcon icon={faUser} />
                            </i>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="relative">
                            <input class="form-control form-input" type="password" required="" placeholder="Password" />
                            <i class="icon">
                                <FontAwesomeIcon icon={faKey} />
                            </i>
                        </div>
                    </div>

                    <div class="login-btn">
                        <a href="#">
                            <button class="movebtn movebtnsu" type="Submit">
                                Submit
                                <i class="ms-3">
                                    <FontAwesomeIcon icon={faPaperPlane} />
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
                                <button class="movebtn google" type="Submit">
                                    Google
                                    <i class="fa fa-fw fa-google"></i>
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
                    <Link to='/signIn' class="signbtn"><small>Already member? Sign in <i>(Click me)</i></small></Link>
                </div>
            </form>
        </>
    );
};

export default SignUp;