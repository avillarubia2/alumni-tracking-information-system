import http from './http'

export async function getAccounts() {
    const { data } = await http.get('account/all')
    return data
}

export async function getAlumni() {
    const { data } = await http.get('account/alumni/all')
    return data
}