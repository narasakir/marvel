import axios from 'config/axios'

const apikey = '5190d4fe1c43d783a9234f22c9262cb1'

export const get = () => axios.get(`/characters?apikey=${apikey}`)

export const getHero = (heroId) => axios.get(`/characters/${heroId}?apikey=${apikey}`)
