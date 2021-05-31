import React, { useEffect } from 'react'
import { useContext } from 'react'
import PersonContext from '../context/Person/PersonContext';

const PersonsList = () => {

   const { personsList, getPersonsList, getPersonProf } = useContext(PersonContext);

    useEffect(() => {
        getPersonsList();
    },[])

    return (
        <div className="list-group-h-100">
            {
                personsList.map(person => (
                    <a href="#!" className="list-group-item list-group-item-action d-flex flex-row justify-content-start" key={person.id} onClick={() => getPersonProf(person.id)}>
                        <img src={person.avatar} className="img-fluid mr-4 rounded-circle"></img>
                        <p>
                            {`${person.first_name} ${person.last_name}`}
                        </p>
                    </a>
                ))
            }
        </div>
    )
}

export default PersonsList
