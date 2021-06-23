import type { FC } from 'react'
import { useMemo } from 'react'
import { getColumnContentPage } from '@app/classify/data/apis'
import { VirtualPlayList } from '@app/common/virtual-play-list'

interface ClassifyContentItemPageProps {
    queryID: number
}
export const ClassifyContentItemPage: FC<ClassifyContentItemPageProps> = ({
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
