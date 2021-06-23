import type { FC } from 'react'
import { View } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'

interface ControlButtonProps {
    onClick: TouchEventFunction
    size?: number
    color?: string
    hoverClass?: string
}

export const ControlButton: FC<ControlButtonProps> = ({
    children,
    onClick,
    size,
    hoverClass,
    color,
}) => (
    <View
        className="grid rounded-full place-items-center"
        hoverClass={hoverClass}
        bg={color}
        square={size}
        // p5
        {...{ onClick }}
    >
        {children}
    </View>
)
