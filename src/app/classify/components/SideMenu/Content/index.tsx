import type { FC } from 'react'
import { View } from '@fower/taro'

export const Content: FC = ({ children }) => (
    <View className="flex-grow overflow-y-scroll">{children}</View>
)
