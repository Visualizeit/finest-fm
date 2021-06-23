import type { FC } from 'react'

export type Data = {
    page: (() => JSX.Element) | undefined | FC
    props?: object
}
