import type { FC } from 'react'
import { View } from '@fower/taro'
import clsx from 'clsx'
import { ActionSheetContainer } from '..'
import { useAnimation } from '@app/shared/hooks'

export const BackDrop: FC = () => {
    const { isOpen, toggle } = ActionSheetContainer.useContainer()

    const [backdropAnimation] = useAnimation(
        {
            duration: 500,
            timingFunction: 'ease-in-out',
            default: {
                opacity: isOpen ? 0.6 : 0,
            },
        },
        [isOpen]
    )

    return (
        <View
            className={clsx(
                'fixed top-0 bg-black w-full',
                !isOpen && 'pointer-events-none'
            )}
            h="100%"
            catchMove
            animation={backdropAnimation}
            zIndex={1010}
            onClick={() => toggle()}
        />
    )
}
