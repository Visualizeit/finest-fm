import type { FC } from 'react'
import { View } from '@fower/taro'
import { SuggestWordsItem } from '@app/search/components'
import { useAnimation } from '@app/shared/hooks'
import { SearchContainer } from '@app/search/data'
import { suggestWordsListContainer } from './SuggestWordsListContainer'

export const SuggestWordsList: FC = () => {
    const { goSearchResultView } = SearchContainer.useContainer()
    const { data, isSuggesting } = suggestWordsListContainer()

    const [animation] = useAnimation(
        {
            duration: 200,
            timingFunction: 'ease-in-out',
            transformOrigin: '50% 0 0',
            default: {
                scaleY: isSuggesting ? 1 : 0,
            },
        },
        [isSuggesting]
    )

    return (
        <View
            className="fixed grid grid-cols-1 bg-gray-100 rounded-lg shadow-2xl"
            w="70%"
            p5={!!data.length}
            mt5
            animation={animation}
            gap={20}
        >
            {data.map(({ keyword }) => (
                <SuggestWordsItem onClick={() => goSearchResultView(keyword)}>
                    {keyword}
                </SuggestWordsItem>
            ))}
        </View>
    )
}
