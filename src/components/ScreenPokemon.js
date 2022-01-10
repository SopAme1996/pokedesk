import React from 'react'
import { ListPokemons } from './ListPokemons'
import { Pokemon } from './Pokemon'



export const ScreenPokemon = () => {
    return (
        <>
            <ListPokemons />
            <main>
                <Pokemon />
            </main>
        </>
    )
}
