import { createContainer } from 'unstated-next'
import { getBanner } from '@app/shared/data/apis'
import { useCallback, useState } from 'react'

export const bannerContainer = () => {
    const { data } = getBanner({
        count: 10,
    })

    const [active, setActive] = useState(0)

    const onChange = useCallback(({ detail: { current } }) => {
        setActive(current)
    }, [])

    return {
        data: data?.banners ?? [],
        active,
        onChange,
    }
}

export const BannerContainer = createContainer(bannerContainer)
