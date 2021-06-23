declare interface Radio {
    id: number // 直播电台ID
    kind: 'radio'
    radio_name: string //电台名称
    radio_desc: string //电台简介
    program_name: string //正在直播的节目名称
    schedule_id: number //正在直播的节目时间表ID
    support_bitrates: number[] //Array类型，支持的码率列表，如[24,64]
    rate24_aac_url: string //24码率aac格式播放地址
    rate24_ts_url: string //24码率ts格式播放地址
    rate64_aac_url: string //64码率aac格式播放地址
    rate64_ts_url: string //64码率ts格式播放地址
    radio_play_count: string //电台累计收听次数
    cover_url_small: string //电台封面小图
    cover_url_large: string //电台封面大图
    updated_at: number //电台更新时间，Unix毫秒数时间戳
}
