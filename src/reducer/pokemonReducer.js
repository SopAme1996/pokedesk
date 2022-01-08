
const initialState = {
    data: [],
    pokemon_Selected: [],
}
export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload
            }
        case 'SET_POKEMON_SELECTED':
            return {
                ...state,
                pokemon_Selected: action.payload,
            }

        default:
            return state;
    }
}