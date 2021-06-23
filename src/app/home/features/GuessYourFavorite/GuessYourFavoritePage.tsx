import type { FC } from 'react'
import { getGuessYourFavorite } from '@app/shared/data/apis'
import { VirtualPlayList } from '@app/common/virtual-play-list'

export const GuessYourFavoritePage: FC = () => {
    const { data } = getGuessYourFavorite({
        device_type: 3,
        like_count: 50,
        contains_paid: false,
    })

    const listData = data ?? []

    return <VirtualPlayList listData={listData} />
}
