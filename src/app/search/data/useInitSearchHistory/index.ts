import { getStorage, setStorage } from '@tarojs/taro'
import { to } from 'await-to-js'
import { useEffect } from 'react'
import { SearchHistoryKEY } from '..'

export const useInitSearchHistory = () => {
    useEffect(() => {
        ;(async () => {
            const [error, data] = await to(
                getStorage<string[]>({
                    key: SearchHistoryKEY,
                })
            )

            if (!data) {
                setStorage({
                    key: SearchHistoryKEY,
                    data: [],
                })
            }
        })()
    }, [])
}
