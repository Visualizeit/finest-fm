/**
 * @see https://open.ximalaya.com/doc/detailApi?categoryId=6&articleId=37#Album
 */
declare interface Album {
    id: number
    kind: 'album' | 'paid_album'
    album_title: string
    tracks_natural_ordered: boolean //专辑内声音排序是否自然序，自然序是指先上传的声音在前面，晚上传的声音在后面
    category_id: number //专辑所属点播分类ID
    album_tags: string
    album_intro: string
    cover_url: string //专辑封面原图，尺寸不固定，最大尺寸为960*960（像素）
    cover_url_small: string //专辑封面小图，尺寸为86x86（像素）
    cover_url_middle: string //专辑封面中图，尺寸为140x140（像素）
    cover_url_large: string //专辑封面大图，尺寸为290x290（像素）
    announcer: Announcer
    play_count: number //专辑被播放总次数
    favorite_count: string //专辑被点赞总次数
    share_count: string //专辑被分享总次数
    include_track_count: string //专辑包含声音总数
    last_uptrack: LastUpTrack //专辑内最新上传的声音，包含的字段请参考
    updated_at: string
    created_at: string
    quality_tags: string
    quality_score: string
}
