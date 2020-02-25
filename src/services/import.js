import http from './http'

export async function getImports() {
  const { data } = await http.get('import/get/all')
  return data
}