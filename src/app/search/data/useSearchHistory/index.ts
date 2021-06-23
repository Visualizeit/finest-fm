import { getStorage, setStorage } from '@tarojs/taro'
import { useCallback } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export const SearchHistoryKEY = 'SearchHistory'

export const useSearchHistory = () => {
    const queryClient = useQueryClient()

    const { data } = useQuery(SearchHistoryKEY, () =>
        getStorage<string[]>({
            key: SearchHistoryKEY,
        })
    )

    const mutation = useMutation(
        (data: string[]) =>
            setStorage({
                key: SearchHistoryKEY,
                data: data,
            }),
        {
            onSuccess: (_data, variables) => {
                queryClient.setQueryData(SearchHistoryKEY, { data: variables })
            },
        }
    )

    const addSearchHistory = useCallback(
        (value: string) => {
            if (!data?.data.includes(value)) {
                mutation.mutate([value, ...(data?.data ?? [])])
            } else {
                const filterData = data.data.filter(
                    (history) => history !== value
                )

                mutation.mutate([value, ...filterData])
            }
        },
        [data]
    )

    const clearSearchHistory = useCallback(() => {
        mutation.mutate([])
    }, [])

    return {
        data,
        addSearchHistory,
        clearSearchHistory,
    }
}
