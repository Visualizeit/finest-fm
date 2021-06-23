import { useState } from 'react'
import { useDebounceCallback } from '@react-hook/debounce'
import type { CommonEventFunction } from '@tarojs/components'
import type { InputProps } from '@tarojs/components/types/Input'

interface useInputProps {
    initialValue?: string
    wait: number
}

export const useInput = ({ initialValue = '', wait }: useInputProps) => {
    const [value, setValue] = useState(initialValue)

    const onInput: CommonEventFunction<InputProps.inputEventDetail> =
        useDebounceCallback(
            (event) => {
                setValue(event.detail.value)
            },
            wait,
            true
        )

    const reset = () => setValue('')

    return {
        value,
        setValue,
        reset,
        inputListener: {
            value,
            onInput,
        },
    }
}
