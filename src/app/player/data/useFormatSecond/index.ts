import { useMemo } from 'react'

export const useFormatDuration = (...time: number[]) =>
    useMemo(() => time.map(formater), [time])

    
const formater = (time: number) => {
    const minutes = ~~((time / 60) % 60)
    const seconds = (~~(time % 60)).toString().padStart(2, '0')
    return minutes + ':' + seconds
}
