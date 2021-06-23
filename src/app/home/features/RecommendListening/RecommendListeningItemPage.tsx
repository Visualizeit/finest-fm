import type { FC } from 'react'
import { useMemo } from 'react'
import { getColumnContentPage } from '@app/classify/data/apis'
import { VirtualPlayList } from '@app/common/virtual-play-list'

interface RecommendListeningItemPageProps {
    queryID: number
}
export const RecommendListeningItemPage: FC<RecommendListeningItemPageProps> = ({
    queryID,
}) => {
    const { data } = getColumnContentPage((page) => ({
        id: queryID,
        count: 20,
        page,
    }))

    const listData = useMemo(
        () =>
            data?.pages?.reduce<(Album | Track)[]>(
                (prev, current) => [...prev, ...current.values],
                []
            ) ?? [],
        [data]
    )

    return <VirtualPlayList listData={listData} />
}