import React, { Component } from 'react';
const Context = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ID":
            return { ...state, id: action.payload };
        default:
            return state;
    }

}

export default class ContextProvider extends Component {
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action))
        },
        id: null
    }
    render() {
        let { state, props: { children } } = this;
        return (
            <Context.Provider value={state}  >
                {children}
            </Context.Provider>
        )
    }
}
export const ContextConsumer = Context.Consumer;