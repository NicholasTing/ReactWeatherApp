import { FETCH_WEATHER } from "../actions/index";

// Do not mutate state, return a completely new
// instance of state. Never want to manipulate our state
// in redux

// Old stuff and new stuff. return new version of state.
// make sure you are returning a new instance of state.
export default function(state = [], action){

    switch(action.type){
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);

            // es6 context, this one adds the newest to the top
            return [action.payload.data, ...state]; 
            // [city2, city1 ] not [city, [city,city]]
        
    }
    // console.log('action received');
    return state;
}