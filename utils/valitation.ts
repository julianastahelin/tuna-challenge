import { State, StateOrRegionBaseInfo } from '@/types/states'


function isStateOrRegionBaseInfo(data:any): data is StateOrRegionBaseInfo {
    return (
        typeof data.id == 'number' &&
        typeof data.sigla == 'string' &&
        typeof data.nome == 'string'
    )
}

function isState(data:any): data is State {
    return (
        isStateOrRegionBaseInfo(data.regiao) &&
        isStateOrRegionBaseInfo(data)
    )
}

export function isStatesArray(data:any): data is State[] {
    return (
        Array.isArray(data) && data.every(isState)
    )
}
