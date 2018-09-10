## 工具 vscode 
- 用 vsCode 开发微信小程序可以配置以下插件，开发起来更方便： 
1. vscode weapp api 
2. vscode wxml 
3. vscode-wechat 
4. Easy WXLESS 
5. wxss 
## vscode 可以less 的参考文档
 - https://www.jianshu.com/p/327fef0d709a

###### appid 
```
wx07d08b885d545ad3
```
## app 
- app.js  全局 js
- app.json 全局 配置文件
- app.wxss 全局样式
## 1.可以手动配置一个文件夹，在 app.json中， 
.代码如下。保存后可以 自动》 生成文件夹和标准的文件 .
. pages/welcome 是文件夹， 后面是 内容
```
{
    "pages":[
        "pages/welcome/welcome"
    ]
}

```
# text 有内容 就要用text标签，作用是 可以手机端 可以复制

## wxcss样式。
    ```

    ```
## 关于css单位，  rpx === 1rpx 相当于  iphone6的 2px
. w 750rpx=100%
- 高度用 rpx
- 

## 导航条样式 
- 在全局json中 打 window 然后回车，就会自动 补全所有属性。

## 点击安钮进入一个页面 
-  在全局的json中配置一个页面
- 第一个就是默认打开的页面
```
"pages":[
        "pages/app/app",
        "pages/home/home"
    ],
```
### 绑定事件
- bindtap 可以冒泡
- catchtap 不可以冒泡

### 页面跳转 ??? 
- 如果有tab 就有 wx.switchTab 才会出现 下面的tab 否则  
- 还有一种 带返回按钮的 wx.navigateTo

## 数据绑定 用 block => wx:for  ,遍历的时候，console.log 会 wx:key
```
 <block wx:for="{{imgUrls}}">
    <swiper-item>
      <image  src="{{item}}" class="slide-image" class='img'/>
    </swiper-item>
  </block>
```

### 改变初始值 用
```
  setData({

  })
```

### 抽出公共 模快  
 - 案例 在home下共用。  在home -> list.tmpl 
 - 只支持  wxss 与 wxml 别的不起作用

 ### 引用一个公用模版
```
 // 导入 
 <import src="list-tmpl/list-tmpl.wxml" />

 //引用
  <template is="list" data="{{item}}"></template>
```
### 样式引入

```
 @import "list-tmpl/list-tmpl.wxss";
```

### 点击 列表 到 到详情页 传参
- 在列表在 自定义一个 data-id 
- e事件源 
```
  //e e.target
  // 跳转路径是相对的，不用后缀，也可以跳
```
###  详情页 拿 id
```
 //根据id 找到当前的 数据 
  find
```

### 简化 list 模板 遍历的时候， 省去 item
 -  可以在 上一级的 传的时候  [...item], 


### 明天 播放器37:13 ?? 第二个视频 
```
```
### 记事本 表单
- scroll 滚动条
- flex 的布局？ --------
- 缓存 sess 
- 在input 上绑定方法 bindinput , 用户输入就触发。 
```
val1
val2
```
## 样式 flex
```
   flex-direction: column;
```
### 绑定方法有**********
```
 bindinput
 bindtap
 catchtap
```
### 缓存

## 事件
- navigateBack 页面返回
- onShow 页面返回会加载。 而onLoad，页面返回不会加载 所以写事件时候注意
- bindscrolltolower > scroll-view 中的事件 滚动到底部触发的事件
- onPullDownRefreash 监听页面刷新的事件
- wx.stopPullDownRefresh(); 停止页面下拉刷新的

## wx 下的方法
- wx.showTost 只是提示，没有 组织。没有回调函数，

## 用的js方示
- reverse 翻转
- 
## 页面下拉刷新 在jons中配置
```
  {
  "enablePullDownRefresh": true, 
  "backgroundColor": "#404040",
  "backgroundTextStyle": "dark"
  
}
```
### picker 滑块
```
```
### 动画 animation

### wx.request 请求, 在开发环境下
- 工具-详情- 把 不校验域名 勾选，否则会请求不通， 域名不备份的情况下
- 免费接口 apistore.baidu.com

#### 关于icon的 基本，样式。大小，颜色