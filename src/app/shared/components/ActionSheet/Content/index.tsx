import { FC, useMemo } from 'react'
import { View } from '@fower/taro'
import clsx from 'clsx'
import { ActionSheetContainer } from '..'
import { useAnimation } from '@app/shared/hooks'

export const Content: FC = () => {
    const { isOpen, children, height, hasRounded } =
        ActionSheetContainer.useContainer()

    const sheetHeight = useMemo(
        () => (isNaN(+height) ? height : height + 'px'),
        [height]
    )

    const [contentAnimation] = useAnimation(
        {
            duration: 500,
            timingFunction: 'ease-in-out',
            default: {
                translateY: isOpen ? `calc(100vh - ${sheetHeight})` : '100vh',
            },
        },
        [isOpen]
    )

    return (
        <View
            className={clsx(
                'fixed top-0 left-0 w-full bg-white',
                hasRounded && 'rounded-t-2xl'
            )}
            catchMove
            h={sheetHeight}
            animation={contentAnimation}
            zIndex={1010}
        >
            {children}
        </View>
    )
}
