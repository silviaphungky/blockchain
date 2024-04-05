import { useQuery } from '@tanstack/react-query'
import { CosmosApi, IPoolResponse } from '../cosmos-api'

const useGetCosmosPool = () => {
  const response = useQuery<{ pool: IPoolResponse }>({
    queryKey: ['cosmosPool'],
    queryFn: CosmosApi.getPool,
  })

  return response
}

export default useGetCosmosPool
