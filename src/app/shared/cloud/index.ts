import { useEffect } from 'react'
import { cloud } from '@tarojs/taro'

export const useInitCloud = () => {
    useEffect(() => {
        cloud.init()
    }, [])
}
