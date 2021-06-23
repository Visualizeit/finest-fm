import { useCallback, useMemo } from 'react'

import { getBatchTracks } from '@app/mine/data'
import { usePlayControl, usePlayHistory } from '@app/common/player'
import { useIds, usePageShow } from '@app/shared/hooks'

const showCount = 5

export const recentBrowsingContainer = () => {
    const { data: playHistory, clearPlayHistory } = usePlayHistory()

    const isOverstep = useMemo(
        () => (playHistory?.data.length ?? 0) > showCount,
        [playHistory]
    )

    const slicePlayHistory = useMemo(() => {
        return isOverstep ? playHistory?.data.slice(0, 6) : playHistory?.data
    }, [isOverstep, playHistory])

    const ids = useIds(slicePlayHistory ?? [])

    const isPageShow = usePageShow()

    const { data: recentBrowsingData } = getBatchTracks(
        { ids },
        {
            enabled: !!ids && isPageShow === true,
        }
    )

    const { selectPlay } = usePlayControl()

    const playRecentBrowsing = useCallback(
        (id: number) => {
            playHistory?.data && selectPlay(playHistory.data, id)
        },
        [playHistory?.data]
    )

    return {
        isOverstep,
        playRecentBrowsing,
        clearPlayHistory,
        recentBrowsingData: recentBrowsingData?.tracks ?? [],
    }
}
