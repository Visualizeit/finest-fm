import { useRequest } from '@app/shared/data/apis'

interface searchAllParams {
    q: string //搜索关键词
    page?: number //返回第几页，从1开始，默认为1
    count?: number //每页大小，范围为[1,100]，默认为20
}

/**
 * @see  https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=26#%E6%90%9C%E7%B4%A2%E5%85%A8%E9%83%A8
 * */

export const searchAll = (params: searchAllParams) => {
    const result = useRequest<SearchAll>(
        'https://api.ximalaya.com/search/all',
        params
    )

    return result
}

interface SearchAll {
    album_list: SearchAlbums
    radio_list: SearchRadio
    track_list: SearchTracks
}
