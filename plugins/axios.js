export default function ({ app: { $axios, $cookies } }) {
  $axios.defaults.timeout = 600000
  // 拦截
}
