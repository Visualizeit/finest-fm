import type { FC } from 'react'
import { Image } from '@fower/taro'

interface AlbumProps {
    src: string
    size: number
}

export const AlbumCover: FC<AlbumProps> = ({ src, size }) => (
    <Image
        src={src}
        className="flex-none shadow-xl rounded-2xl"
        square={size}
    />
)
