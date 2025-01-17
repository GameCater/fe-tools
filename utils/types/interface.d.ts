export interface Ob {
  [key: string]: any;
}

export interface Ext {
  wechatMiniProgram?: Ob;
  aliMiniApp?: Ob;
  bytedanceMicroApp?: Ob;
  web?: Ob;
  baiduSmartProgram?: Ob;
  kuaishouMiniProgram?: Ob;
}

export declare namespace King {
  interface COptions {
    _ext?: Ext;
  }
}
