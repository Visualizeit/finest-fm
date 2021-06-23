import type { FC } from '@tarojs/taro'
import { View } from '@fower/taro'
import { useNavigationBarRect } from '@app/shared/hooks'
import { NavigationBarSearch } from '@app/home/components'

const { navigationBarHeight, statusBarHeight } = useNavigationBarRect()
export const HomeNavBar: FC = () => (
    <View
        className="sticky top-0 w-full bg-white shadow"
        pt={statusBarHeight + 'px'}
        // zIndex={100}
        h={navigationBarHeight + 'px'}
    >
        <NavigationBarSearch />
    </View>
)

HomeNavBar.options = {
    addGlobalClass: true,
}
