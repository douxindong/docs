(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{79:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"jpush-sdk魅族通道集成指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jpush-sdk魅族通道集成指南"}},[t._v("#")]),t._v(" JPush SDK魅族通道集成指南")]),t._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("p",[t._v("在国内 Android 生态中，推送通道都是由终端与云端之间的长链接来维持，严重依赖于应用进程的存活状态。如今一些手机厂家会在自家 rom 中做系统级别的推送通道，再由系统分发给各个 app，以此提高在自家 rom 上的推送送达率。")]),t._v(" "),n("p",[t._v("JPush SDK 为了尽可能提高开发者在各类 rom 上的推送送达率，对使用 魅族 的设备推送，自动切换到魅族通道。同时，为了保证 SDK 的易用性，原本 JPush 的所有接口调用逻辑都不用修改,JPush 会对自身支持的功能做兼容.只需在manifest中配置上魅族 SDK 必须的配置组件即可。")]),t._v(" "),n("h2",{attrs:{id:"功能描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("JPush 初始化的时候可选择是否初始化魅族通道。")])]),t._v(" "),n("li",[n("p",[t._v("在 魅族 设备上 JPush 通道与 魅族 通道共存.")])]),t._v(" "),n("li",[n("p",[t._v("魅族通道初始化后支持 tag/alias 这些 JPush 原有的功能,其它的 JPush 未支持的功能目前暂时还不可用 .")])])]),t._v(" "),n("p",[n("em",[n("strong",[t._v("注1：")])]),t._v(" 在flyme5.1.11.1及以上才使用 mzpush,因为之前的版本上 mzpush 的通道并非系统通道。")]),t._v(" "),n("h2",{attrs:{id:"手动集成步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手动集成步骤"}},[t._v("#")]),t._v(" 手动集成步骤")]),t._v(" "),n("p",[t._v("主要步骤为:")]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"#4.1"}},[t._v("4.1. 增加魅族插件包及魅族推送包")])])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#4.2"}},[t._v("4.2. 修改 minSdkVersion 的值")])])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#4.3"}},[t._v("4.3. 配置魅族推送sdk所需要的权限")])])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#4.4"}},[t._v("4.4. 配置JPush接受魅族sdk的消息接受类")])])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#4.5"}},[t._v("4.5. 将MEIZUAPPKEY与MEIZUAPPID替换为在魅族后台注册对应该应用 的AppKey/AppID ")])])])]),t._v(" "),n("p",[t._v("####")]),n("h3",{attrs:{id:"4.1"}},[t._v(" 4.1. 增加魅族插件包及魅族推送包 ")]),n("p"),t._v(" "),n("ul",[n("li",[t._v("将third-push目录下找到meizu目录，从libs中拷贝其中的jar包至工程的libs目录下。")]),t._v(" "),n("li",[t._v("将third-push目录下找到res目录，从res中所有的资源文件拷贝至工程的res目录下。")]),t._v(" "),n("li",[t._v("jar包说明：")]),t._v(" "),n("li",[t._v("jpush-android-plugin-meizu-v3.x.x.jar:插件包")]),t._v(" "),n("li",[t._v("meizu-push-x.x.x.jar:魅族推送包")])]),t._v(" "),n("p",[n("em",[n("strong",[t._v("注1：")])]),t._v(" 极光集成魅族通道在 JPush Android SDK 3.0.6 添加。")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("注2：")])]),t._v(" JPush Android SDK 3.2.0添加了魅族推送包，对应的魅族sdk版本为：meizu-push-3.8.1.jar")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("注3：")])]),t._v(" JPush Android SDK 3.6.0更新了魅族推送包，对应的魅族sdk版本为：meizu-push-3.9.0.jar")]),t._v(" "),n("h4",{attrs:{id:"_4-2-修改-minsdkversion-的值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-修改-minsdkversion-的值"}},[t._v("#")]),t._v(" "),n("h3",{attrs:{id:"4.2"}},[t._v(" 4.2. 修改 minSdkVersion 的值")])]),t._v(" "),n("p",[n("em",[n("strong",[t._v("注:")])]),t._v(" 魅族推送 会强制将 minSdkVersion 修改为 11。如果当前 app 使用的 minSdkVersion 的值小于 11,则需要使用 tools 避免被强制覆盖。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\t<manifest\n\t\txmlns:android="http://schemas.android.com/apk/res/android"\n\t\txmlns:tools="http://schemas.android.com/tools"\n\t... >\n\n\t<uses-sdk\n\t\tandroid:minSdkVersion="9"\n\t\tandroid:targetSdkVersion="21"\n\t\ttools:overrideLibrary="cn.jpush.android.thirdpush.meizu" />\n\n')])])]),n("h4",{attrs:{id:"_4-3-配置魅族推送sdk所需要的权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-配置魅族推送sdk所需要的权限"}},[t._v("#")]),t._v(" "),n("h3",{attrs:{id:"4.3"}},[t._v(" 4.3. 配置魅族推送sdk所需要的权限")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n\t<uses-permission android:name="com.meizu.c2dm.permission.RECEIVE" />\n\t<permission\n\t\tandroid:name="您应用的包名.permission.C2D_MESSAGE"\n\t\tandroid:protectionLevel="signature"></permission>\n\t<uses-permission android:name="您应用的包名.permission.C2D_MESSAGE" />\n\n')])])]),n("h4",{attrs:{id:"_4-4-配置魅族推送sdk所需要的必要组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-配置魅族推送sdk所需要的必要组件"}},[t._v("#")]),t._v(" "),n("h3",{attrs:{id:"4.4"}},[t._v(" 4.4. 配置魅族推送sdk所需要的必要组件")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('        <service\n            android:name="com.meizu.cloud.pushsdk.NotificationService"\n            android:exported="true" />\n\n        <receiver\n            android:name="com.meizu.cloud.pushsdk.SystemReceiver"\n            android:exported="false" >\n            <intent-filter>\n                <action android:name="com.meizu.cloud.pushservice.action.PUSH_SERVICE_START" />\n\n                <category android:name="android.intent.category.DEFAULT" />\n            </intent-filter>\n        </receiver>\n\n\n')])])]),n("h4",{attrs:{id:"_4-5-配置jpush接受魅族sdk的消息接受类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-配置jpush接受魅族sdk的消息接受类"}},[t._v("#")]),t._v(" "),n("h3",{attrs:{id:"4.5"}},[t._v(" 4.5. 配置JPush接受魅族sdk的消息接受类")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\t<receiver android:name="cn.jpush.android.service.PluginMeizuPlatformsReceiver">\n\t\t<intent-filter>\n\t\t\t\x3c!-- 接收 push 消息 --\x3e\n\t\t\t<action android:name="com.meizu.flyme.push.intent.MESSAGE" />\n\t\t\t\x3c!-- 接收 register 消息 --\x3e\n\t\t\t<action android:name="com.meizu.flyme.push.intent.REGISTER.FEEDBACK" />\n\t\t\t\x3c!-- 接收 unregister 消息--\x3e\n\t\t\t<action android:name="com.meizu.flyme.push.intent.UNREGISTER.FEEDBACK" />\n\t\t\t\x3c!-- 兼容低版本 Flyme3 推送服务配置 --\x3e\n\t\t\t<action android:name="com.meizu.c2dm.intent.REGISTRATION" />\n\t\t\t<action android:name="com.meizu.c2dm.intent.RECEIVE" />\n\n\t\t\t<category android:name="您应用的包名"></category>\n\t\t</intent-filter>\n \t</receiver>\n\n')])])]),n("p",[n("em",[n("strong",[t._v("注")])]),t._v(" 对于同一个应用集成了多个推送SDK，且其他SDK也使用了魅族通道的用户：\n可以将这个极光内置的Receiver，换成自己定义的Receiver。\n这个Receiver必须继承魅族的com.meizu.cloud.pushsdk.MzPushMessageReceiver\n且在每个回调方法，都回调给极光的PluginMeizuPlatformsReceiver。类似于这样：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public class MyMZPushReceiver extends MzPushMessageReceiver {\n\n    final PluginMeizuPlatformsReceiver receiver = new PluginMeizuPlatformsReceiver();\n\n    @Override\n    public void onReceive(Context context, Intent intent) {\n        receiver.onReceive(context, intent);\n    }\n\n    @Override\n    public void onRegister(Context context, String s) {\n        receiver.onRegister(context, s);\n    }\n\n    @Override\n    public void onMessage(Context context, String s) {\n        receiver.onMessage(context, s);\n    }\n\n    @Override\n    public void onNotificationArrived(Context context, MzPushMessage mzPushMessage) {\n        receiver.onNotificationArrived(context, mzPushMessage);\n    }\n\n    @Override\n    public void onNotificationClicked(Context context, MzPushMessage mzPushMessage) {\n        receiver.onNotificationClicked(context, mzPushMessage);\n    }\n\n\n    @Override\n    public void onUnRegister(Context context, boolean b) {\n        receiver.onUnRegister(context, b);\n    }\n\n    @Override\n    public void onPushStatus(Context context, PushSwitchStatus pushSwitchStatus) {\n        receiver.onPushStatus(context, pushSwitchStatus);\n    }\n\n    @Override\n    public void onRegisterStatus(Context context, RegisterStatus registerStatus) {\n        receiver.onRegisterStatus(context, registerStatus);\n    }\n\n    @Override\n    public void onUnRegisterStatus(Context context, UnRegisterStatus unRegisterStatus) {\n        receiver.onUnRegisterStatus(context, unRegisterStatus);\n    }\n\n    @Override\n    public void onSubTagsStatus(Context context, SubTagsStatus subTagsStatus) {\n        receiver.onSubTagsStatus(context, subTagsStatus);\n    }\n\n    @Override\n    public void onSubAliasStatus(Context context, SubAliasStatus subAliasStatus) {\n        receiver.onSubAliasStatus(context, subAliasStatus);\n    }\n\n    @Override\n    public void onUpdateNotificationBuilder(PushNotificationBuilder pushNotificationBuilder) {\n        receiver.onUpdateNotificationBuilder(pushNotificationBuilder);\n    }\n}\n\n")])])]),n("h4",{attrs:{id:"_4-6-将meizuappkey与meizuappid替换为在魅族后台注册对应该应用-的appkey-appid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-将meizuappkey与meizuappid替换为在魅族后台注册对应该应用-的appkey-appid"}},[t._v("#")]),t._v(" "),n("h3",{attrs:{id:"4.6"}},[t._v(" 4.6. 将MEIZUAPPKEY与MEIZUAPPID替换为在魅族后台注册对应该应用 的AppKey/AppID ")])]),t._v(" "),n("p",[t._v("将应用对应的魅族的 appkey 和 appid 加上前缀“MZ-”,填加在 meta-data 标签中")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\t<meta-data\n\t\tandroid:name="MEIZU_APPKEY"\n\t\tandroid:value="MZ-您的应用对应的魅族的APPKEY" />\n\t<meta-data\n\t\tandroid:name="MEIZU_APPID"\n\t\tandroid:value="MZ-您的应用对应的魅族的APPID" />\n\n')])])]),n("h2",{attrs:{id:"使用-jcenter-自动化集成步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-jcenter-自动化集成步骤"}},[t._v("#")]),t._v(" 使用 JCenter 自动化集成步骤")]),t._v(" "),n("ul",[n("li",[t._v("确认android studio的 Project 根目录的主 gradle 中配置了jcenter支持。(新建project默认配置就支持)")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\tbuildscript {\n\t\trepositories {\n\t\tjcenter()\n\t\t}\n\t\t......\n\t}\n\n\n\tallprojets {\n\t\trepositories {\n\t\tjcenter()\n\t\t}\n\t}\n\n")])])]),n("ul",[n("li",[t._v("在应用 module 的 gradle 中 dependencies 节点添加如下代码:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\tdependencies {\n\t\tcompile 'cn.jiguang.sdk.plugin:meizu:3.x.x'\n\t}\n\n")])])]),n("ul",[n("li",[t._v("在应用 module 的 gradle 中 defaultConfig 节点添加如下代码:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\tmanifestPlaceholders = [\n   \t\t// 设置manifest.xml中的变量\n   \t\tMEIZU_APPKEY : "MZ-0956b96085d54c6087b85c7994b02ddf", // 魅族平台注册的appkey\n   \t\tMEIZU_APPID : "MZ-110443", // 魅族平台注册的appid\n   ]\n\n')])])]),n("h2",{attrs:{id:"配置魅族通知栏小图标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置魅族通知栏小图标"}},[t._v("#")]),t._v(" 配置魅族通知栏小图标")]),t._v(" "),n("p",[t._v("通过 MzPush SDK 接收的通知，可设置其通知栏 icon，方法如下：")]),t._v(" "),n("p",[t._v("在应用的工程目录 res/drawable-xxxx/ 几个文件夹中添加对应不同分辨率的通知栏 icon 图标，文件名为 mz_push_notification_small_icon。如果文件名错误，将无法正确显示该应用的状态栏图标。")]),t._v(" "),n("p",[t._v("魅族手机状态栏 icon 规范请参考 "),n("a",{attrs:{href:"https://github.com/MEIZUPUSH/PushDemo/tree/master/PushdemoInternal/src/main/res",target:"_blank",rel:"noopener noreferrer"}},[t._v("魅族 PushSDK Demo"),n("OutboundLink")],1),t._v(" 中的图片文件。")]),t._v(" "),n("p",[t._v("**注：**如果没有放入符合规范的 icon 文件，会默认使用应用图标作为通知 icon。而应用图标不符合魅族的通知栏 icon 设计规范的话，则会导致通知栏图标无法正确显示。")]),t._v(" "),n("h2",{attrs:{id:"通知内容长度兼容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通知内容长度兼容"}},[t._v("#")]),t._v(" 通知内容长度兼容")]),t._v(" "),n("h3",{attrs:{id:"功能说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能说明"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),n("p",[t._v('由于魅族官方的通知内容长度限制为100个字符以内（中英文都算一个），当通知内容（极光的“alert”字段的值）长度超过100时，魅族通道会推送失败。此时调用极光api推送通知时，请在payload 中的 "notification" 的 "android" 节点的"extras"节点添加以下字段：')]),t._v(" "),n("h3",{attrs:{id:"使用方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),n("h4",{attrs:{id:"push-api-推送说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#push-api-推送说明"}},[t._v("#")]),t._v(" Push API 推送说明")]),t._v(" "),n("div",{staticClass:"table-d",attrs:{align:"center"}},[n("table",{attrs:{border:"1",width:"100%"}},[n("tr",{attrs:{bgcolor:"#D3D3D3"}},[n("th",[t._v("关键字")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("示例")]),t._v(" "),n("th",[t._v("说明")])]),t._v(" "),n("tr",[n("td",[t._v("mzpns_content_forshort")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v('"short content"')]),t._v(" "),n("td",[t._v("通知内容（极光的“alert”字段）长度超过100个字符时，可在此字段的值传入不超过100字符的通知内容。")])])])]),t._v(" "),n("p",[n("em",[n("strong",[t._v("请求json示例：")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n    "platform": [\n        "android"\n    ],\n    "audience": "all",\n    "notification": {\n        "android": {\n            "alert": "在国内 Android 生态中，推送通道都是由终端与云端之间的长链接来维持，严重依赖于应用进程的存活状态。如今一些手机厂家会在自家 rom 中做系统级别的推送通道，再由系统分发给各个 app，以此提高在自家 rom 上的推送送达率。JPush SDK 为了尽可能提高开发者在各类 rom 上的推送送达率，对使用 ColorOS 的设备推送，自动切换到魅族通道。同时，为了保证 SDK 的易用性，原本 JPush 的所有接口调用逻辑都不用修改,JPush 会对自身支持的功能做兼容.只需在manifest中配置上 魅族 SDK 必须的配置组件即可.",\n            "title": "概述",\n            "extras": {\n                "mzpns_content_forshort": "在国内 Android 生态中，推送通道都是由终端与云端之间的长链接来维持，严重依赖于应用进程的存活状态。"\n            }\n        }\n\n    },\n    "message": {\n        "msg_content": "自定义消息内容003"\n    }\n}\n\n')])])]),n("p",[t._v("##集成错误码")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("Code")]),t._v(" "),n("th",[t._v("Commen")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("UNKNOWN_ERROR")]),t._v(" "),n("td",[t._v("-1")]),t._v(" "),n("td",[t._v("未知错误")])]),t._v(" "),n("tr",[n("td",[t._v("SUCCESS")]),t._v(" "),n("td",[t._v("200")]),t._v(" "),n("td",[t._v("成功")])]),t._v(" "),n("tr",[n("td",[t._v("SYSTEM_ERROR")]),t._v(" "),n("td",[t._v("1001")]),t._v(" "),n("td",[t._v("系统错误")])]),t._v(" "),n("tr",[n("td",[t._v("SYSTEM_BUSY")]),t._v(" "),n("td",[t._v("1003")]),t._v(" "),n("td",[t._v("服务器忙")])]),t._v(" "),n("tr",[n("td",[t._v("PARAMETER_ERROR")]),t._v(" "),n("td",[t._v("1005")]),t._v(" "),n("td",[t._v("参数错误，请参考API文档")])]),t._v(" "),n("tr",[n("td",[t._v("INVALID_SIGN")]),t._v(" "),n("td",[t._v("1006")]),t._v(" "),n("td",[t._v("签名认证失败")])]),t._v(" "),n("tr",[n("td",[t._v("INVALID_APPLICATION_ID")]),t._v(" "),n("td",[t._v("110000")]),t._v(" "),n("td",[t._v("appId不合法")])]),t._v(" "),n("tr",[n("td",[t._v("INVALID_APPLICATION_KEY")]),t._v(" "),n("td",[t._v("110001")]),t._v(" "),n("td",[t._v("appKey不合法")])]),t._v(" "),n("tr",[n("td",[t._v("UNSUBSCRIBE_PUSHID")]),t._v(" "),n("td",[t._v("110002")]),t._v(" "),n("td",[t._v("pushId未注册")])]),t._v(" "),n("tr",[n("td",[t._v("INVALID_PUSHID")]),t._v(" "),n("td",[t._v("110003")]),t._v(" "),n("td",[t._v("pushId非法")])]),t._v(" "),n("tr",[n("td",[t._v("PARAM_BLANK")]),t._v(" "),n("td",[t._v("110004")]),t._v(" "),n("td",[t._v("参数不能为空")])]),t._v(" "),n("tr",[n("td",[t._v("APP_IN_BLACK_LIST")]),t._v(" "),n("td",[t._v("110009")]),t._v(" "),n("td",[t._v("应用被加入黑名单")])]),t._v(" "),n("tr",[n("td",[t._v("APP_REQUEST_EXCEED_LIMIT")]),t._v(" "),n("td",[t._v("110010")]),t._v(" "),n("td",[t._v("应用请求频率过快")])]),t._v(" "),n("tr",[n("td",[t._v("APP_PUSH_TIME_EXCEED_LIMIT")]),t._v(" "),n("td",[t._v("110051")]),t._v(" "),n("td",[t._v("超过该应用的次数限制")])]),t._v(" "),n("tr",[n("td",[t._v("APP_REQUEST_PUSH_LIMIT")]),t._v(" "),n("td",[t._v("110019")]),t._v(" "),n("td",[t._v("超过该应用每天推送次数限制")])]),t._v(" "),n("tr",[n("td",[t._v("INVALID_APPLICATION_PACKAGENAME")]),t._v(" "),n("td",[t._v("110031")]),t._v(" "),n("td",[t._v("packageName不合法")])]),t._v(" "),n("tr",[n("td",[t._v("INVALID_TASK_ID")]),t._v(" "),n("td",[t._v("110032")]),t._v(" "),n("td",[t._v("非法的taskId")])]),t._v(" "),n("tr",[n("td",[t._v("INVALID_APPLICATION_SECRET")]),t._v(" "),n("td",[t._v("110033")]),t._v(" "),n("td",[t._v("非法的appSecret")])])])]),t._v(" "),n("h2",{attrs:{id:"meizupush-sdk的编译混淆问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#meizupush-sdk的编译混淆问题"}},[t._v("#")]),t._v(" MeizuPush SDK的编译混淆问题")]),t._v(" "),n("p",[t._v("如果使用了 proguard，需要在配置文件中加入,可以防止一个误报的 warning 导致无法成功编译，")]),t._v(" "),n("pre",[n("code",[t._v("-dontwarn com.meizu.cloud.**\n-keep class com.meizu.cloud.** { *; }")])])])}),[],!1,null,null,null);e.default=a.exports}}]);