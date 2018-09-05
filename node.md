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
