declare interface LastUpTrack {
    track_id: number //最新上传声音ID
    track_title: string //最新上传声音标题
    duration: string //最新上传声音时长，单位为秒
    updated_at: string //最新上传声音更新时间，Unix毫秒数时间戳
    created_at: string //最新上传声音创建时间，Unix毫秒数时间戳
}
