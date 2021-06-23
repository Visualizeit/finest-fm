import { useRequest } from './useRequest'

interface GetBannerParams {
    id: number
    banner_content_type: 0 | 1 | 2 | 3 | 4 | 9
    banner_title: string
    is_paid: 1 | 0 | -1
    sort_by: 'created_at' | 'update_at' | 'updated_at'
    sort: 'desc' | 'asc'
    page: number
    count: number
}

/**
 * @see https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=56#%E8%8E%B7%E5%8F%96%E5%96%9C%E9%A9%AC%E7%B3%BB%E7%BB%9F%E7%84%A6%E7%82%B9%E5%9B%BE
 * */
export const getBanner = (params: Partial<GetBannerParams> = {}) => {
    const result = useRequest<GetBannerResult>(
        'https://api.ximalaya.com/operation/xm_banners',
        params
    )

    return result
}

interface GetBannerResult {
        total_page: number //总共多少页
        total_count: number //总记录数
        current_page: number //当前页码
        banners: Banner[]
}
