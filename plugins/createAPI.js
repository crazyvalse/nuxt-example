export default function ({ app: { $axios } }, inject) {
  const createAPI = (url, method, config, vconfig = {}) => {
    config = config || {}
    return $axios({
      url,
      method,
      ...config,
      vconfig,
    })
  }
  inject('APIS', {})
  inject('createAPI', createAPI)
}
