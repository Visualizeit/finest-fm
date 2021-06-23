import { useRequest, usePagingRequests } from '..'
import type { UseInfiniteQueryOptions } from 'react-query'
import type { UsePagingRequestsParams } from '..'

interface GetRankContentParams {
    id: number
    page: number
    count: number
}

const baseUrl = 'https://api.ximalaya.com/v2/operation/browse_rank_albums'

/**
 * @see https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=56#%E5%88%86%E9%A1%B5%E8%8E%B7%E5%8F%96%E6%A6%9C%E5%8D%95%E5%86%85%E5%AE%B9
 * */
export const getRankContent = (params: GetRankContentParams) => {
    const result = useRequest<RankContent>(baseUrl, params)

    return result
}

export const getRankContentPage = (
    params: UsePagingRequestsParams<GetRankContentParams>,
    config?: UseInfiniteQueryOptions<RankContent>
) => {
    const result = usePagingRequests<RankContent>(baseUrl, params, config)

    return result
}

interface RankContent {
    total_page: number //总共多少页
    total_count: number //总记录数
    current_page: number //	Int	当前页码
    albums: Album[]
}
