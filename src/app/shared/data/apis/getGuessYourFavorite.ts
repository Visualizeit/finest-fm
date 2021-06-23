import { useRequest } from './useRequest'

interface GetGuessYourFavoriteParams {
    device_type: 1 | 2 | 3 | 4
    like_count?: number
    contains_paid?: boolean
}

/**
 * @see  https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=28#%E8%8E%B7%E5%8F%96%E7%8C%9C%E4%BD%A0%E5%96%9C%E6%AC%A2%E4%B8%93%E8%BE%91%E4%BF%A1%E6%81%AF
 * */
export const getGuessYourFavorite = (params: GetGuessYourFavoriteParams) => {
    const result = useRequest<GuessYourFavorite>(
        'https://api.ximalaya.com/v2/albums/guess_like',
        params
    )

    return result
}

type GuessYourFavorite = Album[]
