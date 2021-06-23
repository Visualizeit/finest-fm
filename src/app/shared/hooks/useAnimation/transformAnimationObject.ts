import type { Animation } from '@tarojs/taro'
import type { UseAnimationProps } from './'
const { isArray } = Array

export const transformAnimationObject = (
    animationInstance: Animation,
    animationObject: UseAnimationProps
) => {
    // const hasStep = 'step' in animationObject

    // const currentObject = getCurrentObject(hasStep, animationObject)

    // const animationArray = Object.entries(currentObject)
    const animationArray = Object.entries(animationObject)

    const result = animationArray.reduce(
        (prev, [key, value]) =>
            isArray(value) ? prev[key](...value) : prev[key](value),
        animationInstance
    )

    return result.step()
}

// const getCurrentObject = (
//     hasStep: boolean,
//     animationObject: UseAnimationProps
// ) => {
//     if (hasStep) {
//         const { step, ...currentObject } = animationObject

//         return currentObject
//     }

//     return animationObject
// }
