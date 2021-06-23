import type { FC, ReactNode } from 'react'
import { View } from '@fower/taro'
export * from './usePlayListProps'

interface PlayListProps {
    listData: (Album | Track)[]
    children: (data: Album | Track, index: number) => ReactNode
}

export const PlayList: FC<PlayListProps> = ({ children, listData }) => (
    <View className="grid grid-cols-1" rowGap={20}>
        {listData.map(children)}
    </View>
)
