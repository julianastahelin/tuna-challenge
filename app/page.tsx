import { Regions } from '@/components/regions'
import { getTunaStatesBrazil } from '@/service/ibge'


export default async function Home() {

  const states = await getTunaStatesBrazil()
  const regions = Array.from(new Map(states.data?.map(state => [state.regiao.id, state.regiao])).values())
  const statesOrdered = states.data?.sort((a, b) => {
    if (a.nome > b.nome) return 1
    if (a.nome < b.nome) return -1
    return 0
  })

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='flex flex-col place-items-start'>
        <h2 className='font-bold text-4xl'>Atendemos clientes em todo o Brasil</h2>
        <div className='w-28 h-3 mt-2 bg-primary-accent rounded-full' />
        <div className='flex flex-wrap gap-[30px] justify-start pt-4 md:pt-6'>
          {states.data && statesOrdered
            ? <Regions regions={regions} states={statesOrdered} />
            : <p>Ocorreu um erro ao buscar os estados atendidos.</p>
          }
        </div>
      </section>
    </main>
  )
}
