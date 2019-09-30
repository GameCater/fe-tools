# fe-books

> 前端开发常用文档/网站地址、样式/js方法封装库、项目模板。


<a title="前端开发常用文档/网站地址、样式/js方法封装库、项目模板" href="http://blog.michealwayne.cn/2019/07/18/tools/%E3%80%90%E5%B7%A5%E5%85%B7%E3%80%91%E5%89%8D%E7%AB%AF%E5%B8%B8%E7%94%A8%E7%BD%91%E7%AB%99%E9%9B%86%E5%90%88/" target="_blank"><img style="display: block; margin: 0 auto; width: 60%;" src="https://blog.michealwayne.cn/images/fe.png"/></a>

## 1.常用网站
目录：
- [1.1 HTML/CSS/JavaScript](#11-htmlcssjavascript)
- [1.2 兼容/查询](#12-兼容查询)
- [1.3 CSS工具](#13-css工具)
- [1.4 JS插件/库](#14-js插件库)
- [1.5 Vue](#15-vue)
- [1.6 React](#16-react)
- [1.7 Nodejs和构建](#17-nodejs和构建)
- [1.8 Hybird和跨端](#18-hybird和跨端)
- [1.9 辅助工具](#19-辅助工具)
- [1.10 测试、安全及加密](#110-测试安全及加密)


### 1.1 HTML/CSS/JavaScript
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://developer.mozilla.org/zh-CN/docs/Web" target="_blank">MDN 文档手册</a> | `html/css/js` | 很全很有用的查询网站。
<a href="https://www.w3.org/" target="_blank">W3C官网</a> | `html/css/js` | W3C官方，不解释。
<a href="https://www.html.cn/book/css/all-properties.html" target="_blank">html中文网-css教程手册</a> | `css` | 快速查询css属性及基本使用。
<a href="http://www.yyyweb.com/demo/html5-tools/html5-canvas.html" target="_blank">canvas速查手册</a> | `canvas` | 一目了然canvas的api方法。
<a href="http://www.t086.com/code/vml/" target="_blank">VML 参考手册</a> | `VML(IE)` | *微软开发的在低端IE上运行的“SVG”。
<a href="http://es6.ruanyifeng.com/" target="_blank">ES6入门（阮一峰）</a> | `ES6` | 使用频率最高的ECMAScript6文档。
<a href="https://ecma262.docschina.org/" target="_blank">ECMA International(6) China | `ES6` | ECMAScript6官方文档，部分中文翻译。
<a href="http://www.ecma-international.org/ecma-262/6.0/" target="_blank">ECMA International(6)</a> | `ES6` | ECMAScript6官方文档。
<a href="https://www.tslang.cn/docs/home.html" target="_blank">TypeScript中文文档</a> | `typescript` | TypeScript官网文档。
<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/" target="_blank">Typescript Handbook</a> | `typescript` | TypeScript使用手册。
<a href="http://www.html5plus.org/doc/h5p.html" target="_blank">Web API Reference</a> | `html5` | HTML5 web API查询，如摄像头/地理位置。
<a href="https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-autocorrect" target="_blank">Safari HTML Ref查询</a> | `html` | Safari webview的HTML标签查询，某些ios特殊的属性或表现可以查这个。


### 1.2 兼容/查询
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://caniuse.com/" target="_blank">can i use</a> | `--` | 使用频率最高的兼容支持查询网站。
<a href="http://kangax.github.io/compat-table/es6/" target="_blank">ES兼容查询</a> | `js` | ECMAScript兼容查询。
<a href="http://iosfonts.com/" target="_blank">IOS字体支持查询</a> | `ios font` | IOS系统自带字体查询。
<a href="https://www.bootcss.com/p/websafecolors/" target="_blank">Web安全色查询</a> | `web color` | 为了尽量让用户看到色彩相同的网页,请尽量使用216色的web安全色。
<a href="http://tongji.baidu.com/data/browser" target="_blank">浏览器份额统计</a> | `browser` | 百度统计的市面上浏览器份额，（要Flash，Chrome不一定能看）。

### 1.3 CSS工具
#### 1.3.1 预处理
地址 | 标签 | 说明
---- | ---- | ----
<a href="http://www.css88.com/doc/less/features/" target="_blank">less文档</a> | `less` | 易上手的CSS预处理工具。
<a href="https://sass-guidelin.es/zh/" target="_blank">sass 文档</a> | `sass` | 热门的CSS预处理工具。
<a href="http://stylus-lang.com/" target="_blank">stylus 文档</a> | `stylus` | 功能丰富的CSS预处理工具。
<a href="http://www.zhangxinxu.com/jq/stylus/" target="_blank">stylus 文档(张旭鑫)</a> | `stylus` | stylus中文文档。

#### 1.3.2 后处理
地址 | 标签 | 说明
---- | ---- | ----
<a href="http://api.postcss.org/" target="_blank">postcss 文档</a> | `postcss` | 被广泛运用的CSS后处理工具。
<a href="https://github.com/postcss/postcss" target="_blank">github-postcss</a> | `postcss` | post插件库中心。
<a href="https://github.com/postcss/autoprefixer" target="_blank">github-autoprefixer</a> | `autoprefixer` | 自动补充浏CSS前缀的后处理工具。
<a href="https://cssnano.co/" target="_blank">cssnano官网</a> | `cssnano` | CSS优化和分解插件。
<a href="https://www.npmjs.com/package/postcss-plugin-px2rem" target="_blank">postcss-plugin-px2rem</a> | `px2rem` | 将px单位转为rem单位的工具。
<a href="https://www.npmjs.com/package/postcss-px-to-viewport" target="_blank">postcss-px-to-viewport</a> | `px2vw` | 将px单位转为vw单位的工具。
<a href="https://cssnext.github.io/" target="_blank">cssnext官网</a> | `cssnext` | 让今天的我们写着明天的CSS特性。


#### 1.3.3 样式库/模块
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://daneden.github.io/animate.css/" target="_blank">animate.css</a> | `bulma.css` | CSS3动画库。
<a href="http://ianlunn.github.io/Hover/" target="_blank">Hover.css</a> | `Hover.css` | 鼠标hover交互动画库。
<a href="https://bulma.io/" target="_blank">bulma.css</a> | `bulma.css` | 一款轻量级的CSS UI库。
<a href="http://cardinalcss.com/" target="_blank">cardinal.css</a> | `cardinal.css` | 一款移动优先的less库。
<a href="http://bootflat.github.io/index.html" target="_blank">bootflat.css</a> | `bootflat.css` | 一款扁平化风格scss库，基于BootStrap3.3。
<a href="https://jamiewilson.io/corpus/" target="_blank">corpus.css</a> | `corpus.css` | 一款scss集合库。
<a href="https://github.com/Tencent/weui" target="_blank">weui</a> | `weui` | 微信风格的样式库，腾讯。
<a href="http://www.materializecss.cn/" target="_blank">materialize.css</a> | `materializecss` | Material风格的响应式前端样式框架。
<a href="https://www.muicss.com" target="_blank">mui.css</a> | `MUI` | Material风格的轻量级前端样式框架。
<a href="https://metroui.org.ua/" target="_blank">Metro UI</a> | `Metro UI` | 一款流行的响应式前端样式框架，[React版](https://react.metroui.org.ua/)。
<a href="https://nostalgic-css.github.io/NES.css/" target="_blank">NES.css</a> | `NES.css` | 游戏机风格的前端样式框架。
<a href="https://www.getpapercss.com" target="_blank">paper.css</a> | `paper.css` | 手绘风格的前端样式框架。
<a href="http://www.uiplayground.in/css3-icons/" target="_blank">css3 icon</a> | `css3 icon` | 纯CSS实现的图标。
<a href="http://bootstrap.css88.com/css/" target="_blank">Bootstrap 文档</a> | `bootstrap` | 红极一时的前端样式框架。
<a href="https://fontawesome.com/" target="_blank">fontawesome</a> | `fontawesome` | 字体图标库。
<a href="https://www.iconfont.cn/" target="_blank">iconfont</a> | `iconfont` | 字体图标库，阿里。
<a href="http://necolas.github.io/normalize.css/" target="_blank">normalize</a> | `normalize` | 相对较优的CSS reset替代方案。

#### 1.3.4 其他
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://qishaoxuan.github.io/css_tricks/" target="_blank">css tricks</a> | `css tricks` | 包括布局、图标、动画等CSS技巧。
<a href="https://en.bem.info/methodology/quick-start/" target="_blank">BEM</a> | `bem` | BEM写法规范。
<a href="https://acss.io/" target="_blank">ACSS</a> | `acss` | Atomic CSS，一种模块化写法规范。
<a href="https://csswizardry.net/talks/2014/11/itcss-dafed.pdf" target="_blank">IT.css</a> | `itcss` | IT CSS，一种组件化写法规范。
<a href="https://glenmaddern.com/articles/css-modules" target="_blank">CSS modules</a> | `css-modules` | 一种CSS样式模块化的解决方案。
<a href="https://github.com/MicheleBertoli/css-in-js" target="_blank">css in js</a> | `css-in-js` | 用写js的方式生成css样式。
<a href="http://blog.michealwayne.cn/Moo-CSS/docs/moocss/#m%E6%A8%A1%E5%9D%97" target="_blank">Moo-CSS</a> | `moo-css` | 一种CSS写法方案。



### 1.4 JS插件/库
#### 1.4.1 库
地址 | 标签 | 说明
---- | ---- | ----
<a href="http://www.css88.com/jqapi-1.9/" target="_blank">jQuery api</a> | `jQuery` | 红极一时的js库。
<a href="http://www.css88.com/doc/zeptojs_api/" target="_blank">Zepto api</a> | `Zepto` | 移动端使用的轻量级“jQuery”。
<a href="https://github.com/basecss/city" target="_blank">city.js</a> | `city` | 全国行政区划分数据文件。
<a href="http://phaser.io/" target="_blank">phaser.js</a> | `phaser` | 2D游戏前端库。
<a href="http://fabricjs.com/" target="_blank">fabric.js</a> | `fabricjs` | 有名的svg和canvas相互转换的封装库。
<a href="https://www.babylonjs.com/" target="_blank">babylon.js</a> | `babylonjs` | 有名的3D游戏/视频框架。
<a href="https://stdlib.io/" target="_blank">stdlib</a> | `stdlib` | js的数学增强库。
<a href="https://immutable-js.github.io/immutable-js/" target="_blank">immutable-js</a> | `immutable` | 生产环境js的List, Stack, Map, OrderedMap, Set, OrderedSet以及Record数据结构支持。


#### 1.4.2 数据工具
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://lodash.com/docs/" target="_blank">LoDash</a> | `lodash` | 广为人知的函数式工具库。
<a href="https://github.com/ramda/ramda" target="_blank">ramda</a> | `ramda` | 广为人知的函数式工具库。
<a href="https://underscorejs.org/" target="_blank">UnderscoreJS</a> | `underscorejs` | 红极一时的函数式工具库。
<a href="http://winterbe.github.io/streamjs/" target="_blank">StreamJs</a> | `streamjs` | 一款js数据的操作工具。
<a href="https://baconjs.github.io/" target="_blank">BaconJs</a> | `baconjs` | 也是一款js数据的操作工具。
<a href="https://momentjs.com/" target="_blank">MomentJs</a> | `momentjs` | 一款日期格式化的工具。
<a href="http://numbrojs.com/" target="_blank">numbro</a> | `numbrojs` | 一款多国语言的数字转化工具。
<a href="http://openexchangerates.github.io/accounting.js/" target="_blank">accounting.js</a> | `accounting.js` | 数字，金钱的格式化工具。
<a href="http://openexchangerates.github.io/money.js/" target="_blank">money.js</a> | `money.js` | 金钱的汇率转换工具。


#### 1.4.3 请求、cookie和缓存
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://github.com/axios/axios" target="_blank">axios</a> | `axios` | 高频使用的ajax库。
<a href="https://github.com/github/fetch" target="_blank">fetch</a> | `fetch` | Fetch API的兼容polyfill。
<a href="https://github.com/webmodules/jsonp" target="_blank">jsonp</a> | `jsonp` | 不用多说，实现jsonp。（axios没有封装jsonp）
<a href="http://medialize.github.io/URI.js/" target="_blank">URI.js</a> | `uri` | URI解析操作的工具。
<a href="https://github.com/marcuswestin/store.js/" target="_blank">StoreJs</a> | `storage` | storage的封装库，兼容IE6。
<a href="https://github.com/js-cookie/js-cookie" target="_blank">js-cookie</a> | `js-cookie` | cookie的封装库。
<a href="https://dexie.org/" target="_blank">Dexie.js</a> | `Dexie.js` | IndexedDB的封装库。



#### 1.4.4 插件
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://www.swiper.com.cn/" target="_blank">swiper.js</a> | `swiper` | 轮播插件。
<a href="https://github.com/jacoborus/nanobar/" target="_blank">nanobar.js</a> | `nanobar` | 绚丽的进度条展示插件，IE7+。
<a href="https://sweetalert.js.org/" target="_blank">sweetalert</a> | `sweetalert.js` | 还算库的PC alert展示插件。
<a href="https://github.com/lancedikson/bowser" target="_blank">bowserjs</a> | `bowserjs` | 通过ua做的浏览器探测插件。
<a href="https://github.com/Tencent/vConsole" target="_blank">vConsole</a> | `vconsole` | 被誉为移动端的开发者工具。
<a href="https://clipboardjs.com/" target="_blank">clipboard.js</a> | `clipboardjs` | 剪切板控制插件。
<a href="https://github.com/kazuhikoarase/qrcode-generator/tree/master/js" target="_blank">Qrcode-generator</a> | `grcode-generator` | 二维码生成工具。
<a href="http://html2canvas.hertzen.com/documentation" target="_blank">html2canvas</a> | `html2canvas` | html转为图片（canvas），即实现网页截图。
<a href="https://github.com/sofish/pen#readme" target="_blank">Pen Editor</a> | `Pen Editor` | web的文本编辑工具。
<a href="https://nosir.github.io/cleave.js/" target="_blank">cleave.js</a> | `cleave.js` | 一款好用的input输入控制插件。


##### 视/音频
地址 | 标签 | 说明
---- | ---- | ----
<a href="http://www.mediaelementjs.com/" target="_blank">mediaelement.js</a> | `mediaelementjs` | 一款视频控制插件。
<a href="https://videojs.com/" target="_blank">video.js</a> | `videojs` | 一款视频控制插件。
<a href="https://github.com/bilibili/flv.js" target="_blank">flv.js</a> | `flvjs` | 一款无需flash的flv播放插件。
<a href="https://github.com/goldfire/howler.js#documentation" target="_blank">howler.js</a> | `howlerjs` | 视、音频控制插件。
<a href="http://jplayer.org/" target="_blank">jplayer</a> | `jplayer` | jQuery的视、音频控制插件。
<a href="https://github.com/zohararad/audio5js" target="_blank">audio5.js</a> | `audio5js` | 一款音频控制插件。

##### 图片
地址 | 标签 | 说明
---- | ---- | ----
<a href="http://camanjs.com/" target="_blank">caman.js</a> | `camanjs` | 一款web图片处理插件。


#### 1.4.5 工具
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://github.com/pvorb/node-md5" target="_blank">md5.js</a> | `md5` | md5加密。
<a href="http://requirejs.org/" target="_blank">requirejs 文档</a> | `requirejs` | js模块化工具。
<a href="http://yslove.net/seajs/" target="_blank">seajs 文档</a> | `seajs` | js模块化工具。
<a href="https://github.com/rickharrison/validate.js" target="_blank">validate.js</a> | `validate.js` | form表单校验工具。
<a href="https://github.com/validatorjs/validator.js" target="_blank">validator.js</a> | `validator.js` | 有名的内容校验工具，比如邮箱验证、数值验证等。


#### 1.4.6 数据可视化(图表)
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://api.hcharts.cn/highcharts" target="_blank">highcharts</a> | `highcharts` | 效果、兼容最好（ie6+）的可视化库，可惜企业要收费。
<a href="http://echarts.baidu.com/api.html#echarts" target="_blank">echarts</a> | `echarts` | 国内最全面的可视化库。
<a href="https://github.com/d3/d3/wiki" target="_blank">d3</a> | `d3` | 不直接输出图形，输出开发功能的svg工具。
<a href="http://www.chartjs.org/docs/latest/" target="_blank">Chartjs</a> | `chartjs` | 模块化可视化库。
<a href="http://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html" target="_blank">antv</a> | `G2/F2` | 包括pc/移动的可视化库，蚂蚁。
<a href="http://blog.michealwayne.cn/FundCharts/docs/" target="_blank">FundCharts</a> | `fundcharts` | 本人的跨端轻量可视化库。
<a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank">ThreeJs文档</a> | `threejs/webGL` | 3D建模工具
<a href="http://scenejs.org/" target="_blank">scene.js</a> | `scenejs` | WebGL 3D基础库。
<a href="http://snapsvg.io/" target="_blank">Snap.svg</a> | `snap` | 一款svg操作库。
<a href="https://www.pixijs.com/" target="_blank">pixi.js</a> | `pixijs` | 2D WebGL渲染引擎。
<a href="https://libcafe.com/3d/index.html" target="_blank">svg-3d-builder</a> | `svg-3d-builder` | 3D SVG渲染引擎。

#### 1.4.6 数据可视化(地图)
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://cesiumjs.org/" target="_blank">cesiumjs</a> | `Cesium.js` | 一款开源的3D城市建模库。
<a href="http://kartograph.org/" target="_blank">Kartograph</a> | `Kartograph.js` | 一款普通的2D SVG城市数据展示库，IE7+。
<a href="https://leafletjs.com/" target="_blank">leafletjs</a> | `Leaflet.js` | 一款移动优先的地图展示插件。

#### 1.4.7 h5动画
地址 | 标签 | 说明
---- | ---- | ----
<a href="http://bouncejs.com/" target="_blank">Bounce.js</a> | `BounceJS` | 牛啤的CSS3动画创建工具。
<a href="https://github.com/bendc/animateplus" target="_blank">animateplus.js</a> | `Animateplus` | 仅3k的动画工具。
<a href="https://svgjs.com/docs/3.0/" target="_blank">svg.js</a> | `svgjs` | 轻量的svg操作/动画库。
<a href="http://snapsvg.io/" target="_blank">snapsvg</a> | `Snap.svg` | 一款有名的svg操作/动画库。
<a href="http://airbnb.io/lottie/#/" target="_blank">lottie</a> | `lottie` | web/原生/小程序的跨端动效方案。
<a href="https://createjs.com/easeljs" target="_blank">EaselJS</a> | `easeljs` | canvas动画操作库，CreateJS四剑客之一。
<a href="https://createjs.com/tweenjs" target="_blank">TweenJS</a> | `tweenjs` | 动画曲线（ease/linear...）操作库，CreateJS四剑客之一。
<a href="https://createjs.com/soundjs" target="_blank">SoundJS</a> | `soundjs` | 音频控制库，CreateJS四剑客之一。
<a href="https://createjs.com/preloadjs" target="_blank">PreloadJS</a> | `preload` | 资源预加载库，CreateJS四剑客之一。

#### 1.4.8 移动端手势
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://github.com/AlloyTeam/AlloyFinger" target="_blank">AlloyFinger.js</a> | `AlloyFinger` | 增加移动端的各种手势事件。
<a href="http://hammerjs.github.io/" target="_blank">hammer.js</a> | `hammerjs` | 增加手势以及取消了移动端click的300ms延迟。

#### 1.4.9 加载
地址 | 标签 | 说明
---- | ---- | ----
<a href="http://pazguille.github.io/aload/" target="_blank">aload.js</a> | `aload.js` | 异步图片/js/css加载工具。
<a href="http://callmecavs.com/layzr.js/" target="_blank">layzr.js</a> | `layzr.js` | 轻量图片懒加载工具。
<a href="https://github.com/aFarkas/lazysizes" target="_blank">lazysizes.js</a> | `lazysizes` | 高性能的图片/iframe懒加载工具。

### 1.5 Vue
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://cn.vuejs.org/v2/guide/syntax.html" target="_blank">Vue 文档</a> | `vue` | 官方文档。
<a href="https://cli.vuejs.org/zh/guide/cli-service.html#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4" target="_blank">vue-cli 文档</a> | `vue-cli` | vue脚手架工具文档。
<a href="https://vuex.vuejs.org/zh/" target="_blank">vuex 文档</a> | `vuex` | vue数据流控制工具。
<a href="https://router.vuejs.org/zh/" target="_blank">vue-router 文档</a> | `vue-router` | 基于vue的前端路由控制。
<a href="http://ustbhuangyi.github.io/better-scroll/doc/api.html" target="_blank">better-scroll 文档</a> | `better-scroll` | 控制滚动场景的插件。
<a href="https://youzan.github.io/vant/#/zh-CN/intro" target="_blank">vant 文档</a> | `vant` | 移动UI库，有赞。
<a href="http://aidenzou.github.io/vue-weui/#!/" target="_blank">vue-weui 文档</a> | `vue-weui` | weui风格的移动UI组件库。
<a href="https://element.eleme.cn/#/zh-CN" target="_blank">Element 文档</a> | `element` | 使用PC中后台前端开发的UI组件库，饿了么。
<a href="http://v1.iviewui.com/docs/guide/install" target="_blank">iView 文档</a> | `iview` | PC UI组件库。
<a href="https://vue.ant.design/docs/vue/introduce-cn/" target="_blank">antd-vue 文档</a> | `antd-vue` | PC UI组件库，ant design的Vue版。
<a href="https://kazupon.github.io/vue-i18n/" target="_blank">vue-i18n 文档</a> | `vue-i18n` | 多语言解决方案。


### 1.6 React
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://doc.react-china.org/docs/hello-world.html" target="_blank">React 文档</a> | `react` | 官方文档。
<a href="https://facebook.github.io/create-react-app/" target="_blank">create-react-app 文档</a> | `create-react-app` | react脚手架工具文档。
<a href="http://react-guide.github.io/react-router-cn/" target="_blank">react-router</a> | `react-router` | 基于react的前端路由控制。
<a href="https://www.redux.org.cn/docs/introduction/" target="_blank">redux 文档</a> | `redux` | 广泛使用的数据流控制工具，reducer+flux。
<a href="http://facebook.github.io/flux/" target="_blank">flux 文档</a> | `flux` | 数据流控制工具。
<a href="https://cn.mobx.js.org/" target="_blank">mobx 文档</a> | `mobx` | 轻量数据流控制工具。
<a href="https://dvajs.com/" target="_blank">dvajs 文档</a> | `dvajs` | 基于 redux 和 redux-saga 的数据流方案，蚂蚁。
<a href="https://umijs.org/zh/" target="_blank">UmiJs 文档</a> | `umijs` | 可插拔的企业级 react 应用框架，蚂蚁。
<a href="https://nextjs.org/" target="_blank">NextJs 文档</a> | `nextjs` | 轻量级的 React 服务端渲染应用框架。
<a href="https://ant.design/docs/react/getting-started-cn" target="_blank">antd 文档</a> | `antd` | ant design，PC UI组件库。
<a href="https://mobile.ant.design/index-cn" target="_blank">antd-mobile 文档</a> | `antd-mobile` | 移动版的antd，UI组件库。
<a href="https://rexxars.github.io/react-markdown/" target="_blank">react-markdown</a> | `react-markdown` | 在react上使用的markdown工具。
<a href="https://github.com/JedWatson/classnames#readme" target="_blank">classnames</a> | `classnames` | 操作className的工具，多用于React。


### 1.7 Nodejs和构建
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://www.npmjs.com/" target="_blank">npm</a> | `npm` | node包统一平台。
<a href="https://yarn.bootcss.com/" target="_blank">yarn</a> | `yarn` | 高速的node包管理平台。
<a href="http://nodejs.cn/api/" target="_blank">nodejs api</a> | `node` | Node官方文档。
<a href="https://v8docs.nodesource.com/node-10.6/index.html" target="_blank">V8</a> | `v8` |  V8引擎介绍。

#### 1.7.1 构建
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://ejs.bootcss.com/" target="_blank">ejs</a> | `ejs` | 简单上手的html模板引擎。
<a href="https://pugjs.org/language/includes.html" target="_blank">pug</a> | `pug` | html模板引擎。
<a href="http://www.nodeclass.com/api/jade.html" target="_blank">jade</a> | `jade` | html模板引擎。
<a href="https://www.gulpjs.com.cn/docs/" target="_blank">gulp 配置文档</a> | `gulp` | 自动化构建工具。
<a href="https://gulpjs.com/plugins/" target="_blank">gulp plugins</a> | `gulp` | gulp插件中心。
<a href="https://grunt.docschina.org/" target="_blank">grunt 配置文档</a> | `grunt` | 自动化构建工具。
<a href="https://rollupjs.org/guide/en/" target="_blank">rollupjs文档</a> | `Rollup` | 一款ES6模块构建工具。
<a href="http://www.css88.com/doc/webpack/" target="_blank">webpack 配置文档</a> | `webpack` | 应用面不能再广的打包工具。
<a href="https://parceljs.docschina.org/" target="_blank">parceljs 配置文档</a> | `parceljs` | 轻量打包。
<a href="http://babeljs.io/" target="_blank">babel</a> | `babel` | 应用面不能再广的ES编译器。

#### 1.7.2 服务端
地址 | 标签 | 说明
---- | ---- | ----
<a href="http://www.expressjs.com.cn/" target="_blank">express 配置文档</a> | `express` | 轻量web应用程序开发框架。
<a href="https://koajs.cn/#-application-" target="_blank">Koa 文档</a> | `koajs` | web应用程序开发框架。
<a href="https://docs.feathersjs.com/" target="_blank">feathers.js</a> | `feathersjs` | 轻量web应用程序开发框架。
<a href="https://docs.nestjs.com/" target="_blank">Nest.js</a> | `nestjs` | 强大的Web应用框架。
<a href="https://github.com/nuysoft/Mock/wiki" target="_blank">Mockjs 配置文档</a> | `mockjs` | 接口数据模拟工具，可以在客户端和服务端使用。
<a href="https://sheetjs.com/" target="_blank">SheetJs</a> | `sheetjs` | 通过node操作word的工具。
<a href="https://parall.ax/products/jspdf" target="_blank">js-pdf</a> | `js-pdf` | 通过node操作生成pdf的工具。
<a href="http://doc.pm2.io/en/plus/overview/" target="_blank">pm2</a> | `pm2` | node进程管理。
<a href="https://github.com/Marak/colors.js" target="_blank">colors.js</a> | `colorsjs` | node log控制台输出颜色控制。


### 1.8 Hybird和跨端
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank">pwa</a> | `pwd` | 渐进式web应用。
<a href="https://developers.weixin.qq.com/miniprogram/dev/" target="_blank">微信小程序官网</a> | `小程序/hybird` | 微信小程序开发官网。
<a href="https://docs.alipay.com/mini/developer/getting-started" target="_blank">支付宝小程序官网</a> | `小程序/hybird` | 支付宝小程序开发官网。
<a href="https://smartprogram.baidu.com/developer/index.html" target="_blank">百度小程序官网</a> | `小程序/hybird` | 百度小程序开发官网。
<a href="https://wepyjs.github.io/wepy-docs/" target="_blank">wepy文档</a> | `小程序/hybird` | vue语法的小程序开发官网。
<a href="https://github.com/opendigg/awesome-github-wechat-weapp" target="_blank">小程序工具集合</a> | `小程序/hybird` | 小米轻应用开发官网。
<a href="https://dev.mi.com/doc/?page_id=2303" target="_blank">小米轻应用官网</a> | `轻应用/hybird` | 小米轻应用开发官网。
<a href="https://www.quickapp.cn/" target="_blank">Oppo/vivo快应用官网</a> | `轻应用/hybird` | Oppo/vivo轻应用开发官网。
<a href="https://developer.huawei.com/consumer/cn/quickApp" target="_blank">华为快应用官网</a> | `轻应用/hybird` | 华为轻应用开发官网。
<a href="https://reactnative.cn/" target="_blank">React-native 文档</a> | `跨端` | 热门的react语法跨端工具。
<a href="https://weex.apache.org/zh/" target="_blank">Weex文档</a> | `跨端` | 热门的vue语法跨端工具。
<a href="https://alibaba.github.io/weex-ui/#/cn/" target="_blank">Weex-UI文档</a> | `跨端/weex` | weex的UI组件库。
<a href="https://taro.jd.com/" target="_blank">Taro文档</a> | `小程序/跨端` | 跨web/小程序/原生的react语法跨端工具。
<a href="https://uniapp.dcloud.io/" target="_blank">uni-app文档</a> | `小程序/跨端` | 跨web/小程序/原生的vue语法跨端工具。
<a href="https://guoshuyu.cn/home/wx/Flutter-1.html" target="_blank">Flutter文档</a> | `跨端` | 超火的Dart语法的跨端开发工具。
<a href="http://electronjs.org/docs" target="_blank">Electron文档</a> | `跨端` | windows应用的开发。


### 1.9 辅助工具
地址 | 标签 | 说明
---- | ---- | ----
<a href="http://deerchao.net/tutorials/regex/regex.htm" target="_blank">正则表达式30分钟</a> | `regexp` | 正则上手教程。
<a href="http://wproxy.org/whistle/install.html" target="_blank">whistle</a> | `whistle` | web调试代理工具。
<a href="https://github.com/typicode/husky#readme" target="_blank">husky</a> | `Husky` | NodeJS上的git工具。
<a href="https://cn.eslint.org/" target="_blank">eslint 文档</a> | `eslint` | js代码检查工具。
<a href="http://yisibl.github.io/cubic-bezier/#.48,1.06,1,1.45" target="_blank">动画曲线查询</a> | `cubic` | 动画曲线查询网站（ease/linear...）
<a href="https://imagemagick.org/index.php" target="_blank">ImageMagick</a> | `imagemagick` | 后台运用极广的图片处理工具。
<a href="http://aheckmann.github.io/gm/" target="_blank">GraphicsMagick</a> | `gm` | 后台图片处理工具。
<a href="https://valine.js.org/cdn.html" target="_blank">valineJS</a> | `valine` | 评论系统工具。
<a href="http://gittalk.com.cutestat.com/" target="_blank">GitTalk</a> | `gittalk` | github的评论工具。
<a href="https://github.com/Coding/WebIDE" target="_blank">webIDE</a> | `webide` | web上写代码。
<a href="https://hiroppy.github.io/fusuma/" target="_blank">Fusuma</a> | `fusuma` | 用markdown写web ppt。
<a href="https://vuepress.vuejs.org/zh/" target="_blank">VuePress</a> | `vuepress` | 用markdown写文档/博客
<a href="https://hexo.io/zh-cn/" target="_blank">Hexo</a> | `hexo` | 用markdown写文档/博客


### 1.10 测试、安全及加密
#### 1.10.1 单元测试
地址 | 标签 | 说明
---- | ---- | ----
<a href="https://mochajs.org/" target="_blank">MochaJS文档</a> | `mocha` | 一款单元测试工具。
<a href="https://jestjs.io/zh-Hans/" target="_blank">JestJS文档</a> | `jest` | 一款单元测试工具。

#### 1.10.2 安全及加密知识
<p><a href="https://cloud.tencent.com/developer/article/1136202" target="_blank">《浅谈前端安全》</a></p>
<p><a href="https://mawei.blog/post/frontend-security-vulnerabilities-part1/" target="_blank">《8大前端安全问题》</a></p>
<p><a href="https://juejin.im/post/5c452021518825242062979f" target="_blank">《前端加密那点事》</a></p>
<p><a href="https://zhuanlan.zhihu.com/p/38278311" target="_blank">《HTTPS 到底加密了什么？》</a></p>
<p><a href="https://juejin.im/post/5b6d579cf265da0f6e51a7e0" target="_blank">《Web 端反爬虫技术方案》</a></p>
<p><a href="https://juejin.im/entry/5bc93545e51d450e5f3dceff" target="_blank">《那些我们该讨论的前端加密方法》</a></p>


------------------

## 2.fe-tools方法/工具库

```
├─client    
│  ├─js
│  │  ├─functions
│  │  └─plugins
│  └─less
└─nodejs
    ├─base
    ├─imgbuild
    ├─pagebuild
    └─typicalbuild
        ├─react
        ├─vue
        ├─gulp+webpack		
        └─webpack
```


### 说明

### 2.1 client 客户端
前端开发常用样式、方法；

#### 2.1.1 js js方法、插件
##### functions js方法
- dom：DOM操作；
- native：验证、cookie、css、颜色/图片、平台、时间、url解析、storage封装等方法；

##### plugins js插件
- js：原生组件
	- alert 弹框
	- toast toast提示
	- keyboard-number 数字软键盘
	- pullRefresh 下拉刷新
- vue：vue组件
	- Alert弹窗
	- PullRefresh下拉刷新
	- Toast通知提示
- react：react组件
	- Alert弹窗
	- PullRefresh下拉刷新
	- Toast通知提示

#### 2.1.2 less 基础样式库
- pc：PC端
- mobile：移动端


### 3 nodejs 服务端、脚本
使用可见[ijijin-cli](https://www.npmjs.com/package/ijijin-cli)
使用可见[ijijin_builder](https://www.npmjs.com/package/ijijin_builder)

#### 3.1.1 base 方法
- fs：文件操作
- server：简易服务器
- util：其他工具

#### 3.1.2 pagebuild 页面构建

#### 3.1.3 typicalbuild 典型项目构建
- gulp+webpack
- webpack
- vue
- react



### 更新信息
- 2019.04.28：新增storage封装；新增下拉刷新、数字键盘原生组件；
