import type { FC } from 'react'
import { useMemo } from 'react'
import { View, Image } from '@fower/taro'
import type { TouchEventFunction } from '@tarojs/components'

interface RecentBrowsingItemProps {
    itemData: Track
    index: number
    onClick?: TouchEventFunction
}

export const RecentBrowsingItem: FC<RecentBrowsingItemProps> = ({
    itemData,
    index,
    onClick,
}) => {
    const { cover_url_middle } = itemData

    return useMemo(
        () => (
            <View onClick={onClick} ml={index && 20} py5>
                <Image
                    className="shadow-lg rounded-xl"
                    src={cover_url_middle}
                    square={200}
                />
            </View>
        ),
        [itemData]
    )
}
