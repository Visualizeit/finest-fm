import { FC } from 'react'
import { VirtualPlayList } from '@app/common/virtual-play-list'
import { searchTracksPage } from '@app/search/data'
import { useMergePagesData } from '@app/shared/hooks'

interface SearchTracksPageProps {
    query: string
}

export const SearchTracksPage: FC<SearchTracksPageProps> = ({ query }) => {
    const { data, hasNextPage, fetchNextPage } = searchTracksPage((page) => ({
        q: query,
        count: 12,
        page,
    }))

    const listData = useMergePagesData(data?.pages, (prev, current) => [
        ...prev,
        ...current.tracks,
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
