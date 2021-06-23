import type { FC } from 'react'
import { Router } from 'tarojs-router-next'
import type { Data } from './route.config'

const Index: FC = () => {
    const data = Router.getData() as Data

    const Page = data.page ?? (() => <></>)

    return <Page {...data.props} />
}

export default Index
