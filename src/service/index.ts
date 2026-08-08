const POKEMON_URL = "https://pokeapi.co/api/v2"

export const useFetch = async (path: string) => {
    let result = await fetch(POKEMON_URL+path)
    const data = await result.json()
    return data
}
