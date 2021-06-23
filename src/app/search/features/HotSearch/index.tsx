import type { FC } from 'react'
import { View, Text } from '@fower/taro'
import { HotSearchItem } from '@app/search/components'
import { getHotWords, SearchContainer } from '@app/search/data'

export const HotSearch: FC = () => {
    const { goSearchResultView } = SearchContainer.useContainer()

    const { data } = getHotWords({
        top: 5,
    })

    return (
        <>
            <Text className="text-xl font-bold text-gray-800">热门搜索</Text>
            <View className="grid grid-cols-1" gap={30}>
                {(data ?? []).map(({ search_word }, index) => (
                    <HotSearchItem
                        index={index + 1}
                        onClick={() => goSearchResultView(search_word)}
                    >
                        {search_word}
                    </HotSearchItem>
                ))}
            </View>
        </>
    )
}
