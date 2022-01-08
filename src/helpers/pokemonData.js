
export const pokemonApi = async (rutaApi) => {
    let url = '';
    if (rutaApi === 'pokemon') {
        url = `https://pokeapi.co/api/v2/${rutaApi}`;
    } else {
        url = rutaApi;
    }
    const pokemonApi = await fetch(url, {
        method: 'GET'
    });
    const respuesta = await pokemonApi.json();
    return respuesta;
}