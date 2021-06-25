import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'
const HeroSection = ({ id }) => {
    return (
        <>

            <section class="hero-banner bg-light py-5">
                <div class="container">
                    <div class="row row align-items-center">
                        <div class="col-lg-5 offset-lg-1 order-lg-1">
                            <div class="main-content container home">
                                <div class="booking-form">
                                    <h3>Booking Flights</h3>
                                    <div class="input-group">
                                        <label for="">Flying From</label>
                                        <input class="inp-style" type="text" name="" placeholder="Dhake, Bangladesh" />
                                    </div>
                                    <div class="input-group">
                                        <label for="">Flying To</label>
                                        <input class="inp-style" type="text" name="" placeholder="New York, United States" />
                                    </div>
                                    <div class="inputs">
                                        <div class="input-group">
                                            <label for=" ">Departure</label>
                                            <input class="inp-style" type="date" name=" " />
                                        </div>
                                        <div class="input-group">
                                            <label for=" ">Return</label>
                                            <input class="inp-style" type="date" name=" " />
                                        </div>
                                    </div>
                                    {/* <div class="input-group f-class">
                                        <div>
                                            <label className="text-dark" for=" ">First Class ($150)</label>
                                            <input class="inp-style inp-width" value="0" name=" " />
                                        </div>
                                        <div class="plus-minus-btn mt-3">
                                            <button class="btn">
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                            <button class="btn">
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                        </div>
                                    </div> */}

                                    {/* <div class="input-group f-class">
                                        <div>
                                            <label className="text-dark" for=" ">Economy ($100)</label>
                                            <input class="inp-style inp-width" value="0" name=" " />
                                        </div>
                                        <div class="plus-minus-btn mt-3">
                                            <button class="btn" onclick="">
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                            <button class="btn" onclick="">
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                        </div>
                                    </div> */}
                                    <Link to={`/seatBooking/${id}`} class="btn btn-outline-secondary  btn-lg border">Booking Now</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <h1 class="mt-3">Exclusive Limited Time Offer</h1>
                            <p class="lead text-dark my-3">Fly to Hong Kong via Los Angeles, USA.</p>
                            <h1>$599</h1>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};

export default HeroSection;