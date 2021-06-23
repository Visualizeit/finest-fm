import type { FC } from 'react'
import { colors } from '@fower/colors'
import { View, Text } from '@fower/taro'


import IconFont, { IconNames } from '@app/custom/iconfont'
import { useAnimation } from '@app/shared/hooks'

import { TabContainer } from './TabContainer'

export * from './TabContainer'

export interface TabItemData {
    icon: IconNames
    text: string
    color: string
    url: string
}

interface TabProps {}

export const Tab: FC<TabProps> = () => {
    const {
        id,
        isCurrent,
        goTabPage,
        itemData: { color, icon, text,  },
    } = TabContainer.useContainer()

    const [iconAnimation] = useAnimation(
        {
            duration: 500,
            timingFunction: 'ease-out',
            default: {
                scale: [isCurrent ? 0.8 : 1],
                translateX: isCurrent ? 0 : '100%',
            },
        },
        [isCurrent]
    )

    const [textAnimation] = useAnimation(
        {
            duration: 500,
            timingFunction: 'ease-out',
            default: {
                opacity: isCurrent ? 1 : 0,
                scale: [isCurrent ? 1 : 0.3],
            },
        },
        [isCurrent]
    )

    return (
        <View
            className="flex items-center justify-center "
            px3
            py4
            id={id}
            onClick={goTabPage}
        >
            <View animation={iconAnimation}>
                <IconFont
                    name={icon}
                    size={40}
                    color={isCurrent ? colors.white : color}
                />
            </View>
            <View ml2 animation={textAnimation}>
                <Text white>{text}</Text>
            </View>
        </View>
    )
}
