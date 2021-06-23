import type { FC } from 'react'
import { Image, SwiperItem } from '@fower/taro'

interface SwiperImageProps {
    src: string
    isCurrent: boolean
    width: string | number
}

export const SwiperImage: FC<SwiperImageProps> = ({
    src,
    width,
    isCurrent,
}) => {
    return (
        <SwiperItem className="flex items-center justify-center">
            <Image
                mode="widthFix"
                className="transition-transform duration-300 rounded-2xl"
                w={width}
                src={src}
                css={{
                    transform: `scale(${isCurrent ? 1.05 : 0.9})`,
                }}
            />
        </SwiperItem>
    )
}
