import type { FC } from 'react'
import { View } from '@fower/taro'
import {
    GuessYourFavorite,
    Banner,
    TopList,
    DailyForYou,
    NewMusicProductsList,
    HomeNavBar,
    RecommendListening,
    MovieOriginalList,
} from './features'
import { CustomTabBar } from '../custom-tab-bar'

export const Home: FC = () => {
    return (
        <>
            <HomeNavBar />
            <View className="grid grid-cols-1">
                <Banner />
                <GuessYourFavorite />
                <RecommendListening />
                <TopList />
                <DailyForYou />
                <MovieOriginalList />
                <NewMusicProductsList />
            </View>
            <CustomTabBar />
        </>
    )
}
