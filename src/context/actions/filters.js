export const ACTION_TYPES = {
    SET_FAVORITE_HERO: 'SET_FAVORITE_HERO',
    SET_ORDERBY: 'SET_ORDERBY',
    SET_ONLY_FAVORITES: 'SET_ONLY_FAVORITES'
}
 
export const setFavoriteAction = payload => ({
    type: ACTION_TYPES.SET_FAVORITE_HERO,
    payload
})

export const setOrderByNameAction = payload => ({
    type: ACTION_TYPES.SET_ORDERBY,
    payload
})

export const setOnlyFavoriteAction = payload => ({
    type: ACTION_TYPES.SET_ONLY_FAVORITES,
    payload
})