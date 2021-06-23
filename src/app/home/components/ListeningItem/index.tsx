import type { FC } from 'react'
import { View, Text, Image } from '@fower/taro'

import { TouchEventFunction } from '@tarojs/components'

interface ListeningItemProps {
    itemData: Column
    index: number
    onClick?: TouchEventFunction
}

export const ListeningItem: FC<ListeningItemProps> = ({
    itemData: { cover_url_large, title },
    index,
    onClick,
}) => (
    <View ml={index && 30} onClick={onClick}>
        <Image
            className="rounded-tl-2xl rounded-br-2xl"
            mode="widthFix"
            maxH="89px"
            w="50vw"
            src={cover_url_large}
        />
        <Text
            className="text-xs font-semibold"
            css={{
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': '2',
            }}
        >
            {title}
        </Text>
    </View>
)
