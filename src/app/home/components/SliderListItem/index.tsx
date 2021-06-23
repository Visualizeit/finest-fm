import type { FC } from 'react'
import { SwiperItem, Image, View } from '@fower/taro'
import clsx from 'clsx'

interface SliderListItemProps {
    isCurrent: boolean
    src: string
}

export const SliderListItem: FC<SliderListItemProps> = ({ isCurrent, src }) => {
    return (
        <SwiperItem>
            <View
                className={clsx(
                    'grid w-full place-items-center transform transition-transform duration-300',
                    isCurrent ? 'scale-110' : 'scale-90'
                )}
                h="100%"
            >
                <Image
                    className="rounded-xl"
                    css={{
                        transform: 'perspective(200px) rotateY(40deg)',
                    }}
                    square={192}
                    src={src}
                />
            </View>
        </SwiperItem>
    )
}
