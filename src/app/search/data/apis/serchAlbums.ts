import { usePagingRequests } from '@app/shared/data/apis'
import type { UsePagingRequestsParams } from '@app/shared/data/apis'
import type { UseInfiniteQueryOptions } from 'react-query'

const baseUrl = 'https://api.ximalaya.com/search/albums'

interface SearchAlbumsParams {
    q: string //搜索关键词
    category_id?: number //分类ID。分类数据可以通过/categories/list获取
    calc_dimension?: number //返回结果排序维度：1-最火，2-最新，3-最多播放
    contains_paid?: boolean //返回值是否需要包含付费内容：true-包含，false-不包含。默认为false
    page?: number //返回第几页，从1开始，默认为1
    count?: number //每页大小，范围为[1,100]，默认为20
}

export const searchAlbumsPage = (
    params: UsePagingRequestsParams<SearchAlbumsParams>,
    config?: UseInfiniteQueryOptions<SearchAlbums>
) => {
    const result = usePagingRequests<SearchAlbums>(baseUrl, params, config)

    return result
}

interface SearchAlbums {
    total_page: number //总共多少页
    total_count: number //	总记录数
    current_page: number //	Int	当前页码
    category_id: number //	分类ID，为-1时表示不属于任何分类
    albums: Album[] //	搜索到的专辑结果页，每个专辑的字段请参考Album
}
