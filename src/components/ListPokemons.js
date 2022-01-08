import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ListPokemons = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch({
            type: 'SET_REQUEST_DATA',
            payload: 'pokemon'
        })
    }, [dispatch])

    const handleClickUrl = (url) => {
        dispatch({
            type: 'SET_REQUEST_POKEMON',
            payload: url
        })
    }

    return (
        <div className='sidebar'>
            <h2>Pokedesk</h2>
            <ul>
                {data.length !== 0 ? data.map((data, key) => {
                    return (
                        <li key={key} onClick={() => handleClickUrl(data.url)}>{data.name}</li>
                    )
                }) : 'Loading'}
            </ul>
        </div>
    )

}
