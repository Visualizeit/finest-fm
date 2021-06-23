import type { FC } from 'react'
import { Router } from 'tarojs-router-next'

export const goPlayList = (
    page: undefined | (() => JSX.Element) | FC<any>,
    props?: object
) => {
    Router.toPlayList({
        data: {
            page,
            props,
        },
    })
}
