import { PRSN_GET_LIST,PRSN_GET_PROF } from '../types'

export default (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case PRSN_GET_LIST:
            return {
                ...state,
                personsList: payload
            }
        case PRSN_GET_PROF:
            return {
                ...state,
                selectedPerson: payload
            }
        default:
            return state;
    } 

}