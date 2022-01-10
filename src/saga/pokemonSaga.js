import { put, all, call, takeLatest } from 'redux-saga/effects';
import { pokemonApi } from '../helpers/pokemonData';

function* requestPokemonsData({ payload }) {
    const { results } = yield call(pokemonApi, payload);
    yield put({
        type: 'SET_DATA_SUCCESS',
        payload: results,
    })
}

function* requestPokemonData({ payload }) {
    const { action, url } = payload;
    const pokemon = yield call(pokemonApi, url);
    yield put({
        type: action,
        payload: pokemon
    });
    yield put({
        type: 'SET_LOADING',
        payload: false,
    });
}

function* watchPokemonsAsync() {
    yield takeLatest('SET_REQUEST_DATA', requestPokemonsData)
}

function* watchPokemonAsync() {
    yield takeLatest('SET_REQUEST_POKEMON', requestPokemonData)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchPokemonsAsync(),
        watchPokemonAsync(),

    ])
}