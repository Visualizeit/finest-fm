import { getStorage, setStorage } from '@tarojs/taro'
import to from 'await-to-js'
import { useCallback, useEffect } from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query'

export const PlayListCacheKey = 'PlayList'

export const usePlayListCache = () => {
    const queryClient = useQueryClient()

    const { data } = useQuery(PlayListCacheKey, () =>
        getStorage<number[]>({
            key: PlayListCacheKey,
        })
    )

    const mutation = useMutation(
        (data: number[]) =>
            setStorage({
                key: PlayListCacheKey,
                data: data,
            }),
        {
            onSuccess: (_data, variables) => {
                queryClient.setQueryData(PlayListCacheKey, { data: variables })
            },
        }
    )

    const updatePlayListCache = useCallback((value: number[]) => {
        mutation.mutate(value)
    }, [])

    return {
        data,
        updatePlayListCache,
    }
}

export const useInitPlayListCache = () => {
    useEffect(() => {
        ;(async () => {
            const [error, data] = await to(
                getStorage<number[]>({
                    key: PlayListCacheKey,
                })
            )

            if (!data) {
                setStorage({
                    key: PlayListCacheKey,
                    data: [],
                })
            }
        })()
    }, [])
}
