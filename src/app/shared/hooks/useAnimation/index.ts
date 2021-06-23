import type { Animation } from '@tarojs/taro'
import { createAnimation } from '@tarojs/taro'
import { useCallback, useEffect, useState } from 'react'

import { transformAnimationObject } from './transformAnimationObject'

export type UseAnimationProps = Partial<
    {
        [key in keyof Animation]: Parameters<Animation[key]>['length'] extends 1
            ? Parameters<Animation[key]>[0]
            : Parameters<Animation[key]>
    }
>

interface UseAnimationConfig extends createAnimation.Option {
    default?: UseAnimationProps
}

export const useAnimation = (
    animationConfig: UseAnimationConfig,
    deps?: readonly any[]
) => {
    const [animation, setAnimation] = useState(createAnimation(animationConfig))

    useEffect(() => {
        if ('default' in animationConfig) {
            setAnimation((animation) =>
                Object.create(
                    transformAnimationObject(
                        animation,
                        animationConfig.default as UseAnimationProps
                    )
                )
            )
        }
    }, deps)

    const updateAnimation = useCallback(
        (animationObject: UseAnimationProps) =>
            setAnimation((animation) =>
                Object.create(
                    transformAnimationObject(animation, animationObject)
                )
            ),
        []
    )

    return [animation.export(), updateAnimation] as const
}
