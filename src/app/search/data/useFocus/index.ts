import { useCallback, useState } from 'react'
import type { CommonEventFunction } from '@tarojs/components'
import type { InputProps } from '@tarojs/components/types/Input'

export const useFocus = () => {
    const [isFocus, setFocus] = useState(false)

    const onFocus: CommonEventFunction<InputProps.inputForceEventDetail> =
        useCallback((event) => {
            setFocus(true)
        }, [])

    const onBlur: CommonEventFunction<InputProps.inputValueEventDetail> =
        useCallback((event) => {
            setFocus(false)
        }, [])

    return {
        isFocus,
        focusListener: {
            onFocus,
            onBlur,
        },
    }
}
