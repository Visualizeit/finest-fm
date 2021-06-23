import type { FC } from 'react'
import { getRankContentPage } from '@app/shared/data/apis'
import { VirtualPlayList } from '@app/common/virtual-play-list'
import { newMusicProductsID } from './NewMusicProductsListContainer'
import { useMergePagesData } from '@app/shared/hooks'

export const NewMusicProductsListPage: FC = () => {
    const { data, hasNextPage, fetchNextPage } = getRankContentPage((page) => ({
        count: 12,
        id: newMusicProductsID,
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
