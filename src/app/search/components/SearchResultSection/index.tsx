import type { ReactNode } from 'react'
import { View } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'
import { SearchResultSectionTitle } from '@app/search/components'
import { RecommendTitle } from '@app/shared/components'

// type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

interface SearchResulSectionProps<T> {
    title: string
    data: T[]
    children: (value: T, index: number) => ReactNode
    onClick: TouchEventFunction
}

export const SearchResultSection = <T extends {}>({
    title,
    onClick,
    data,
    children,
}: SearchResulSectionProps<T>) => (
    <View className="flex flex-col">
        <SearchResultSectionTitle onClick={onClick}>
            {title}
        </SearchResultSectionTitle>
        <View className="flex flex-grow overflow-scroll">
            {data.map(children)}
        </View>
    </View>
)
