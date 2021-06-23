import type { FC } from 'react'
import { usePlayHistory } from '@app/common/player'
import { getBatchTracks } from '@app/mine/data'
import { useIds } from '@app/shared/hooks'
import { VirtualPlayList } from '@app/common/virtual-play-list'

export const RecentBrowsingPage: FC = () => {
    const { data: playHistory } = usePlayHistory()

    const ids = useIds(playHistory?.data ?? [])

    const { data: recentBrowsingData } = getBatchTracks(
        { ids },
        {
            enabled: !!ids.length,
        }
    )

    return <VirtualPlayList listData={recentBrowsingData?.tracks ?? []} />
}
