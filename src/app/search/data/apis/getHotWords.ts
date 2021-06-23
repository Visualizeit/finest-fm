import { useRequest } from '@app/shared/data/apis'

interface GetHotWordsParams {
    top: number //获取前top长度的热搜词。（1<=top<=20：目前top只支持最多20个）
    category_id?: number //分类ID
}

/**
 * @see  https://open.ximalaya.com/doc/detailApi?categoryId=11&articleId=26#%E8%8E%B7%E5%8F%96%E7%83%AD%E6%90%9C%E8%AF%8D
 * */
export const getHotWords = (params: GetHotWordsParams) => {
    const result = useRequest<HotWords>(
        'https://api.ximalaya.com/search/hot_words',
        params
    )

    return result
}

type HotWords = {
    search_word: string
}[]
