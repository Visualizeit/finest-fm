# finest-fm

![screenshot](http://r.photo.store.qq.com/psc?/V51X4JtX0DLBT347VGOH0rrTRm3qtTow/45NBuzDIW489QBoVep5mcWs0YUMZaX73exuD0C.9vGROAKL39L1VlN09Ewmqq4aE7kO5m2gW3UPrVevzhyprkHGEe69Tqr47FkFhXHR07Rw!/r)



#### 说明：

Finest fm是一款网络电台小程序，提供高质量的有声小说，脱口秀，播客，音乐等音频节目，精准的个性化推荐，为用户打造独一无二的收听体验。高解析度的音频资源，每首节目都拥有一流的CD音质。强大的搜索功能，快捷找到用户喜好的音频。精美的UI界面，给用户带来最沉浸的收听享受。海量音频资源，听你想听。

#### 所用技术栈:

Taro + React + Typescript



## 开发环境配置 :computer:

- ```
  git clone https://github.com/Visualizeit/finest-fm.git
  ```
  
- ```
  cd finest-fm 
  ```
  
- 在`./src/app/shared/plugin/xmly/token/index.ts` 导出你在 [喜马拉雅开发平台](https://open.ximalaya.com/home)申请的 appKey 和 appSecret

  ```typescript
  //finest-fm/src/app/shared/plugin/xmly/token/index.ts
  
  const appKey = "你的appkey";
  const appSecret = "你的appSecret";
   
  export { appKey, appSecret };
  ```

  

- ```
  yarn run dev:weapp
  ```
