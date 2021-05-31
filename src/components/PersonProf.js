import React, {useEffect, useContext, Fragment} from 'react'
import PersonContext from '../context/Person/PersonContext';

const PersonProf = () => {
    const { selectedPerson } = useContext(PersonContext);

    return (
        <Fragment>
            {
                selectedPerson ? (
                    <div>
                        <img src={selectedPerson.avatar}></img>
                        <h4>{`${selectedPerson.first_name} ${selectedPerson.last_name}`}</h4>
                        <h3>{selectedPerson.email}</h3>
                    </div>
                ) : (
                    <h4>No hay información</h4>
                )
            }
        </Fragment>
    )
}

export default PersonProf
