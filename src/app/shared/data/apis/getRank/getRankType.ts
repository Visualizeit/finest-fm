import { useRequest } from '..'

//https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=56#%E8%8E%B7%E5%8F%96%E6%A6%9C%E5%8D%95%E5%88%97%E8%A1%A8
interface GetRankListParams {
    rank_type: 0 | 1
}

export const getRank = (params: GetRankListParams) => {
    const result = useRequest<RankList>(
        'https://api.ximalaya.com/operation/rank_by_type',
        params
    )

    return result
}

interface RankList {
    data: LevelOneRank[]
}
