import { useRequest } from '@app/shared/data/apis'

interface GetSuggestWordsParams {
    q: string
}

export const getSuggestWords = (
    params: GetSuggestWordsParams,
    condition: boolean
) => {
    const result = useRequest<SuggestWords>(
        'https://api.ximalaya.com/search/suggest_words',
        params,
        {
            enabled: condition,
        }
    )

    return result
}

interface SuggestWords {
    album_total_count: number //搜索自动提示的专辑总数
    albums: SearchSuggestAlbum[] //搜索自动提示的专辑列表
    keyword_total_count: number //搜索自动提示词总数
    keywords: SearchSuggestKeyword[] //搜索自动提示词列表，每个搜索提示词的字段请参考
}
