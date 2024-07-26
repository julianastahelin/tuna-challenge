import { AxiosInstance } from 'axios'


export async function GET(api:AxiosInstance, endpoint:string) {
    const response = await api.get(endpoint)
    return response || []
}
