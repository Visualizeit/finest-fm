import { useMemo } from 'react'
import { SearchContainer, getSuggestWords } from '@app/search/data'

export const suggestWordsListContainer = () => {
    const { searchValue, isFocus } = SearchContainer.useContainer()

    const { data } = getSuggestWords(
        { q: searchValue },
        searchValue.trim() !== ''
    )

    const isSuggesting = useMemo(
        () =>
            isFocus && searchValue.trim() !== '' && data?.keywords.length,
        [isFocus, searchValue, data]
    )

    return { data: data?.keywords ?? [], isSuggesting }
}
