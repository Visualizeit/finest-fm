import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import { SearchHistoryItem } from '@app/search/components'
import { SearchContainer, useSearchHistory } from '@app/search/data'

export const SearchHistory: FC = () => {
    const { goSearchResultView } = SearchContainer.useContainer()

    const { data, clearSearchHistory } = useSearchHistory()

    return (
        <>
            <View className="flex items-center justify-between">
                <Text className="text-xl font-bold text-gray-800">
                    搜索历史
                </Text>

                <Text className="text-gray-600" onClick={clearSearchHistory}>
                    清除
                </Text>
            </View>
            <View className="flex flex-wrap">
                {(data?.data ?? []).map((history) => (
                    <SearchHistoryItem
                        onClick={() => goSearchResultView(history)}
                    >
                        {history}
                    </SearchHistoryItem>
                ))}
            </View>
        </>
    )
}
