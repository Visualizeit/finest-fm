import { cloud } from '@tarojs/taro'
import useSWR from 'swr'
import { getPublicParameters } from './getPublicParameters'

export interface UrlSignature {
    fullUrl: string
}

export const getUrlSignature = (params: any) => {
    const publicParmeters = getPublicParameters()

    const fetcher = (params) =>
        cloud.callFunction({
            name: 'createSignature',
            data: {
                ...publicParmeters,
                ...params,
            },
        })

    const swr = useSWR(params, fetcher)

    return swr
}
