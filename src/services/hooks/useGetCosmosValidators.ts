import { useQuery } from '@tanstack/react-query'
import { CosmosApi, IValidatorResponse } from '../cosmos-api'

const useGetCosmosValidators = ({
  status,
}: {
  status?:
    | 'BOND_STATUS_BONDED'
    | 'BOND_STATUS_UNBONDED'
    | 'BOND_STATUS_UNBONDING'
    | 'BOND_STATUS_UNSPECIFIED'
}) => {
  const response = useQuery<{ validators: Array<IValidatorResponse> }>({
    queryKey: ['cosmosValidators', status],
    queryFn: () => CosmosApi.getValidators({ status }),
  })

  return response
}

export default useGetCosmosValidators
