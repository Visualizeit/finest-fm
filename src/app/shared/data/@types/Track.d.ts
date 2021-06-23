declare interface Track {
    id: number //	声音ID
    kind: 'track'
    track_title: string //	声音标题
    order_num: number //声音在专辑中的排序值，从0开始依次递增，值越小排序越前
    track_tags: string //	声音标签列表（不超过255个字符），包含运营标签和主播个人打的标签，标签之间以英文逗号分隔
    track_intro: string //	声音简介
    track_rich_intro: string //	声音简介，富文本，仅支持 tracks/get_single 接口获取
    cover_url_small: string //	声音封面小图url，尺寸为60x60（像素）
    cover_url_middle: string //	声音封面中图url，尺寸为180x180（像素）
    cover_url_large: string //	声音封面大图url，尺寸为640x640（像素）
    announcer: Announcer //	声音所属主播，包含的字段请参考 Announcer
    duration: number //声音时长，单位秒
    contain_video: boolean //是否包含视频，视频播放链接通过
    // /open_pay/get_video_play_info
    // /open_pay/batch_get_video_play_info 获取
    play_count: number //声音被播放总次数
    favorite_count: number //声音被点赞总次数
    comment_count: number //声音被评论总次数
    vip_first_status: 0 | 1 | 2 //会员抢先听状态，0：非抢先听，1：抢先听，2：抢先听过期
    play_size_24_m4a: number //	24位码率m4a格式音频文件大小，单位字节
    play_size_64_m4a: number //64位码率m4a格式音频文件大小，单位字节
    play_size_amr: number //amr格式音频文件大小，单位字节，如果play_url_amr值为""则该字段值为0
    can_download: boolean //能否被下载到用户终端本地，禁止下载/缓存到服务器端
    download_size: number //音频下载文件大小，单位字节
    subordinated_album: SubordinatedAlbum //声音所属专辑，包含的字段请参考 SubordinatedAlbum
    source: 1 | 2 //声音来源，1-用户原创，2-转采自其它专辑
    updated_at: number //声音更新时间，Unix毫秒数时间戳
    created_at: number //声音创建时间，Unix毫秒数时间戳
    //  以下字段仅”获取频道下声音列表“才会输出
    business_type?: 1 | 2 | 3 //	业务类型：1-助眠解压 2-场景一键听
    scene_id: number //场景ID
    channel_id: number // 频道
}
