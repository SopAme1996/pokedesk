import { Provider } from 'react-redux';
import { ScreenPokemon } from './components/ScreenPokemon';
import { store } from './store/store';

export const PokemonTest = () => {
    return (
        <>
            <Provider store={store}>
                <ScreenPokemon />
            </Provider>
        </>
    )
}
