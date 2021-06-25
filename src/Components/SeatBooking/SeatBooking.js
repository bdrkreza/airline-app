import { faChair } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { ticket } from '../../Assets/Data/ticket';
import Ticket from './Ticket';

const SeatBooking = () => {

    const [appState, changeState] = useState(ticket)


    const selectItem = (index) => {

        let arrayCopy = [...appState.ticket];

        arrayCopy[index].toggled ? (arrayCopy[index].toggled = false) : (arrayCopy[index].toggled = true);
        changeState({ ...appState, ticket: arrayCopy });

    }


    function toggleActive(index) {
        if (appState[index].toggled) {
            return 'box bg-primary';
        } else {
            return "bg-danger";
        }
    }


    return (
        <>
            <div className='container mt-5'>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <h5 className="text-center">First Class Price: $500</h5>
                            <div class="card-body d-flex">
                                <Ticket />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <h5 className="text-center">Business Class Price: $600</h5>
                            <div class="card-body d-flex">
                                <Ticket />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <button type="button" class="btn btn-danger mt-5 ">CheckOut</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SeatBooking;