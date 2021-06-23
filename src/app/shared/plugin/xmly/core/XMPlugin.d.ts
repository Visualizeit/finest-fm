// declare interface XMPlugin {
//   init: (
//     params: initParams
//   ) => {
//     xmly: Xmly;
//     player: Player;
//   };
// }

// interface initParams {
//   appKey: string;
//   appSecret: string;
//   debug: boolean;
// }

// interface Xmly {}

// interface Sound {
//   id: number;
//   src: string;
//   title: string;
//   coverImgUrl?: string;
//   epname?: string;
//   singer?: string;
// }

type PlayState = 'ready' | 'playing' | 'loading' | 'paused' | 'stoped' | 'error'

// type PlayBackRate = 0.5 | 1 | 2;

// type PlayMode = "order" | "loop" | "random" | "single";

// interface Player {
//   play: (id?: number) => Promise<void>;
//   playByIndex: (index: number) => Promise<void>;
//   pause: () => void;
//   prev: () => void;
//   next: () => void;
//   getPlaylist: () => number[];
//   getCurrentPlaylist: () => number[];
//   setPlaylist: (playlist: number[]) => void;
//   getCurrentIndex: () => number;
//   getSound: () => Sound | void;
//   getSounds: () => Map<number, Sound>;
//   setSounds: (sounds: Map<number, Sound>) => void;
//   getDuration: () => number;
//   getCurrentTime: () => number;
//   getBuffered: () => number;
//   seek: (position: number) => void;
//   seekForward: (dif: number) => void;
//   seekBack: (dif: number) => void;
//   getPlaybackRate: () => PlayBackRate;
//   setPlaybackRate: (playbackRate: PlayBackRate) => void;
//   getPlayMode: () => PlayMode;
//   setPlayMode: (playMode: PlayMode) => void;
//   getPlayState: () => PlayState;
//   preloadSound: (id: number) => Promise<void>;
//   setAutoskip: (autoskip: boolean) => void;
//   isAdvertising: () => boolean;
//   recover: () => void;
//   destroy: () => void;
// }
import type { Sound } from 'wechat-miniprogram-xmly/player'
import type {
    PLAY_BACK_RATE,
    PLAY_STATE,
    PLAY_MODE,
} from 'wechat-miniprogram-xmly/player'

//Event
interface XMplayer {
    on: <T extends keyof PlayerEventMap>(
        type: T,
        listener: PlayerEventMap[T]
    ) => XMplayer

    once: <T extends keyof PlayerEventMap>(
        type: T,
        listener: PlayerEventMap[T]
    ) => XMplayer

    off: <T extends keyof PlayerEventMap>(
        type: T,
        listener?: PlayerEventMap[T]
    ) => XMplayer
}

export interface PlayerEventMap {
    play: (sound: Sound) => void
    canplay: (sound: Sound) => void
    pause: (sound: Sound) => void
    stop: (sound: Sound) => void
    resume: (sound: Sound) => void
    timeupdate: (sound: Sound, position: number) => void
    end: (sound: Sound) => void
    next: (sound: Sound) => void
    prev: (sound: Sound) => void
    'change.sound': (sound: Sound, prevSound: Sound) => void
    'change.playlist': (playlist: number[], prevPlaylist: number[]) => void
    'change.playState': (
        sound: Sound,
        playState: PlayState,
        prevState: PlayState
    ) => void
    'change.playMode': (playMode: PLAY_MODE, prevPlayMode: PLAY_MODE) => void
    'change.playbackRate': (
        playbackRate: PLAY_BACK_RATE,
        prevPlaybackRate: PLAY_BACK_RATE
    ) => void
    'sound.needPay': (sound: Sound) => void
    error: (error: string, sound: Sound) => void
    'error.accessToken': (error: string) => void
}
