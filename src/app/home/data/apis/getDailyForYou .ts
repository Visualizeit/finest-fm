import { useRequest } from '@app/shared/data/apis'

interface getDailyForYouParams {
    page?: number //返回第几页，从1开始，默认为1
    count?: number //每页大小，范围为[1,100]，默认为20
}

/**
 * @see https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=56#%E6%AF%8F%E6%97%A5%E6%8E%A8%E8%8D%90%E4%B8%93%E8%BE%91
 * */
export const getDailyForYou = (params: getDailyForYouParams = {}) => {
    const result = useRequest<DailyForYou>(
        'https://api.ximalaya.com/operation/recommend_albums',
        params
    )

    return result
}

interface DailyForYou {
    otal_page: number //总共多少页
    total_count: number //总记录数
    current_page: number //	当前页码
    albums: PaidAlbum[]
}
