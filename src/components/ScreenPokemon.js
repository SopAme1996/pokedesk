import React from 'react'
import { ListPokemons } from './ListPokemons'
import { Pokemon } from './Pokemon'


export const ScreenPokemon = () => {
    return (
        <div className='container'>
            <ListPokemons />
            <div className='container-pokemon'>
                <Pokemon />
            </div>


        </div>
    )
}
