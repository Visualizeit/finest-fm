import type { FC } from 'react'
import { View } from '@fower/taro'
import { SlideTabsContainer } from '@app/custom-tab-bar/components'

import './indicator.css'
interface IndicatorProps {}

export const Indicator: FC<IndicatorProps> = () => {
    const { indicatorAnimation } = SlideTabsContainer.useContainer()

    return (
        <View
            className="rounded-full colorfulShadow"
            animation={indicatorAnimation}
        />
    )
}
