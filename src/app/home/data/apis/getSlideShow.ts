import { useRequest } from '@app/shared/data/apis'

export const getSlideShow = () => {
    const result = useRequest<SlideShow>(
        'https://www.ximalaya.com/revision/ad/slideshow',
        {}
    )

    return result
}

interface SlideShow {
    data: {
        slideshow: {
            url: string
            longTitle: string
            coverPath: string
            focusId: number
            index: number
        }[]
    }
}
