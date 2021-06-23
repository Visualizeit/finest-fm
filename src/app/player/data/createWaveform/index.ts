export const createWaveform = (length: number = 50) => {
    const random = Array.from(
        { length },
        (_, index) => ~~(Math.random() * 100) + 7
    )

    return random
}
