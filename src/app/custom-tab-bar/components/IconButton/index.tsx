import type { FC } from 'react'
import { View } from '@fower/taro'
import IconFont from '@app/custom/iconfont'
import type { IconNames } from '@app/custom/iconfont'
import { TouchEventFunction } from '@tarojs/components'

interface IconButtonProps {
    name: IconNames
    onClick: TouchEventFunction
}

export const IconButton: FC<IconButtonProps> = ({ onClick, name }) => (
    <View className="grid bg-white rounded-full bg-opacity-20 place-items-center" onClick={onClick} square={60}>
        <IconFont size={40} color="white" name={name} />
    </View>
)
