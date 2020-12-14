(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{80:function(t,n,a){"use strict";a.r(n);var e=a(0),i=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jpush-sdk-oppo通道集成指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jpush-sdk-oppo通道集成指南"}},[t._v("#")]),t._v(" JPush SDK OPPO通道集成指南")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("在国内 Android 生态中，推送通道都是由终端与云端之间的长链接来维持，严重依赖于应用进程的存活状态。如今一些手机厂家会在自家 rom 中做系统级别的推送通道，再由系统分发给各个 app，以此提高在自家 rom 上的推送送达率。")]),t._v(" "),a("p",[t._v("JPush SDK 为了尽可能提高开发者在各类 rom 上的推送送达率，对使用 ColorOS 的设备推送，自动切换到 OPPO 通道。同时，为了保证 SDK 的易用性，原本 JPush 的所有接口调用逻辑都不用修改，JPush 会对自身支持的功能做兼容。只需在 manifest 中配置上 OPPO SDK 必须的配置组件即可。")]),t._v(" "),a("h2",{attrs:{id:"功能描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("JPush 初始化的时候可选择是否初始化 OPush 通道。")])]),t._v(" "),a("li",[a("p",[t._v("在 ColorOS 设备上 JPush 通道与 OPush 通道共存。")])]),t._v(" "),a("li",[a("p",[t._v("OPush 通道初始化后支持 stopPush/resumePush 与 tag/alias这些 JPush 原有的功能，其它的 JPush 未支持的功能目前暂时还不可用。")])]),t._v(" "),a("li",[a("p",[t._v("通知效果：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("OPPO 通道不支持 ACTION_NOTIFICATION_RECEIVED 和 ACTION_NOTIFICATION_OPENED事件。")])]),t._v(" "),a("li",[a("p",[t._v("点击通知，如果有指定跳转页面，则跳转到用户配置的activity，未配置则跳转到主页。")])])])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("注：")])]),t._v(" OPPO 推送目前支持 ColorOS3.1及以上的系统的oppo的机型，一加5/5t及以上机型，realme所有机型。。JPush 通过 HeytapPushManager.isSupportPush() 接口进行判断，对支持的机型，通知走 OPPO 通道，不支持则走极光通道。")]),t._v(" "),a("h2",{attrs:{id:"手动配置集成步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动配置集成步骤"}},[t._v("#")]),t._v(" 手动配置集成步骤")]),t._v(" "),a("p",[t._v("主要步骤为：")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#1"}},[t._v("1. 增加OPPO插件包及OPPO推送包")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#2"}},[t._v("2. 配置OPPO推送sdk所需要的权限")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#3"}},[t._v("3. 配置OPPO必须的组件")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#4"}},[t._v("4. 将OPPO_APPKEY、OPPO_APPID、OPPO_APPSECRET 替换为在OPPO后台注册对应该应用的AppKey/AppID/APPSecret")])])])]),t._v(" "),a("h4",{attrs:{id:"_1-增加oppo插件包及oppo推送包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-增加oppo插件包及oppo推送包"}},[t._v("#")]),t._v(" "),a("h3",{attrs:{id:"1"}},[t._v("1. 增加OPPO插件包及OPPO推送包")])]),t._v(" "),a("ul",[a("li",[t._v("将third-push目录下找到oppo目录，从libs中拷贝其中的jar包至工程的libs目录下。")]),t._v(" "),a("li",[t._v("jar包说明：\n"),a("ul",[a("li",[t._v("jpush-android-plugin-oppo-v3.x.x.jar : JPush 插件包")]),t._v(" "),a("li",[t._v("com.heytap.msp-push-xxx.aar : OPPO 推送包")])])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("注1")])]),t._v("：极光集成 OPPO 通道在 JPush Android SDK 3.1.5 添加。\n"),a("em",[a("strong",[t._v("注2")])]),t._v("：oppo推送包，在JPush 3.4.0之前为：com.coloros.mcssdk.jar。JPush 3.4.0适配OPPO SDK的升级，对应OPPO SDK更新为：mcssdk-2.0.2.jar。\n"),a("em",[a("strong",[t._v("注3")])]),t._v("：JPush 3.3.9版本的JPush可仅更新3.4.0的oppo插件包即可，无需升级为JPush3.4.0。\n"),a("em",[a("strong",[t._v("注4")])]),t._v("：oppo 推送包 v2.1.0 版本升级为 com.heytap.msp-push-2.1.0.aar，Jpush v3.6.8 开始支持，与之前版本不兼容\n"),a("em",[a("strong",[t._v("注5")])]),t._v("：oppo 推送包 v2.1.0 只支持 Android 4.4 或以上版本的手机系统,minsdk 至少要求 19")]),t._v(" "),a("h4",{attrs:{id:"_2-配置oppo推送sdk所需要的权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置oppo推送sdk所需要的权限"}},[t._v("#")]),t._v(" "),a("h3",{attrs:{id:"2"}},[t._v("2. 配置OPPO推送sdk所需要的权限")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' \t\t <uses-permission android:name="com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE"/>\n         <uses-permission android:name="com.heytap.mcs.permission.RECIEVE_MCS_MESSAGE"/>\n\n\n')])])]),a("h4",{attrs:{id:"_3-配置oppo必须的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置oppo必须的组件"}},[t._v("#")]),t._v(" "),a("h3",{attrs:{id:"3"}},[t._v("3. 配置OPPO必须的组件")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n\t\t \x3c!-- since JPushv3.6.8 ，oppov2.1.0 oppo 核心功能--\x3e\n          <service android:name="cn.jpush.android.service.PluginOppoPushService"\n             android:permission="com.coloros.mcs.permission.SEND_MCS_MESSAGE">\n             <intent-filter>\n                 <action android:name="com.coloros.mcs.action.RECEIVE_MCS_MESSAGE" />\n             </intent-filter>\n         </service>\n\n         \x3c!-- since JPushv3.6.8 ，oppov2.1.0 oppo 核心功能--\x3e\n         <service\n             android:name="com.heytap.msp.push.service.DataMessageCallbackService"\n             android:permission="com.heytap.mcs.permission.SEND_PUSH_MESSAGE">\n \n             <intent-filter>\n                 <action android:name="com.heytap.mcs.action.RECEIVE_MCS_MESSAGE"/>\n \n                 <action android:name="com.heytap.msp.push.RECEIVE_MCS_MESSAGE"/>\n             </intent-filter>\n         </service> \x3c!--兼容Q版本--\x3e\n\n\n')])])]),a("h4",{attrs:{id:"_4-将oppo应用的-appkey-、appid-、appsecret-加上前缀“op-”，填入meta-data-标签中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-将oppo应用的-appkey-、appid-、appsecret-加上前缀“op-”，填入meta-data-标签中"}},[t._v("#")]),t._v(" "),a("h3",{attrs:{id:"4"}},[t._v("4. 将OPPO应用的 appkey 、appid 、appsecret 加上前缀“OP-”，填入meta-data 标签中")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n\t <meta-data android:name="OPPO_APPKEY"\n\t       android:value="OP-您的应用对应的OPPO的APPKEY" />\n\n     <meta-data android:name="OPPO_APPID"\n            android:value="OP-您的应用对应的OPPO的APPID" />\n\n     <meta-data android:name="OPPO_APPSECRET"\n            android:value="OP-您的应用对应的OPPO的APPSECRET" />\n\n\n')])])]),a("h4",{attrs:{id:"_5-在工程的build-gradle文件中添加如下配置代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-在工程的build-gradle文件中添加如下配置代码"}},[t._v("#")]),t._v(" "),a("h3",{attrs:{id:"5"}},[t._v("5. 在工程的build.gradle文件中添加如下配置代码")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dependencies {\n    ...\n    implementation fileTree(include: ['*.jar'], dir: 'libs')\n\n    ...\n    implementation(name: 'com.heytap.msp-push-2.1.0', ext: 'aar')\n    ...  \n\n}\nandroid {\n    ...\n\n    repositories {\n        flatDir {\n            dirs 'libs'\n        }\n    }\n\n}\n\n")])])]),a("h2",{attrs:{id:"使用-jcenter-自动化集成步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-jcenter-自动化集成步骤"}},[t._v("#")]),t._v(" 使用 JCenter 自动化集成步骤")]),t._v(" "),a("ul",[a("li",[t._v("确认android studio的 Project 根目录的主 gradle 中配置了jcenter支持。（新建project默认配置就支持）")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\tbuildscript {\n\t\trepositories {\n\t\t\tjcenter()\n\t\t}\n            ......\n\t}\n\n\tallprojets {\n\t\trepositories {\n\t\t\tjcenter()\n\t\t}\n\t}\n\n")])])]),a("ul",[a("li",[t._v("在应用 module 的 gradle 中 dependencies 节点添加如下代码:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    dependencies {\n        compile 'cn.jiguang.sdk.plugin:oppo:3.6.8'\n    }\n\n")])])]),a("ul",[a("li",[t._v("在应用 module 的 gradle 中 defaultConfig 节点添加如下代码:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    manifestPlaceholders = [\n\n        // 设置manifest.xml中的变量\n        OPPO_APPKEY : "OP-您的应用对应的OPPO的APPKEY", // OPPO平台注册的appkey\n        OPPO_APPID : "OP-您的应用对应的OPPO的APPID", // OPPO平台注册的appid\n        OPPO_APPSECRET: "OP-您的应用对应的OPPO的APPSECRET"//OPPO平台注册的appsecret\n\n    ]\n\n\n')])])]),a("h2",{attrs:{id:"opush-sdk的编译混淆问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opush-sdk的编译混淆问题"}},[t._v("#")]),t._v(" OPush SDK的编译混淆问题")]),t._v(" "),a("p",[t._v("如果使用了 proguard，需要在配置文件中加入，可以防止一个误报的 warning 导致无法成功编译。")]),t._v(" "),a("pre",[a("code",[t._v("-dontwarn com.coloros.mcsdk.**\n-keep class com.coloros.mcsdk.** { *; }\n    \n-dontwarn com.heytap.**\n-keep class com.heytap.** { *; }\n    \n-dontwarn com.mcs.**\n-keep class com.mcs.** { *; }\n")])]),t._v(" "),a("h2",{attrs:{id:"通知内容长度兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通知内容长度兼容"}},[t._v("#")]),t._v(" 通知内容长度兼容")]),t._v(" "),a("h3",{attrs:{id:"功能说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能说明"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),a("p",[t._v('由于 OPPO 官方的通知内容长度限制为200个字数以内（中英文都算一个），当通知内容（极光的“alert”字段的值）长度超过200字，OPPO 通道会推送失败。此时调用极光api推送通知，请在payload 中的 "notification" 的 "android" 节点的"extras"节点添加以下字段：')]),t._v(" "),a("h3",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),a("h4",{attrs:{id:"push-api-推送说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-api-推送说明"}},[t._v("#")]),t._v(" Push API 推送说明")]),t._v(" "),a("div",{staticClass:"table-d",attrs:{align:"center"}},[a("table",{attrs:{border:"1",width:"100%"}},[a("tr",{attrs:{bgcolor:"#D3D3D3"}},[a("th",[t._v("关键字")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("示例")]),t._v(" "),a("th",[t._v("说明")])]),t._v(" "),a("tr",[a("td",[t._v("oppns_content_forshort")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('"short content"')]),t._v(" "),a("td",[t._v("通知内容（极光的“alert”字段）长度超过200个字时，请在此字段的值传入不超过200个字的通知内容。")])])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("请求json示例：")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "platform": [\n        "android"\n    ],\n    "audience": "all",\n    "notification": {\n        "android": {\n            "alert": "在国内 Android 生态中，推送通道都是由终端与云端之间的长链接来维持，严重依赖于应用进程的存活状态。如今一些手机厂家会在自家 rom 中做系统级别的推送通道，再由系统分发给各个 app，以此提高在自家 rom 上的推送送达率。JPush SDK 为了尽可能提高开发者在各类 rom 上的推送送达率，对使用 ColorOS 的设备推送，自动切换到OPPO通道。同时，为了保证 SDK 的易用性，原本 JPush 的所有接口调用逻辑都不用修改,JPush 会对自身支持的功能做兼容.只需在manifest中配置上 OPPO SDK 必须的配置组件即可.",\n            "title": "概述",\n            "uri_action": "com.example.jpushdemo.OpenClickActivity",\n            "extras": {\n                "oppns_content_forshort": "在国内 Android 生态中，推送通道都是由终端与云端之间的长链接来维持，严重依赖于应用进程的存活状态。"\n            }\n        }\n\n    },\n    "message": {\n        "msg_content": "自定义消息内容003"\n    }\n}\n\n')])])]),a("h2",{attrs:{id:"点击通知跳转-activity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击通知跳转-activity"}},[t._v("#")]),t._v(" 点击通知跳转 Activity")]),t._v(" "),a("h3",{attrs:{id:"功能说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能说明-2"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),a("p",[t._v("OPPO 允许开发者在推送通知的时候传入自定义的 intent action 字符串，当用户点击了该通知，系统会根据 action 的值过滤出匹配的 Activity ，并打开 Activity，获取推送内容。若不配置，点击通知则直接打开应用主页。")]),t._v(" "),a("h3",{attrs:{id:"使用方式-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式-2"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),a("h4",{attrs:{id:"push-api-推送说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-api-推送说明-2"}},[t._v("#")]),t._v(" Push API 推送说明")]),t._v(" "),a("p",[t._v('在 push api 的 payload 中的 "notification" 的 "android" 节点下添加以下字段：')]),t._v(" "),a("div",{staticClass:"table-d",attrs:{align:"center"}},[a("table",{attrs:{border:"1",width:"100%"}},[a("tr",{attrs:{bgcolor:"#D3D3D3"}},[a("th",[t._v("关键字")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("示例")]),t._v(" "),a("th",[t._v("说明")])]),t._v(" "),a("tr",[a("td",[t._v("uri_action")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v('"com.example.jpushdemo.OpenClickActivity"')]),t._v(" "),a("td",[t._v("该字段用于指定开发者想要打开的 activity。值为该activity下您配置的特殊action name")])])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("示例：")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('demo manifest 配置为：\n \x3c!-- 点击通知时，要打开的 activity --\x3e\n        <activity android:name="com.example.jpushdemo.OpenClickActivity"\n            android:exported="true">\n            <intent-filter>\n                <action android:name="com.example.jpushdemo.OpenClickActivity"/>\n            <category android:name="android.intent.category.DEFAULT" />\n            </intent-filter>\n        </activity>\n\n请求json如下：\n{\n    "platform": [\n        "android"\n    ],\n    "audience": "all",\n    "notification": {\n        "android": {\n            "alert": "在线alert003",\n            "title": "在线title003",\n            "uri_action": "com.example.jpushdemo.OpenClickActivity"\n        }\n    },\n    "message": {\n        "msg_content": "自定义消息内容003"\n    }\n}\n')])])]),a("p",[t._v("####SDK 端配置")]),t._v(" "),a("h5",{attrs:{id:"_1-在-androidmanifest-xml-中配置点击通知要打开的-activity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在-androidmanifest-xml-中配置点击通知要打开的-activity"}},[t._v("#")]),t._v(" 1. 在 AndroidManifest.xml 中配置点击通知要打开的 activity")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' <activity android:name="您配置的activity"\n            android:exported="true">\n      <intent-filter>\n            <action android:name="您配置的特殊action"/>\n            <category android:name="android.intent.category.DEFAULT" />\n       </intent-filter>\n </activity>\n')])])]),a("h5",{attrs:{id:"_2-获取通知相关信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取通知相关信息"}},[t._v("#")]),t._v(" 2.获取通知相关信息")]),t._v(" "),a("p",[t._v("在您配置的 activity 中的onCreate方法中进行处理，获取通知信息。")]),t._v(" "),a("p",[t._v('通过 getIntent().getExtras().getString("JMessageExtra") 获取到数据。获取到的数据是 JSON 字符串，通过解析可以获得通知相关内容。')]),t._v(" "),a("p",[t._v("JSON 示例如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg_id":"123456",\n\t"n_content":"this is content",\n\t"n_extras":{"key1":"value1","key2":"value2"},\n\t"n_title":"this is title",\n\t"rom_type":0\n}\n')])])]),a("p",[t._v("JSON 内容字段说明：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",[t._v("取值类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("msg_id")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("通过此key获取到通知的msgid")])]),t._v(" "),a("tr",[a("td",[t._v("n_title")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("通过此key获取到通知标题")])]),t._v(" "),a("tr",[a("td",[t._v("n_content")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("通过此key获取到通知内容")])]),t._v(" "),a("tr",[a("td",[t._v("n_extras")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("通过此key获取到通知附加字段")])]),t._v(" "),a("tr",[a("td",[t._v("rom_type")]),t._v(" "),a("td",[t._v("byte")]),t._v(" "),a("td",[t._v("通过此key获取到下发通知的平台。得到值说明：byte类型的整数， 0为极光，1为小米，2为华为，3为魅族，4为 OPPO，8为FCM。")])])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("注：")])]),t._v(" rom_type 用于点击事件的上报，一般情况下开发者只需要取到该字段的值用于上报，不需要关心具体取值。")]),t._v(" "),a("h5",{attrs:{id:"_3-通知点击上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通知点击上报"}},[t._v("#")]),t._v(" 3.通知点击上报")]),t._v(" "),a("p",[t._v("解析通知内容后，需主动调用接口来进行通知点击上报，上报接口如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n* context 上下文\n* msgId 消息ID\n* whichPushSDK 收到推送的平台，即 rom_type 字段的取值。\n**/\nJPushInterface.reportNotificationOpened(Context context, String msgId, byte whichPushSDK);\n")])])]),a("p",[a("em",[a("strong",[t._v("注：")])]),t._v(" 点击上报必须传入正确的 whichPushSDK 参数，否则会造成统计数据错误。")]),t._v(" "),a("h5",{attrs:{id:"_4-富媒体调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-富媒体调整"}},[t._v("#")]),t._v(" 4.富媒体调整")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("为 PushActivity 增加 "),a("code",[t._v('<action android:name="cn.jpush.android.ui.PushActivity" />')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("为 PopWinActivity 增加 "),a("code",[t._v('<action android:name="cn.jpush.android.ui.PopWinActivity" />')]),t._v("。")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<activity\n     android:name="cn.jpush.android.ui.PushActivity"\n     android:configChanges="orientation|keyboardHidden"\n     android:theme="@android:style/Theme.NoTitleBar">\n        <intent-filter>\n            <action android:name="cn.jpush.android.ui.PushActivity" />\n            <category android:name="android.intent.category.DEFAULT" />\n            <category android:name="您的应用的包名" />\n        </intent-filter>\n</activity>\n\n<activity\n     android:name="cn.jpush.android.ui.PopWinActivity"\n     android:configChanges="orientation|keyboardHidden"\n     android:theme="@style/MyDialogStyle">\n        <intent-filter>\n            <category android:name="android.intent.category.DEFAULT" />\n            <category android:name="您的应用的包名" />\n            <action android:name="cn.jpush.android.ui.PopWinActivity"/>\n        </intent-filter>\n</activity>\n')])])]),a("h5",{attrs:{id:"_5-activity-示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-activity-示例代码"}},[t._v("#")]),t._v(" 5.Activity 示例代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('package com.example.jpushdemo;\n\nimport android.app.Activity;\nimport android.os.Bundle;\nimport android.text.TextUtils;\nimport android.util.Log;\nimport android.widget.TextView;\n\nimport org.json.JSONException;\nimport org.json.JSONObject;\n\nimport cn.jpush.android.api.JPushInterface;\n\n/**\n * Created by jiguang on 17/7/5.\n */\n\npublic class OpenClickActivity extends Activity {\n    private static final String TAG = "OpenClickActivity";\n    /**消息Id**/\n    private static final String KEY_MSGID = "msg_id";\n    /**该通知的下发通道**/\n    private static final String KEY_WHICH_PUSH_SDK = "rom_type";\n    /**通知标题**/\n    private static final String KEY_TITLE = "n_title";\n    /**通知内容**/\n    private static final String KEY_CONTENT = "n_content";\n    /**通知附加字段**/\n    private static final String KEY_EXTRAS = "n_extras";\n    private TextView mTextView;\n\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        mTextView = new TextView(this);\n        setContentView(mTextView);\n        handleOpenClick();\n    }\n\n\n    /**\n     * 处理点击事件，当前启动配置的Activity都是使用\n     * Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK\n     * 方式启动，只需要在onCreat中调用此方法进行处理\n     */\n    private void handleOpenClick() {\n        Log.d(TAG, "用户点击打开了通知");\n        String data = null;\n        //获取华为平台附带的jpush信息\n        if (getIntent().getData() != null) {\n             data = getIntent().getData().toString();\n        }\n\n        //获取fcm、oppo、vivo、华硕、小米平台附带的jpush信息\n        if(TextUtils.isEmpty(data) && getIntent().getExtras() != null){\n            data = getIntent().getExtras().getString("JMessageExtra");\n        }\n\n        Log.w(TAG, "msg content is " + String.valueOf(data));\n        if (TextUtils.isEmpty(data)) return;\n        try {\n            JSONObject jsonObject = new JSONObject(data);\n            String msgId = jsonObject.optString(KEY_MSGID);\n            byte whichPushSDK = (byte) jsonObject.optInt(KEY_WHICH_PUSH_SDK);\n            String title = jsonObject.optString(KEY_TITLE);\n            String content = jsonObject.optString(KEY_CONTENT);\n            String extras = jsonObject.optString(KEY_EXTRAS);\n            StringBuilder sb = new StringBuilder();\n            sb.append("msgId:");\n            sb.append(String.valueOf(msgId));\n            sb.append("\\n");\n            sb.append("title:");\n            sb.append(String.valueOf(title));\n            sb.append("\\n");\n            sb.append("content:");\n            sb.append(String.valueOf(content));\n            sb.append("\\n");\n            sb.append("extras:");\n            sb.append(String.valueOf(extras));\n            sb.append("\\n");\n            sb.append("platform:");\n            sb.append(getPushSDKName(whichPushSDK));\n            mTextView.setText(sb.toString());\n\n            //上报点击事件\n            JPushInterface.reportNotificationOpened(this, msgId, whichPushSDK);\n        } catch (JSONException e) {\n            Log.w(TAG, "parse notification error");\n        }\n\n\n    }\n\n    private String getPushSDKName(byte whichPushSDK) {\n        String name;\n        switch (whichPushSDK){\n            case 0:\n                name = "jpush";\n                break;\n            case 1:\n                name = "xiaomi";\n                break;\n            case 2:\n                name = "huawei";\n                break;\n            case 3:\n                name = "meizu";\n                break;\n            case 4:\n            \tname= "oppo";\n            \tbreak;\n            case 5:\n                name = "vivo";\n                break;\n            case 6:\n                name = "asus";\n                break;                \n            case 8:\n                name = "fcm";\n                break;\n            default:\n                name = "jpush";\n        }\n        return name;\n    }\n}\n')])])])])}),[],!1,null,null,null);n.default=i.exports}}]);