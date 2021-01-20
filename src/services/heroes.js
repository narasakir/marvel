import axios from 'config/axios'

const apikey = '5190d4fe1c43d783a9234f22c9262cb1'

export const get = orderBy => axios.get(`/characters?orderBy=${orderBy}&&offset=100&&apikey=${apikey}`)

export const getHero = heroId => axios.get(`/characters/${heroId}?apikey=${apikey}`)

export const getHeroesByName = name => axios.get(`/characters?nameStartsWith=${name}&&apikey=${apikey}`)
