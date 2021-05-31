import React, { useReducer} from 'react'
import PersonReducer from './PersonReducer';
import PersonContext from './PersonContext'
import axios from 'axios'

const PersonState = (props) => {
    const initialState = {
        personsList: [],
        selectedPerson: null
    } 

    const [state, dispatch] = useReducer(PersonReducer, initialState)

    const getPersonsList = async () => {
        const rslt = await axios.get('https://reqres.in/api/users');
        console.log(rslt);
        dispatch({
            type: 'PRSN_GET_LIST',
            payload: rslt.data.data
        });
    }

    const getPersonProf = async (personid) => {
        const rslt = await axios.get('https://reqres.in/api/users/' + personid)
        console.log(rslt);
        dispatch({
            type: 'PRSN_GET_PROF',
            payload: rslt.data.data
        })
    }

    return (
        <PersonContext.Provider value={{
            personsList:  state.personsList,
            selectedPerson: state.selectedPerson,
            getPersonsList,
            getPersonProf
        }}> 
            {props.children}
        </PersonContext.Provider>
    )

}

export default PersonState;