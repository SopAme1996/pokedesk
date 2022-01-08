import { put, takeEvery, all, call } from 'redux-saga/effects';
import { pokemonApi } from '../helpers/pokemonData';

function* requestPokemonsData({ payload }) {
    const { results } = yield call(pokemonApi, payload);
    yield put({
        type: 'SET_DATA_SUCCESS',
        payload: results,
    })
}

function* requestPokemonData({ payload }) {
    const pokemon = yield call(pokemonApi, payload);
    yield put({
        type: 'SET_POKEMON_SELECTED',
        payload: pokemon
    })
}

function* watchPokemonsAsync() {
    yield takeEvery('SET_REQUEST_DATA', requestPokemonsData)
}

function* watchPokemonAsync() {
    yield takeEvery('SET_REQUEST_POKEMON', requestPokemonData)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchPokemonsAsync(),
        watchPokemonAsync(),

    ])
}