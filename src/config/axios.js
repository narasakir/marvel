import * as nativeAxios from 'axios'

// import { ERROR_TIMEOUT } from 'constants/error'

// import { handleErrorStatus } from 'utils/error'
// import { getHeaderToken } from 'utils/token'

const createAxios = () => {
  const axiosInstance = nativeAxios?.create
    ? nativeAxios.create({
      baseURL: '/api'
    })
    : nativeAxios

  if (!(axiosInstance || {}).defaults) return axiosInstance
  // axiosInstance.defaults.headers.common.Authorization = getHeaderToken()

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
        // throw new Error(ERROR_TIMEOUT)
      }

      // handleErrorStatus(error.response.status)
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

export default createAxios()
