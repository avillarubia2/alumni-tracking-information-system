import http from './http'

export async function register(account) {
  const { data } = await http.post('register/', account)
  const { code, message } = data
  if (code === 200)
    localStorage.setItem('atis-login-token', message)

  return data
}

export async function importAccount(account) {
  const { data } = await http.post('import/', account)
  return data
}
