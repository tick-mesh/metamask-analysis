# 浏览器插件

由于本系列讲解的是浏览器插件钱包的源码，所以在开始你需要先了解浏览器插件开发的相关知识。

你可以继续阅读下面的内容进行学习或者直接去[Chrome extensions](https://developer.chrome.com/docs/extensions/)深入学习


## 配置文件

每个浏览器插件都有一个 manifest.json 配置文件, 其中记录了该插件的相关信息。

例如:

```json
{
  "name": "my-extension",
  "description": "first chrome extension",
  "version": "0.1",
  "manifest_version": 3,
  "author": "lybenson"
}
```

- name: 插件名称
- description: 插件描述
- version: 插件版本号
- manifest_version: manifest支持的属性版本, 2 或 3

配置明细: https://developer.chrome.com/docs/extensions/mv3/manifest/

下面将依次介绍配置文件中的属性:

### action

[chrome.action](https://developer.chrome.com/docs/extensions/reference/action/#injecting-a-content-script-on-click) 控制浏览器工具栏中的插件图标相关


```json
{
  "name": "Action Extension",
  ...
  "action": {
    "default_icon": {              // optional
      "16": "images/icon16.png",   // optional
      "24": "images/icon24.png",   // optional
      "32": "images/icon32.png"    // optional
    },
    "default_title": "Click Me",   // optional, shown in tooltip
    "default_popup": "popup.html"  // optional
  },
  ...
}
```

- default_icon: 定义了不同浏览器尺寸下该插件的图标
- default_title: 鼠标放在插件图标上显示的文字
- default_popup: 点击图标时的弹窗


