import type { FC } from 'react'
import { Swiper } from '@fower/taro'
import type { CommonEventFunction } from '@tarojs/components'
import type { SwiperProps } from '@tarojs/components/types/Swiper'

interface SliderListProps {
    onChange?: CommonEventFunction<SwiperProps.onChangeEventDetail>
}

const margin = '30px'

export const SliderList: FC<SliderListProps> = ({ children, onChange }) => {
    return (
        <Swiper
            circular
            onChange={onChange}
            previousMargin={margin}
            nextMargin={margin}
        >
            {children}
        </Swiper>
    )
}
