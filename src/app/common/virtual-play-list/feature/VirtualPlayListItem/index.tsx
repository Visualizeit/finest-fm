import type { FC, CSSProperties } from 'react'
import { useMemo } from 'react'
import { View } from '@fower/taro'
import { PlayListItem } from '@app/shared/components'
import { useVirtualPlayListItemProps } from './useVirtualPlayListItemProps'

interface VirtualPlayListItemProps {
    id: string
    index: number
    style: CSSProperties
    data: (Album | Track)[]
    isScrolling?: boolean
}

export const VirtualPlayListItem: FC<VirtualPlayListItemProps> = ({
    data,
    index,
    style,
}) => {
    const itemData = useMemo(() => data[index], [data, index])

    const playListItemProps = useVirtualPlayListItemProps(itemData)

    return (
        <View style={style} mx10>
            <PlayListItem {...playListItemProps} />
        </View>
    )
}
