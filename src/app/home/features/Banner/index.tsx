import type { FC } from 'react'
import { bannerContainer } from './BannerContainer'
import { BannerSwiper, SwiperImage } from '@app/home/components'

export const Banner: FC = () => {
    const { data, active, onChange } = bannerContainer()

    return (
        <BannerSwiper onChange={onChange}>
            {data.map(({ banner_cover_url }, index) => (
                <SwiperImage
                    width="95%"
                    isCurrent={active === index}
                    src={banner_cover_url}
                />
            ))}
        </BannerSwiper>
    )
}
