import axios, { AxiosError } from 'axios'

import { isStatesArray } from '@/utils/valitation'
import { State } from '@/types/states'

import { GET } from './api'


const IbgeAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_IBGE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

interface StatesResponse {
    data?: State[]
    error?: string
}

export async function getTunaStatesBrazil(): Promise<StatesResponse> {
    try {
        const response = await GET(IbgeAPI, '/estados')
        if (!isStatesArray(response.data)) {
            console.log('Invalid data format')
            return { error: 'Invalid data format.' }
        }
        return { data: response.data }
    } catch (e) {
        console.log(e)
        return { error: 'Ocorreu um erro ao buscar os estados.' }
    }
}
