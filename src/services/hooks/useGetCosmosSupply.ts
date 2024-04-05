import { useQuery } from '@tanstack/react-query'
import { CosmosApi } from '../cosmos-api'

const useGetCosmosSupply = () => {
  const response = useQuery<{
    amount: string
    denom: string
  }>({
    queryKey: ['cosmosSupply'],
    queryFn: CosmosApi.getSupply,
  })

  return response
}

export default useGetCosmosSupply
