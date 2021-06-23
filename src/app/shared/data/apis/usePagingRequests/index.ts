import { getXMPInstance } from '@app/shared/plugin/xmly'
import { UseInfiniteQueryOptions, QueryFunction } from 'react-query'
import { useInfiniteQuery } from 'react-query'

export type UsePagingRequestsParams<T> = (pageParam: number) => T

export const usePagingRequests = <
    Data extends {
        total_page: number
        total_count: number
        current_page: number
    },
    Error = unknown
>(
    baseUrl: string,
    params: (pageParam: number) => Record<string, any>,
    config: UseInfiniteQueryOptions<Data, any, any, any> = {
        getNextPageParam: (lastPage, _page) => {
            const remainingPages = !!(
                lastPage.total_page - lastPage.current_page
            )

            return remainingPages && lastPage.current_page + 1
        },
    }
) => {
    const { xmly } = getXMPInstance()

    const fetcher: QueryFunction<Data> = async ({ pageParam = 1 }) => {
        const _params = params(pageParam)

        const { data } = await xmly.get(baseUrl, _params)

        return data
    }

    const query = useInfiniteQuery<Data>([baseUrl, params], fetcher, config)

    return query
}
