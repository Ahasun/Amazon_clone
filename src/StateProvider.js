import React, {createContext, useContext, useReducer} from 'react';


export const StateContext = createContext(); // prepares the datalayer


//pass info to children conponent 
export const StateProvider = ({reducer, initialState, children} ) =>(

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </StateContext.Provider>

);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);