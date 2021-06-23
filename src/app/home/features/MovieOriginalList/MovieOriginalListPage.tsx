import type { FC } from 'react'
import { getRankContentPage } from '@app/shared/data/apis'
import { VirtualPlayList } from '@app/common/virtual-play-list'
import { movieOriginalListID } from './MovieOriginalListContainer'
import { useMergePagesData } from '@app/shared/hooks'

export const MovieOriginalListPage: FC = () => {
    const { data, hasNextPage, fetchNextPage } = getRankContentPage((page) => ({
        count: 12,
        id: movieOriginalListID,
        page,
    }))

    const listData = useMergePagesData(data?.pages, (prev, current) => [
        ...prev,
        ...current.albums,
    ])

    return (
        <VirtualPlayList
            listData={listData}
            hasNext={hasNextPage}
            onReachBottom={() => {
                fetchNextPage()
            }}
        />
    )
}
