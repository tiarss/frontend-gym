type TPokemon = {
  name: string
  url: string
}

export type Data = {
  results: TPokemon[]
  next: string
  previous: string
}