import type { FC } from 'react'
import { PlayerSlider, ControlButtonGroup, WaveformVisualizer } from '..'

export const ControlBar: FC = () => {
    return (
        <>
            <PlayerSlider />
            <ControlButtonGroup />
            <WaveformVisualizer />
        </>
    )
}
