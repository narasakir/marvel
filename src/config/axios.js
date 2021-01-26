import * as nativeAxios from 'axios'

const createAxios = () => {
  const axiosInstance = nativeAxios?.create
    ? nativeAxios.create({
      baseURL: 'https://gateway.marvel.com/v1/public'
    })
    : nativeAxios

  if (!(axiosInstance || {}).defaults) return axiosInstance

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
        // throw new Error(ERROR_TIMEOUT)
      }
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

export default createAxios()
