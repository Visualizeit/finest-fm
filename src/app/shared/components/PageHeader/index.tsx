import { FC } from '@tarojs/taro'
import { Text, View } from '@fower/taro'
import type { FowerColor } from '@fower/types'
import { useNavigationBarRect } from '@app/shared/hooks'

interface PageHeaderProps {
    titleColor: FowerColor
    children: string
}

export const PageHeader: FC<PageHeaderProps> = ({ titleColor, children }) => {
    const { statusBarHeight } = useNavigationBarRect()

    return (
        <View pt={statusBarHeight + 'px'}>
            <Text className="text-3xl font-bold " color={titleColor} ml8>
                {children}
            </Text>
        </View>
    )
}
