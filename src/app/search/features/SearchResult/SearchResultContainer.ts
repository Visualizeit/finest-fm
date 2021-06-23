import { useEffect } from 'react'
import { SearchContainer, searchAll } from '@app/search/data'
import { Router } from 'tarojs-router-next'
import type { Params } from '@src/pages/search-result/route.config'

export const searchResultContainer = () => {
    const { query } = Router.getParams() as Params

    useSearchResultEffect(query)

    const { data } = searchAll({
        q: query,
    })

    return {
        data,
        query,
    }
}

const useSearchResultEffect = (query: string) => {
    const { setSearchValue, reset } = SearchContainer.useContainer()

    useEffect(() => {
        setSearchValue(query)
        return () => reset()
    }, [])
}
