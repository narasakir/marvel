import { css } from 'styled-components'

const sizes = {
  sm: 768,
  md: 992,
  lg: 1272
}

export const CONTAINER_MAX_WIDTH = '1224px'

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
