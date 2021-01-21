import { ACTION_TYPES } from 'context/actions/filters'

export const FiltersReducer = ({ filters }, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_FAVORITE_HERO:
      return {
        ...filters,
        favorites: [...filters.favorites, payload]
      }
    case ACTION_TYPES.SET_ORDERBY:
    return {
        ...filters,
        orderByName: payload
    }
    case ACTION_TYPES.SET_ONLY_FAVORITES:
    return {
        ...filters,
        showOnlyFavorites: payload
    }
    default:
      return filters
  }
}

FiltersReducer.key = 'filters'

FiltersReducer.initialState = {
  favorites: [],
  orderByName: false,
  showOnlyFavorites: false
}
