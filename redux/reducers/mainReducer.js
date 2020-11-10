import { YEAR_CHANGE, NAME_CHANGE, TYPE_CHANGE, SEARCH_MOVIE } from '../actions';

const initialState = {
    inputYear: '',
    inputType: '',
    inputName: '',
    searchMovies: [],
};



const main = (state = initialState, action) => {
    switch (action.type) {
        case YEAR_CHANGE:
            return Object.assign({}, state, { inputYear: action.payload });
        case TYPE_CHANGE:
            return Object.assign({}, state, { inputType: action.payload });
        case NAME_CHANGE:
            return Object.assign({}, state, { inputName: action.payload });   
        case SEARCH_MOVIE:
            return Object.assign({} , state, {searchMovies : action.payload});        
        default:
            return state;
    }
}

export default main;