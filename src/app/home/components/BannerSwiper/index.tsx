import type { FC } from 'react'
import { Swiper } from '@tarojs/components'
import type { CommonEventFunction } from '@tarojs/components'
import type { SwiperProps } from '@tarojs/components/types/Swiper'

interface BannerSwiperProps {
    onChange?: CommonEventFunction<SwiperProps.onChangeEventDetail>
}

// const margin = '35px'
const margin = '30px'

export const BannerSwiper: FC<BannerSwiperProps> = ({ children, onChange }) => (
    <Swiper
        // indicatorDots
        autoplay
        onChange={onChange}
        circular
        previousMargin={margin}
        nextMargin={margin}
    >
        {children}
    </Swiper>
)
