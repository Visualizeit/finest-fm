import { usePagingRequests, UsePagingRequestsParams, useRequest } from '@app/shared/data/apis'
import type { UseInfiniteQueryOptions, UseQueryOptions } from 'react-query'

interface GetBatchTracksParams {
    ids: string //以英文逗号分隔的声音ID，一次最多传100个，超出部分ID会被忽略
    only_play_info?: boolean //否	可选参数，为true时只返回音频播放地址
}

/**
 * @see  https://open.ximalaya.com/doc/detailApi?categoryId=10&articleId=6#%E6%89%B9%E9%87%8F%E8%8E%B7%E5%8F%96%E5%A3%B0%E9%9F%B3%E4%BF%A1%E6%81%AF
 * */

const baseUrl = 'https://api.ximalaya.com/tracks/get_batch'

export const getBatchTracks = (
    params: GetBatchTracksParams,
    config: UseQueryOptions<BatchTracks>
) => {
    const result = useRequest<BatchTracks>(baseUrl, params, config)

    return result
}

interface BatchTracks {
    tracks: Track[]
}

interface GetBatchTracksPageParams{

}

export const getBatchTracksPage=(
    params: UsePagingRequestsParams<GetBatchTracksPageParams>,
    config: UseInfiniteQueryOptions<BatchTracks>
)=>{
    const result=usePagingRequests<BatchTracks>(baseUrl, params,config)

    return result
}