import React from 'react';
import { useState } from 'react';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ticket = () => {
    const [appState, changeState] = useState({
        objects: [
            { id: 1, toggled: false },
            { id: 2, toggled: false },
            { id: 3, toggled: false },
            { id: 4, toggled: false },
            { id: 5, toggled: false },
            { id: 6, toggled: false },
            { id: 7, toggled: false },
            { id: 8, toggled: false }
        ]
    })


    const selectItem = (index) => {

        let arrayCopy = [...appState.objects];
        arrayCopy[index].toggled ? (arrayCopy[index].toggled = false) : (arrayCopy[index].toggled = true);
        changeState({ ...appState, objects: arrayCopy });

    }


    const toggleActive = (index) => {
        if (appState.objects[index].toggled) {
            return 'bg-primary';
        } else {
            return "bg-danger";
        }
    }


    return (
        <div className="d-flex">
            {
                appState.objects.map((data, index) =>
                    <div className="ml-3 text-dark ">

                        <FontAwesomeIcon key={index}
                            className={toggleActive(index)}
                            onClick={() => selectItem(index)} size="2x" icon={faChair} />
                    </div>
                )
            }

        </div>
    );
};

export default Ticket;