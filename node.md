## 工具 vscode 
- 用 vsCode 开发微信小程序可以配置以下插件，开发起来更方便： 
1. vscode weapp api 
2. vscode wxml 
3. vscode-wechat 
4. Easy WXLESS 
5. wxss 
## vscode 可以less 的参考文档
 - https://www.jianshu.com/p/327fef0d709a


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
```
###  详情页 拿 id
```
 //根据id 找到当前的 数据 
  find
```

### 简化 list 模板 遍历的时候， 省去 item
 -  可以在 上一级的 传的时候  [...item], 


### 明天 播放器37:13