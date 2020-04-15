import React from 'react';
import { ContextConsumer } from './store/store';
import Routes from './Routes';

export default function RoutesContainer() {
    return (
        <ContextConsumer>
            {
                ({ id, dispatch }) => {
                    return <Routes id={id} dispatch={dispatch} />
                }
            }
        </ContextConsumer>
    )
}