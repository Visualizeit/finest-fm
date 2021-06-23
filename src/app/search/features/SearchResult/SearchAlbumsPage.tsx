import type { FC } from 'react'
import { VirtualPlayList } from '@app/common/virtual-play-list'
import { useMergePagesData } from '@app/shared/hooks'
import { searchAlbumsPage } from '@app/search/data'

interface SearchAlbumsPageProps {
    query: string
}

export const SearchAlbumsPage: FC<SearchAlbumsPageProps> = ({ query }) => {
    const { data, hasNextPage, fetchNextPage } = searchAlbumsPage((page) => ({
        q: query,
        count: 12,
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
