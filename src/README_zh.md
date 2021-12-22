# 大术专搜

<p align="center">大术专搜 👨‍💻　 既专又广 🗺️　 万列在手 🖱️ 任心点选</p>

以 **灵活**又**顺手** 的方式 在(切换) **任意一个** 或 **(连续)多个** 搜索引擎（或任意网站）进行搜索。

跨浏览器工具。引擎数据高度可自定义。

曾经，使用搜索引擎，是一步步、一个个来的。 🐢<br>
现在，使用搜索引擎，是高效、可并发操作的。 🚀

![signboard](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/signboard.jpg)

> 图标含意：篆书的「術」（术）字 + 代表搜索/查询的放大镜

## 相似工具和方法比较

[开源的多引擎网络搜索工具比较](https://github.com/garywill/BigSearch/blob/list/list.md)

（ **↑ 有经验的用户，看一个直观的功能横向比较表，可能快过以下诸多图文说明**）

## 使用

使用方式有：
   
1. 浏览器扩展（**推荐**）
   
   安装扩展以发挥所有功能
   
   - [Firefox Addon](https://addons.mozilla.org/firefox/addon/big-search/) 
   - [Chrome Addon](https://chrome.google.com/webstore/detail/big-search/ojcnjeigmgjaiolalpapfnmmhdmpjhfb) 或 [下载 .crx](https://gitlab.com/garywill/releaseapps-dl/-/tree/main)。 适用于：Google Chrome、Microsoft Edge、Brave、Vivaldi、Opera、搜狗浏览器、360浏览器 等 

2. 网页版：网页版功能稍有限，使用不如扩展方便。网页版可在手机浏览器使用
   - 主站： https://acsearch.ga
   - 备用站： http://acsearch.tk
   
   
   
## 截图与演示

| 截图                                                                                |                                                                                           |                                                                                   |                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 扩展UI  | 上下文菜单搜索选择内容 | 免安装网页使用 |
| ![screenshot_chi](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/chi.jpg) | ![screenshot_context](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/context.png) | ![screenshot_web](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/web.jpg) |
| 移动版(web) | (功能预告)多种外观主题 | 汉语辞典文献类别(嘿嘿～) |
| ![screenshot_mobile](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/mobile.jpg) | ![screenshot_themes](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/themes.jpg) | ![screenshot_han](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/han.jpg)  |

[Watch demo video](https://www.youtube.com/watch?v=hn5BkviAyvQ)

正努力地解决一切浏览器与搜索引擎之间的需求。<br>
让你最充分地利用不同的网络搜索引擎或查询系统。<br>
也可以作为注重搜索质量和广度的人的网络入口。

## 已收录引擎

[查看收录引擎列表](https://github.com/garywill/BigSearch/blob/list/list.md#list-of-build-in-search-engines-in-big-search)

## 特性

### 功能

- 🔎 可将任意搜索引擎、查询网站集于一处（连续）操作，任何支持**GET/POST**的网站。（**甚至**[兼容那些不支持GET/POST的](#Ajax说明)）
  > 例如 百度、Google、哔哩哔哩、网易云音乐、淘宝、有道、Github、IEEE、你家附近某图书馆（易于自定义）藏书查询 等。已收录50+个
- 🔎 用户添加**自定义**搜索引擎（[详情](#如何编辑搜索引擎)）（若在扩展中，可通过浏览器账号同步）
- 🔎 可调用**浏览器内联**的搜索引擎（浏览器扩展。因此你已添加进浏览器的搜索引擎可以直接用。目前仅Firefox提供）
- 🗂️ 引擎**分类**卡片
- 🖋️ 单行、**多行**输入及发送
  > 例如需要翻译文章段落时就很有用
- 📋 可保存、**复用**和管理你的输入历史（仅保存在浏览器本地localStorage）
- 🖱️ 快速将**选择**的网页上的文本作为搜索词（浏览器扩展，通过右键菜单）
  > - Firefox无痕模式中无
  > - Chrome中点了右键菜单后，需再点击工具栏中的图标
- 🖥️ 支持**桌面**设备（扩展或网页）和**移动**设备（仅网页）

### 安全性和隐私

  - 🛡️ 默认**最小权限**，仅在需要时请求敏感权限（浏览器扩展)
  - 🛡️ **纯客户端**功能完整，不需服务器，无搜集用户搜索内容（包括网页及扩展）
  - 🛡️ 默认隐藏HTTP Referrer以保护用户隐私
  - 🛡️ 浏览器扩展**不**向网页注入任何代码（除使用需要Ajax的引擎时外）

## 如何编辑搜索引擎

一般来说，只需要会简单的JSON，和GET/POST这一基本http request知识。

添加编辑一个搜索引擎的方法以下两者皆适用：
  1. 大术专搜内置搜索引擎
  1. 用户自定义的私人引擎

<p align="center">大术专搜 👨‍💻　万页在手 🗺️　　网之所询 🌐　无不可收</p>
  
### 例子

#### 简短形式

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
    }
}
```

</details>

### 编辑引擎数据说明

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
                "use_other_engine": {   // # 可选，使用另一个引擎来操作
                    "source": "bigsearch/user/browser",   // # 可选，另一个引擎的数据来源（3个可能来源数据库）：大术专搜内建库（缺省）/用户自定库/浏览器内置库
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

大术专搜的浏览器扩展支持这类只能通过Ajax进行的搜索。

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

## 技术特色

与其他同类工具相比，这个工具使用JSON格式作为引擎数据库（包括自带的及用户自定义的），因此在引擎数据方面具有强大的灵活性

![tech_diagram](https://gitlab.com/garywill/bigSearch/-/raw/screenshot/tech.png)

除了普通的对某一个搜索引擎进行单一操作外，还具有：

- 对于一个引擎，支持不同的操作（一引擎，多按钮）
- 对用户输入进行字符串格式化
- 调用引擎库中的另一个引擎中的某一按钮动作，以实现对某一本身不支持搜索的网站进行搜索
- 支持 Ajax-only 的网站

因此，它**比同类工具更能让技术型人群满意**。

当然，**普通人也完全可以轻松使用**。

## 计划

- 能够在浏览器（原生）侧边栏使用（要先改进布局问题。需要响应式）
- 套壳做个桌面app，调用用户指定的浏览器
- 增加非搜索导航功能
- 兼容OpenSearch
- 在终端内调用的CLI

## For Developers

> 用户使用了JSON自定义引擎后，我们鼓励用户也将数据提交回上游源代码。引擎数据为AGPL自由代码。

> `enginesdata.js`是收录搜索引擎的数据，若要添加搜索引擎使被收录，往这里添加。

### 国际化

<details>

因为目前只有中英2种语言，尚未使用任何框架，只用了一个简单函数实现多语言。

对于要多语言的字符串（单独是英文也行），使用JS函数`i18n()`，其输入参数可以是：

- 一个字符串数组（仅中文及英文两种语言时用）。`[0]`内为中文，`[1]`内为英文
- 一个Object如 `{zh: "这是中文, en: "这是英文", fr: "这是法文"}`

该函数执行时会返回对应语言的一个字符串

如果你想添加一个仅针对某一语言用户的搜索引擎，可以在引擎数据中使用`visible_lang`，以使它只对某语言可见。

</details>

### 采用的第三方库和组件

<details>

- [LZ-UTF8.js](https://github.com/rotemdan/lzutf8.js) (compression)
  
  ```
  Copyright (c) 2021, Rotem Dan
  Released under the MIT license.
  ```
- [Floggy Lake](https://www.pexels.com/photo/foggy-lake-2166695/) (background photo)
  
  by Quang Nguyen Vinh
  
- [Unicons icon](https://github.com/Iconscout/unicons) 

  Unicons by [Iconscout](https://iconscout.com/)
  
</details>

### 历史、代码状况、许可证

<details>

这工具的代码一部分最早可追溯到2008年左右。2015年首次将网页功能发布在网上可公开使用。2020年代初，才发现webExtension和JS已经标准化，于是做出了浏览器扩展版本。（是的，慢慢地发展，不是全职的）

核心部分有过重构。尽管UI部分有些代码不能叫很好，但**这个东西一直很好用**。喜欢还请不吝Star🌟。

已给了搜索引擎数据`enginesdata.js`AGPL自由许可（欢迎来添加引擎数据哦🌱。或者，你觉得有什么比AGPL更适合这些数据的许可🍀）。若需要整个项目的自由许可，欢迎讨论💚（open an issue）。

[Change log](https://addons.mozilla.org/firefox/addon/big-search/versions/)

</details>
