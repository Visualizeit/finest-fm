import { getGuessYourFavorite } from '@app/shared/data/apis'

export const guessYourFavoriteContainer = () => {
    const { data } = getGuessYourFavorite({
        device_type: 3,
        like_count: 10,
        contains_paid: false,
    })

    return {
        data: data ?? [],
    }
}
