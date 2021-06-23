import { createContainer } from 'unstated-next'
import { getCurrentPages } from '@tarojs/taro'
import { Router, NavigateType } from 'tarojs-router-next'
import { useSearchHistory, useFocus, useInput } from '@app/search/data'

const searchContainer = () => {
    const {
        value: searchValue,
        setValue: setSearchValue,
        reset,
        inputListener,
    } = useInput({ wait: 500 })

    const { isFocus, focusListener } = useFocus()

    const { addSearchHistory } = useSearchHistory()

    const goSearchResultView = (value: string) => {
        const [currentPage] = getCurrentPages().slice(-1)

        const type =
            currentPage?.route === 'pages/search/index'
                ? NavigateType.navigateTo
                : NavigateType.redirectTo

        Router.toSearchResult({
            type,
            params: { query: value },
        }).then(() => addSearchHistory(value))
    }

    const handleConfirm = () => {
        const vaild = searchValue.trim().length

        if (vaild) {
            goSearchResultView(searchValue)
        } else {
            //TODO 输入不能为空
        }
    }

    return {
        searchValue,
        inputListener,
        isFocus,
        reset,
        goSearchResultView,
        focusListener,
        handleConfirm,
        setSearchValue,
    }
}

export const SearchContainer = createContainer(searchContainer)
