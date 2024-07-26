export interface StateOrRegionBaseInfo {
    id: number
    sigla: string
    nome: string
}

export interface State extends StateOrRegionBaseInfo {
    regiao: StateOrRegionBaseInfo
}
