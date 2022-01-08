import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { pokemonReducer } from '../reducer/pokemonReducer';
import rootSaga from '../saga/pokemonSaga';

const reducers = combineReducers({
    pokemon: pokemonReducer
});

//Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);