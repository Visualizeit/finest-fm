import { useQuery } from 'react-query'
import type { UseQueryOptions } from 'react-query'
import { getXMPInstance } from '@app/shared/plugin/xmly'

export const useRequest = <Data, Error = unknown>(
    baseUrl: string,
    params: Record<string, any>,
    config?: UseQueryOptions<Data, any, any, any>
) => {
    const { xmly } = getXMPInstance()

    const fetcher = async () => {
        const { data } = await xmly.get(baseUrl, params)

        return data
    }

    const query = useQuery<Data>([baseUrl, params], fetcher, config)

    return query
}
