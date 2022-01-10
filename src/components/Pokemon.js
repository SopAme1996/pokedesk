import React from 'react'
import { useSelector } from 'react-redux'

export const Pokemon = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon_Selected);
    const loading = useSelector(state => state.pokemon.loadin);


    if (pokemon.length === 0) {
        return (
            <div className='pokemonDesk'>
                <h1>Select your pokemon</h1>
            </div>
        )
    }

    if (loading) {
        return (
            <div className='pokemonDesk'>
                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
    return (
        <div className='pokemonDesk'>
            <div className='container-info'>
                <div className='img-pokemon'>
                    <div>
                        <img src={pokemon.sprites.other.dream_world.front_default} alt='pokemon-img' />
                    </div>
                </div>

                <div className='name-pokemon'>
                    <div className='container-name'>
                        <p className='name'><strong>{pokemon.name}</strong></p>
                        <p className='hp'> {pokemon.stats[0].base_stat} hp</p>
                    </div>
                    <p className='xp'>{pokemon.base_experience} exp</p>

                </div>

                <div className='info-pokemon'>
                    <div>
                        <p className='nivel'><strong>{pokemon.stats[1].base_stat}K</strong></p>
                        <p className='type'>Ataque</p>
                    </div>

                    <div>
                        <p className='nivel'><strong>{pokemon.stats[2].base_stat}K</strong></p>
                        <p className='type'>Especial</p>
                    </div>

                    <div>
                        <p className='nivel'><strong>{pokemon.stats[3].base_stat}K</strong></p>
                        <p className='type'>Defensa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
