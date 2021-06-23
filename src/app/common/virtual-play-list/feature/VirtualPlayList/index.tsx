import type { FC } from 'react'
import { createContext } from 'react'
import VirtualList from '@tarojs/components/virtual-list'
import { useVirtualPlayList } from '../../data'
import { VirtualPlayListItem } from '../VirtualPlayListItem'
import { usePlayListProps } from '@app/shared/components'

interface VirtualPlayListProps {
    listData: (Album | Track)[]
    hasNext?: boolean | undefined
    onReachBottom?: () => void
}

export const PlayListContext = createContext<number[]>([])

export const VirtualPlayList: FC<VirtualPlayListProps> = ({
    listData,
    hasNext = false,
    onReachBottom,
}) => {
    const { listConfig } = useVirtualPlayList(listData, hasNext, () => {
        onReachBottom && onReachBottom()
    })

    const playList = usePlayListProps(listData)
 
    return (
        <PlayListContext.Provider value={playList}>
            {/* @ts-ignore */}
            <VirtualList {...listConfig}>{VirtualPlayListItem}</VirtualList>
        </PlayListContext.Provider>
    )
}
