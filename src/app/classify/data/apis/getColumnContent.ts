import { usePagingRequests, useRequest } from '@app/shared/data/apis'
import type { UsePagingRequestsParams } from '@app/shared/data/apis'
import type { UseInfiniteQueryOptions, UseQueryOptions } from 'react-query'

interface GetColumnContentParams {
    id: number //听单ID
    sort_by?: 'natural' | 'updated_at' | 'play_count' //可选值：natural，updated_at，play_count，默认值natural。natural表示用户在官网为听单内容定义的顺序。
    sort?: 'desc' | 'asc' //desc-降序排列，asc-升序排列；默认值：asc。当sort_by为natural时，sort=asc表示按照定义顺序返回，sort=desc表示按照定义顺序倒序返回
    page?: number //返回第几页，从1开始，默认为1
    count?: number //每页大小，范围为[1,100]，默认为20
}

/**
 * @see  https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=56#%E5%88%86%E9%A1%B5%E8%8E%B7%E5%8F%96%E5%90%AC%E5%8D%95%E5%86%85%E5%AE%B9
 * */

const baseUrl = 'https://api.ximalaya.com/operation/browse_column_content'

export const getColumnContentPage = (
    params: UsePagingRequestsParams<GetColumnContentParams>,
    config?: UseInfiniteQueryOptions<ColumnContent>
) => {
    const result = usePagingRequests<ColumnContent>(baseUrl, params, config)

    return result
}

export const getColumnContent = (
    params: GetColumnContentParams,
    config: UseQueryOptions<ColumnContent>
) => {
    const result = useRequest<ColumnContent>(baseUrl, params, config)

    return result
}

interface ColumnContent {
    total_page: number //总页数
    total_count: number //总数
    current_page: number //	当前第几页
    content_type: -1 | -2 //听单内容类型：1-专辑，2-声音
    values: PaidAlbum[]
}
