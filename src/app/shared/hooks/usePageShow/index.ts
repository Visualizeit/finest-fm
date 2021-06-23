import { useDidShow, useDidHide } from "@tarojs/taro"
import { useState } from "react"

export const usePageShow=()=>{
    const [isShow, setShow] = useState(false)

    useDidShow(() => {
        setShow(true)
    })
 
    useDidHide(() => {
        setShow(false)
    })

    return isShow
}