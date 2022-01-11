import React, { useEffect } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import { useDispatch, useSelector } from 'react-redux';


export const ListPokemons = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.pokemon);


    useEffect(() => {
        dispatch({
            type: 'SET_REQUEST_DATA',
            payload: 'pokemon'
        })
    }, [dispatch]);

    return (
        <>
            <SideNav
                onSelect={(url) => {
                    dispatch({
                        type: 'SET_REQUEST_POKEMON',
                        payload: {
                            action: 'SET_POKEMON_SELECTED',
                            url
                        }
                    })

                    dispatch({
                        type: 'SET_LOADING',
                        payload: true
                    })
                }}
            >
                <SideNav.Toggle />
                <h5 className='title'>Pokemon</h5>
                <SideNav.Nav>
                    {data.length !== 0 ? data.map((data, key) => {
                        return (
                            <NavItem eventKey={data.url} key={key}>
                                <NavIcon>
                                    https://github.com/SopAme1996/pokedesk/tree/main/public/img/pokemon
                                    {/* <img className='icon-pokemon' src={`../../img/pokemon/${data.url.split('/')[6]
                                        }.png`} alt={data.name} /> */}
                                    <img className='icon-pokemon' src='https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/1.png' alt={data.name} />


                                </NavIcon>
                                <NavText>
                                    <p className='text-name'>{data.name}</p>
                                </NavText>
                            </NavItem>
                        )
                    }) : 'Loading'}
                </SideNav.Nav>
            </SideNav>
        </>
    )

}
