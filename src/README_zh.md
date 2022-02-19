[![firefox](https://img.shields.io/amo/v/big-search?style=flat-square&color=success)](https://addons.mozilla.org/firefox/addon/big-search/) [![chrome](https://img.shields.io/chrome-web-store/v/ojcnjeigmgjaiolalpapfnmmhdmpjhfb?style=flat-square&color=success)](https://chrome.google.com/webstore/detail/big-search/ojcnjeigmgjaiolalpapfnmmhdmpjhfb) [![](https://img.shields.io/badge/dynamic/json?labelColor=dimgray&style=flat-square&color=inactive&label=ms%20edge%20%28NO%20update%29&prefix=v&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fpdmlapcmibobkkchijgfeongemmepkbc)](https://microsoftedge.microsoft.com/addons/detail/pdmlapcmibobkkchijgfeongemmepkbc) ![](https://img.shields.io/github/languages/code-size/garywill/BigSearch)

# 大术专搜

<p align="center">大术专搜 👨‍💻　 既专又广 🗺️　 手中万列 🖱️ 任心点选</p>

以 **灵活**又**顺手** 的方式 在(切换) **任意一个** 或 **(连续)多个** 搜索引擎（或任意网站）进行搜索，并带有些“**独门特技**”的工具。

![signboard](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/signboard.jpg)

> 图标含意：篆书的「**術**」（术）字 + 代表搜索/查询的放大镜

<!--ts-->
   * [开始安装使用](#开始安装使用)
   * [基本功能演示与截图](#基本功能演示与截图)
   * [功能及特性](#功能及特性)
      * [基本](#基本)
      * [更多](#更多)
      * [还有更多：特别之处](#还有更多特别之处)
      * [隐私安全](#隐私安全)
   * [已收录引擎](#已收录引擎)
   * [相似工具和方法比较](#相似工具和方法比较)
   * [如何编辑搜索引擎](#如何编辑搜索引擎)
      * [例子](#例子)
         * [简短形式](#简短形式)
         * [完整形式](#完整形式)
      * [编辑引擎数据说明](#编辑引擎数据说明)
         * [数据说明](#数据说明)
         * [Ajax说明](#ajax说明)
   * [For Developers](#for-developers)
      * [What's Next Step?](#whats-next-step)
      * [技术框图](#技术框图)
      * [采用的第三方库和组件](#采用的第三方库和组件)
      * [国际化](#国际化)
      * [历史、代码状况、许可证](#历史代码状况许可证)
<!--te-->

## 开始安装使用

使用方式有：

1. 浏览器扩展（**推荐**）
   - [Firefox Addon ![](https://img.shields.io/amo/v/big-search?style=flat-square&color=success)](https://addons.mozilla.org/firefox/addon/big-search/)
   - [Chrome Addon ![](https://img.shields.io/chrome-web-store/v/ojcnjeigmgjaiolalpapfnmmhdmpjhfb?style=flat-square&color=success)](https://chrome.google.com/webstore/detail/big-search/ojcnjeigmgjaiolalpapfnmmhdmpjhfb)  或 [下载 .crx](https://gitlab.com/garywill/releaseapps-dl/-/tree/main)。 适用于：Google Chrome、Microsoft Edge、Brave、Vivaldi、Opera、搜狗浏览器(部分)、360浏览器(部分) 等 

2. 网页版：演示作用为主，网页版不能像扩展一样完全工作。网页版可在手机浏览器使用
   - 主站： [https://acsearch.ga ![](https://img.shields.io/website?down_message=repairing&style=flat-square&up_color=blue&url=https%3A%2F%2Facsearch.ga)](https://acsearch.ga)
   - 备用站： [http://acsearch.tk ![](https://img.shields.io/website?down_message=repairing&style=flat-square&up_color=blue&url=http%3A%2F%2Facsearch.tk)](http://acsearch.tk)

## 基本功能演示与截图

| 使用扩展                                                                              | 可选UI风格 朴素及丰富                                                                            |  |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![chi](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/chi.jpg)   | ![themes](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/themes.jpg)   |   |
| 搜索选择内容    | 免安装网页试用                                                                           | 移动版(试验)(web)  | 
| ![context](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/context.png) | ![web](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/web.jpg) | ![mobile](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/mobile.jpg) | 
| 编辑搜索引擎 | 特别搜索方式 灵活、可扩展 |  | 
| ![edit](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/edit.png) | ![edit-add](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/edit-add.png) |  | 

![demo_gif](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/demo.gif)

## 功能及特性

### 基本

- 🔎 可将任意搜索引擎、查询网站集于一处操作(连续)。任何支持**GET/POST**的网站
  > 例如 百度、Google、哔哩哔哩、网易云音乐、淘宝、有道、Github、IEEE、你家附近某店货物查询（如果有）等。可自定义。已收录50+个
- 🔎 用户添加**自定义**搜索引擎（[详情](#如何编辑搜索引擎)）（在扩展中可同步）
- 🔎 可调用**浏览器内联**的搜索引擎（扩展。因此已加进浏览器的可直接用。仅Firefox）

### 更多

- 🖋️ 单行、**多行** 文本编辑（输入）及发送
  > 例如需要翻译文章段落时就很有用
- 🗂️ 引擎**分类**卡片
- 📋 可保存、**复用**和管理你的输入历史（仅保存在浏览器本地localStorage）
- 🖱️ 快速将**选择**的网页上的文本作为搜索词（扩展。右键菜单）
  > - Firefox无痕模式中无 ([bug 1380812](https://bugzilla.mozilla.org/show_bug.cgi?id=1380812)).
  > - Chrome中点了右键菜单后，再点击工具栏中的图标（或使用快捷键） （[Chrome的缺陷](https://stackoverflow.com/questions/54189283/chrome-extension-open-popup-from-contentscript-file#comment95207111_54189283)）
- ⌨️ **快捷键**（浏览器扩展）
  - 唤出界面。Firefox: `Ctrl+Alt+S`  Chrome及其他：`Ctrl+Shift+S` 
  - 将选择文本设定为搜索词（然后再使用唤出界面）。Firefox: `Ctrl+Alt+D`  Chrome及其他：`Ctrl+Shift+D`
  > [Firefox更改](https://bug1303384.bmoattachments.org/attachment.cgi?id=9051647) | Chrome更改 `chrome://extensions/shortcuts` 
- 🖥️ 支持**桌面**设备（扩展或网页）和**移动**设备（网页）

### 还有更多：特别之处

- 🔎 **甚至兼容**那些**不**对外开放GET/POST接口（称为Ajax-only）的网站（[详情](#Ajax说明)）
- 🔎 可以一个按钮一次调用多个操作
- ✨ 好看强大的同时，非常**轻量级**（[详情](#采用的第三方库和组件)）
- 💪 使用统一的**JSON**作为引擎数据库（包括 内置的 及 用户自定义的）。在引擎数据方面的强大的**灵活性**：（[详情](#编辑引擎数据说明)）
  - 🔲 **一引擎，多按钮**：对于一个引擎，可以支持不同的操作。（各按钮继承引擎的数据，并且按钮之下的某些键值可覆盖引擎名下的键值数据作用）
  - 📞 **跨引擎**调用：可调用另一引擎（中的某一按钮）动作
  - 🔏 可针对引擎需要，对用户输入进行字符串格式化，或字符替换
  - 🔎 若适当结合利用以上两点，可对某一不支持搜索的网站进行搜索

### 隐私安全

- 🛡️ 默认**最小权限**，仅在需要时请求敏感权限（浏览器扩展)
- 🛡️ **纯客户端**功能完整，不需服务器。**无**搜集用户搜索内容或广告兴趣分析等（包括网页及扩展）
- 🛡️ 默认隐藏HTTP Referrer以保护用户隐私
- 🛡️ 浏览器扩展**不**向网页注入任何代码（除使用Ajax-only的引擎时外）

## 已收录引擎

[查看收录引擎列表](https://github.com/garywill/BigSearch/blob/list/list.md#list-of-build-in-search-engines-in-big-search)

## 相似工具和方法比较

[开源的多引擎网络搜索工具比较](https://github.com/garywill/BigSearch/blob/list/list.md)

有经验的用户可以看直观的横向比较，快速了解一些其“独门”特色

## 如何编辑搜索引擎

只使用基本功能的普通用户可以直接打开[在线GUI引擎编辑工具（link1）](https://acsearch.ga/editengine.php) （[link2](http://acsearch.tk/editengine.php)）。

以下讲述JSON格式的编辑引擎说明。使用JSON能够发挥所有功能。方法以下两者皆适用：

1. 用户自定义的私人引擎
2. 大术专搜内置搜索引擎（`enginesdata.js`）

<p align="center">大术专搜 👨‍💻　万页在手 🗺️　　网之所询 🌐　无不可收</p>

### 例子

#### 简短形式

只需要很简单的JSON，及基本HTTP `GET Method`知识。

```yaml
{
    "百度": "https://www.baidu.com/s?wd={0}",
    "Google": "https://www.google.com/search?q={0}",
    "Yahoo Search": "https://search.yahoo.com/search?q={0}"
}
```

#### 完整形式

使用完整形式有机会发挥本工具所有功能。

亦支持将 简短形式 和 完整形式 混合使用。

<details>
<summary>完整形式例子</summary>

```yaml
{
    "yahoo": {
        "dname": "Yahoo Search",
        "addr": "https://search.yahoo.com",
        "action": "https://search.yahoo.com/search",
        "kw_key": "q"
    },

    "google": {
        "dname": "Google",
        "addr": "https://www.google.com",
        "action": "https://www.google.com/search",
        "kw_key": "q",
        "btns": {
            "search": {
                "label": "Google Search"
            },
            "lucky": {
                "label": "I'm Feeling Lucky",
                "params": [
                    {"key":"btnI", "val": "1"}
                ]
            }
        }
    },

    "label_cptsw" : { "lstr": "Computer Software" },
    "flathub": {
        "dname": "Flathub",
        "addr": "https://flathub.org/apps",
        "btns": {
            "search": {
                "label": "Search",
                "full_url": "https://flathub.org/apps/search/{0}"
            }
        }
    },

    "label_mbap" : { "lstr": "Mobile App" },
    "itunesapps": {
        "dname": "iTunes Apps (Google)",
        "addr": "https://www.apple.com/itunes/charts/free-apps/",
        "btns": {
            "search_apps": {
                "label": "Search Apps",
                "use_other_engine": {
                    "engine": "google",
                    "btn": "search"
                },
                "kw_format": "{0} site:apple.com/*app"
            }
        }
    },

    "label_usaj": { "lstr": "Engine with Ajax" },
    "chrome_ext_dev": {
        "dname": "Chrome Ext Dev Doc",
        "addr": "https://developer.chrome.com/docs/extensions/reference/",
        "action": "https://developer.chrome.com/docs/extensions/reference/",
        "ajax": ".search-box__input"
    },

    "label_many": { "lstr": "Many Engines at once" },
    "many_once" : {
        "dname": "Many Engines at once",
        "btns": {
            "gg_ddg": {
                "label": "Google + DDG",
                "use_other_engine": ["google", "duckduckgo"]
            }
        }
    }
}
```

</details>

### 编辑引擎数据说明

#### 数据说明

JSON格式。

使用 完整形式 的引擎数据可以包含以下键值：

<details>
<summary>数据说明</summary>

```yaml
// # 按钮之下的某些键值可覆盖引擎名下的键值
{
    "引擎名": {
        "dname": "引擎显示名字", 
        "addr": "主页URL", 
        "tip": "引擎提示文字",  // # 可选
        "action": "默认操作url", 
        // # 例如，https://search-engine.com/search?q=输入内容，
        // # 则action为https://search-engine.com/search
        "kw_key": "query string中关键字的键名", // # 上例中，此处为q
        "allow_referer": false, // # false(default)/true 可选
        "method": "get/post",  // # 默认为get
        "charset": "UTF-8/gb2312/gb18030/big5/....", // # 默认UTF-8
        "kw_replace": [ [" ", "-"] ] ,  // # 可选，关键字中需要替换的字符，此例将空格替换为'-'
        "kw_format": "格式化关键字{0}后的样子", // # 可选. {0}即常见的%s

        "btns": {  // # 若没有此项，则显示一个"搜索"按钮，点击按钮为默认行动
            "按钮名": {
                "label": "按钮显示文字",
                "btn_tip": "提示文字",
                "params":[   // # 可选，该操作所需的query string中关键字之外的键和值
                    {"key": "键", "val": "值"},
                    // # 例如，https://search-engine.com/search?q=输入内容&option=searchall
                    // # 则 {key: "option", val: "searchall"},
                ],
                "full_url": "http://www.example.com/search/{0}",   // # 可选，使用get method时的整个url
                "use_other_engine": {   // # 可选，使用另一个引擎来操作。（如果是个数组，则可一次调用多个操作）
                    "dbname": "bigsearch/user/browser",   // # 可选，另一个引擎的数据来源（3个可能来源数据库）：大术专搜内建库（缺省）/用户自定库/浏览器内置库
                    "engine": "引擎名", 
                    "btn": "按钮名"    // # 可选。无则使用第一个按钮
                },
                "ajax": ......  // # 可选。详见专门的Ajax说明
            },

        }
    },
    ......
};
```

</details>

#### Ajax说明

有些网站无GET或POST，需要打开它们的页面后再输入，然后它们通过Ajax的形式展现搜索结果。

大术专搜的浏览器扩展支持这类只能通过Ajax进行的搜索，并极易配置。

<details>
<summary>Ajax说明</summary>

例1：指定输入框的querySelector，并进行关键词输入，模拟回车动作

```yaml
"ajax": "#search-box-input"
```

例2：先延时2s，输入，再延时1s，然后模拟点击按钮

```yaml
"ajax": [2000, "#search-box-input", 1000, "#submit-button"]
```

</details>

## For Developers

> 用户使用了JSON自定义引擎后，我们鼓励用户也将数据提交回上游源代码。引擎数据为AGPL自由代码。

> `enginesdata.js`是收录搜索引擎的数据，若要添加搜索引擎使被收录，往这里添加。

### What's Next Step?

目前可见的一些改进、完善、发展空间：

- 完善编辑引擎的在线GUI (vue)
- Omnibox 
- 能够在浏览器（原生）侧边栏使用（要先改进布局问题。需要响应式）
- 套壳做个桌面app，调用用户指定的浏览器
- 手机原生App（any ideas?)
- 增加非搜索导航功能
- 兼容OpenSearch等，一键自动添加或转换
- 在终端内调用的CLI（nodejs）

### 技术框图

<details>

![tech_diagram](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/tech.png)

</details>

### 采用的第三方库和组件

**快速**且**轻量**: 不使用任何大型库或框架。尽管UI既有简洁又有丰富风格，所有主要功能和UI皆是纯JS+CSS。  ![](https://img.shields.io/github/languages/code-size/garywill/BigSearch)

<details>

- [LZ-UTF8.js](https://github.com/rotemdan/lzutf8.js) (81kB not minified. Data compression library, only for user-custom engines sync)
  
  ```
  Copyright (c) 2021, Rotem Dan
  Released under the MIT license.
  ```

- [Foggy Lake](https://www.pexels.com/photo/foggy-lake-2166695/) (37kB webp. Default background photo)
  
  by Quang Nguyen Vinh

- [Unicons icon](https://github.com/Iconscout/unicons) (svg)
  
  Unicons by [Iconscout](https://iconscout.com/)

</details>

### 国际化

<details>

因为目前只有中英2种语言，尚未使用任何框架，只用了一个简单函数实现多语言。

对于要多语言的字符串（单独是英文也行），使用JS函数`i18n()`，其输入参数可以是：

- 一个字符串数组（仅中文及英文两种语言时用）。`[0]`内为中文，`[1]`内为英文
- 一个Object如 `{zh: "这是中文, en: "这是英文", fr: "这是法文"}`

该函数执行时会返回对应语言的一个字符串

如果你想添加一个仅针对某一语言用户的搜索引擎，可以在引擎数据中使用`visible_lang`，以使它只对某语言可见。

</details>

### 历史、代码状况、许可证

<details>

这工具的代码一部分最早可追溯到2008年左右。2015年首次将网页功能发布在网上可公开使用。2020年代初，才发现webExtension和JS已经标准化，于是做出了浏览器扩展版本并开了Github repo。（是的，慢慢地发展，不是全职的）

有过（并可能仍会有）重构。尽管部分代码仍有岁月的痕迹，但**一直很现代并很好用**。

已给了搜索引擎数据`enginesdata.js`AGPL自由许可（欢迎来添加引擎数据哦🌱。或者，你觉得有什么比AGPL更适合这些数据的许可🍀）。若需要整个项目的自由许可，欢迎讨论💚（open an issue）。

[Change log](https://addons.mozilla.org/firefox/addon/big-search/versions/)

</details>
