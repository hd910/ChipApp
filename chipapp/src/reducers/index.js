import {combineReducers} from 'redux';
import {SET_GAME_MESSAGE} from "../actions";

function gameMessage(state =[], action){
    switch(action.type){
        case SET_GAME_MESSAGE:
            return Object.assign({}, state, {
                message: action.message,
                something: "yes"
            });
        default:
            return state;
    }
}

//FOR FUTURE REFERENCE
// case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ]

const rootReducer = combineReducers({gameMessage});

export default rootReducer;