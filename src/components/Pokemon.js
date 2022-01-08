import React from 'react'
import { useSelector } from 'react-redux'

export const Pokemon = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon_Selected);

    if (pokemon.length === 0) {
        return (
            <div>
                <h1>Select your pokemon</h1>
            </div>
        )
    }
    return (
        <div className='pokemonDesk'>
            <div className='img-pokemon'>
                <img src={pokemon.sprites.front_default} alt='pokemon-img' />
            </div>

            <div className='info-pokemon'>
                
            </div>
        </div>
    )
}
