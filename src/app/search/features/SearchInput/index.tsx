import type { FC } from 'react'
import { Input, View } from '@fower/taro'
import clsx from 'clsx'
import { SearchContainer } from '@app/search/data'
import { SuggestWordsList } from '..'
import IconFont from '@app/custom/iconfont'

const serachPlaceholder = '搜索声音、电台、音乐'

export const SearchInput: FC = () => {
    const { inputListener, focusListener, isFocus, handleConfirm } =
        SearchContainer.useContainer()

    return (
        <View>
            <View
                className={clsx(
                    'flex items-center transition rounded-xl bg-white',
                    isFocus ? 'shadow-xl' : 'shadow-lg'
                )}
                borderColor="pink300"
                px8
                css={{
                    bg: isFocus ? 'gray100' : 'white',
                    borderWidth: isFocus ? 5 : 0,
                    borderStyle: 'solid',
                }}
            >
                <IconFont name="sousuo" size={40} />
                <Input
                    className="flex-grow "
                    ml5
                    py5
                    maxlength={20}
                    placeholder={serachPlaceholder}
                    placeholderClass="z-0"
                    onConfirm={handleConfirm}
                    {...inputListener}
                    {...focusListener}
                />
            </View>
            <SuggestWordsList />
        </View>
    )
}
