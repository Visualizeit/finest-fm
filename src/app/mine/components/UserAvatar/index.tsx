import type { FC } from 'react'
import { View } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'

interface UserAvatarProps {
    src: string
    onClick?: TouchEventFunction
}

export const UserAvatar: FC<UserAvatarProps> = ({ src, onClick }) => (
    <View
        className="rounded-full"
        onClick={onClick}
        square={240}
        css={{
            background: src,
        }}
    />
)
