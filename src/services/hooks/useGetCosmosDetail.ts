import { useQuery } from '@tanstack/react-query'
import { CosmosApi, ICosmosDetailResponse } from '../cosmos-api'

const useGetCosmosDetail = () => {
  const response = useQuery<ICosmosDetailResponse>({
    queryKey: ['cosmosDetail'],
    queryFn: CosmosApi.getDetail,
  })

  return response
}

export default useGetCosmosDetail
