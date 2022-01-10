
const initialState = {
    data: [],
    pokemon_Selected: [],
    loadin: false,
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
        case 'SET_LOADING':
            return {
                ...state,
                loadin: action.payload,
            }

        default:
            return state;
    }
}