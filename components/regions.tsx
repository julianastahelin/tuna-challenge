import { State, StateOrRegionBaseInfo } from '@/types/states'


interface RegionsProps {
    regions: StateOrRegionBaseInfo[]
    states: State[]
}

export function Regions({ regions, states }: RegionsProps) {
    return (
        <>
            {
                regions.map((region) => (
                    <div key={region.id} className='border-[1px] border-border-primary rounded-[20px] p-[40px] shadow-lg flex flex-col items-center w-64 text-wrap'>
                        <p className='font-medium text-xl pb-[10px]'>{region.nome} - {region.sigla}</p>
                        <ul>
                            {states.filter(state => state.regiao.id === region.id).map(state => (
                                <li key={state.nome} className='text-secondary-foreground'>
                                    {state.nome} - {state.sigla}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </>
    )
}
