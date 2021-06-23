import { useEffect } from 'react'
import { getStorage, setStorage, showToast } from '@tarojs/taro'
import { to } from 'await-to-js'
import { useCallback } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export const PlayHistoryKEY = 'PlayHistory'

const maxItemCount = 100

export const usePlayHistory = () => {
    const queryClient = useQueryClient()

    const { data } = useQuery(PlayHistoryKEY, () =>
        getStorage<number[]>({
            key: PlayHistoryKEY,
        })
    )

    const mutation = useMutation(
        (data: number[]) =>
            setStorage({
                key: PlayHistoryKEY,
                data: data,
            }),
        {
            onSuccess: (_data, variables) => {
                queryClient.setQueryData(PlayHistoryKEY, { data: variables })
            },
        }
    )

    const addPlayHistoryItem = useCallback(
        (value: number) => {
            if (data?.data.length === maxItemCount) {
                popPlayHistoryItem()
            }

            if (!data?.data.includes(value)) {
                mutation.mutate([value, ...(data?.data ?? [])])
            } else {
                const newData = data.data.filter((id) => value !== id)

                mutation.mutate([value, ...newData])
            }
        },
        [data]
    )
    const popPlayHistoryItem = useCallback(() => {
        const [last, ...rest] = data?.data.reverse() ?? []

        mutation.mutate(rest)
    }, [data])

    const clearPlayHistory = useCallback(() => {
        mutation.mutate([])
    }, [])

    return {
        data,
        addPlayHistoryItem,
        clearPlayHistory,
    }
}

export const useInitPlayHistory = () => {
    useEffect(() => {
        ;(async () => {
            const [error, data] = await to(
                getStorage<number[]>({
                    key: PlayHistoryKEY,
                })
            )

            if (!data) {
                setStorage({
                    key: PlayHistoryKEY,
                    data: [],
                })
            }
        })()
    }, [])
}
