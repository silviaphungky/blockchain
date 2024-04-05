import { useQuery } from '@tanstack/react-query'
import { CosmosApi, IBlockResponse } from '../cosmos-api'

const useGetCosmosLatestBlocks = () => {
  const response = useQuery<IBlockResponse>({
    queryKey: ['cosmosLatestBlock'],
    queryFn: CosmosApi.getLatestBlocks,
    refetchInterval: 1000,
  })

  return response
}

export default useGetCosmosLatestBlocks
