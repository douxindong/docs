# JPush SDK 华为通道集成指南


## 概述

在国内 Android 生态中，推送通道都是由终端与云端之间的长链接来维持，严重依赖于应用进程的存活状态。如今一些手机厂家会在自家 rom 中做系统级别的推送通道，再由系统分发给各个 app，以此提高在自家 rom 上的推送送达率。

JPush SDK 为了尽可能提高开发者在各类 rom 上的推送送达率，对使用 EMUI 的设备推送，自动切换到华为通道。同时，为了保证 SDK 的易用性，原本 JPush 的所有接口调用逻辑都不用修改,JPush 会对自身支持的功能做兼容.只需在manifest中配置上华为HMS SDK 必须的配置组件即可.

## 功能描述

+ JPush 初始化的时候可选择是否初始化 HMS Push 通道。

+ 在 EMUI 设备上 JPush 通道与 华为 通道共存.

+ 华为 通道初始化后支持 tag/alias这些 JPush 原有的功能,其它的 JPush 未支持的功能目前暂时还不可用.

+ 增加兼容华为HMS SDK初始化失败处理错误的接口.

***注***：极光根据 EMUI 系统版本间差异，现采取的方案是 EMUI 4.1 及以上版本，使用 HMS 服务，通知走 HMS 通道；对于 EMUI 4.1 以下版本还是走极光通道。

## 配置集成步骤

主要步骤为：

* [1. 添加 Huawei SDK 到项目中](#1)

* [2. 配置接收 HMS 消息的广播接收器](#3)

* [3. 在build.gradle中配置在华为后台添加的指纹证书对应的签名](#5)



#### <h3 id="1">添加 Huawei SDK 到项目中</h3>

+ 拷贝third-push/huawei/libs中的插件包(jpush-android-plugin-huawei-v3.x.x.jar)到工程libs目录下
    + 注意：也可使用jcenter集成方式，无需拷贝jpush-android-plugin-huawei-v3.x.x.jar文件，也无需配置cn.jpush.android.service.PluginHuaweiPlatformsService组件
    + 示例：implementation 'cn.jiguang.sdk.plugin:huawei:3.x.x'

+ 在 [Huawei](https://developer.huawei.com/) 上创建和 JPush 上同包名的待发布应用,创建完成后下载该应用的 agconnect-services.json 配置文件并添加到应用的 module 目录下。

+ 在根级 build.gradle 中添加规则，以纳入 HMS 服务插件 和 华为 的 Maven 代码库,可根据华为开发者联盟发布的版本更新选择最新版本：

```

    buildscript {
        repositories {
            google()
            jcenter()
            maven {url 'http://developer.huawei.com/repo/'}
        }
    }
   buildscript {
       dependencies {
           classpath 'com.huawei.agconnect:agcp:1.2.1.301'
       }
   }
  
	allprojects {
        repositories {
            google()
            jcenter()
            maven {url 'http://developer.huawei.com/repo/'}
        }
    }

```

+ 在应用 module 的 build.gradle 文件底部添加 apply plugin 代码行，以启用 gradle 插件：

```
	// ADD THIS AT THE TOP
   apply plugin: 'com.huawei.agconnect'

```
+ 在应用 module 的 gradle 中 dependencies 节点添加如下代码，可根据 华为 发布的版本更新选择最新版本:

```
	 dependencies {
       implementation 'com.huawei.hms:push:4.0.2.300'
       //引入极光-华为插件，如果采用此配置，无需拷贝jpush-android-plugin-huawei-v3.x.x.jar文件，也无需配置cn.jpush.android.service.PluginHuaweiPlatformsService组件
       implementation 'cn.jiguang.sdk.plugin:huawei:3.x.x'
              
    }

```

***注1***：极光集成华为通道在 JPush Android SDK 3.0.5 添加，对应测试的华为HMS SDK 版本为：HMS-SDK-2.4.0.300.aar

***注2***：JPush Android SDK 3.0.9 适配HMS SDK的升级,对应测试的华为HMS SDK 版本为:HMSSdk-base-2.5.2.300.aar,HMSSdk-push-2.5.2.300.aar

***注3***：JPush Android SDK 3.1.2 适配HMS SDK的升级,对应测试的华为HMS SDK 版本为:HMSSdk-base-2.5.3.302.aar,HMSSdk-push-2.5.3.302.aar

***注4***：从HMS_SDK_2.6.0.301版本开始支持jar包+res资源集成，JPush Android SDK 3.1.5对应测试的华为HMS SDK 版本为:HMS_SDK_2.6.0.301.jar

***注5***：JPush Android SDK 3.2.0 更新华为HMS SDK版本为:hmssdk_2.6.3.301.jar

***注6***：JPush Android SDK 3.3.6 更新华为HMS SDK版本为:hmssdk_2.6.3.306.jar

***注7***：JPush Android SDK 3.5.4 更新华为HMS SDK版本为:3.0.3.301

***注7***：JPush Android SDK 3.6.0 更新华为HMS SDK版本为:4.0.2.300

***注8*** [添加 华为 Push SDK 的官方文档](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/push-introduction-v3)





#### <h3 id="2">2. 配置接收 HMS 消息的服务</h3>


```
	 <service
                android:name="cn.jpush.android.service.PluginHuaweiPlatformsService"
                android:exported="false">
                <intent-filter>
                    <action android:name="com.huawei.push.action.MESSAGING_EVENT" />
                </intent-filter>
            </service

```


#### <h3 id="3">3. 在build.gradle中配置在华为后台添加的指纹证书对应的签名</h3>
***注***：HMS 服务必须要求 app 签名才能注册成功。指纹证书是在终端采用keytool -list -v -keystore keystorefileName 获取偶对应的指纹证书.


```
    signingConfigs {
        release {
            storeFile file("release.keystore")//签名文件的path
            storePassword "123456"
            keyAlias "android.keystore"
            keyPassword "123456"
        }
    }

	buildTypes {
        release {
            minifyEnabled true
            proguardFiles 'proguard-rules.pro'
            signingConfig signingConfigs.release
        }
        debug{
        	minifyEnabled false
            signingConfig signingConfigs.release
        }
    }

```

## HMS SDK的编译混淆问题

如果使用了 proguard，需要在配置文件中加入,可以防止一个误报的 warning 导致无法成功编译，

```
	-ignorewarning 
    -keepattributes *Annotation* 
    -keepattributes Exceptions 
    -keepattributes InnerClasses 
    -keepattributes Signature 
    -keepattributes SourceFile,LineNumberTable 
    -keep class com.hianalytics.android.**{*;} 
    -keep class com.huawei.updatesdk.**{*;} 
    -keep class com.huawei.hms.**{*;}

```

如果开发者使用了AndResGuard，需要在混淆配置文件中加入AndResGuard白名单。
```
    "R.string.hms*",
    "R.string.connect_server_fail_prompt_toast",
    "R.string.getting_message_fail_prompt_toast",
    "R.string.no_available_network_prompt_toast",
    "R.string.third_app_*",
    "R.string.upsdk_*",
    "R.layout.hms*",
    "R.layout.upsdk_*",
    "R.drawable.upsdk*",
    "R.color.upsdk*",
    "R.dimen.upsdk*",
    "R.style.upsdk*",
    "R.string.agc*"
    
```

## 点击通知跳转 Activity


### 功能说明

#### 支持的版本

此功能从 JPush Android SDK 3.0.9 开始支持

#### 华为手机通知跳转的定义

华为 push 允许开发者在推送通知的时候传入自定义的 intent uri 字符串，当用户点击了该通知，系统会根据 uri 的值过滤出匹配的 Activity ，并打开 Activity，达到跳转的目的。

### 使用方式

#### Push API 推送说明

在 push api 的 payload 中的 "notification" 的 "android" 节点下添加以下字段：

<div class="table-d" align="center" >
	<table border="1" width = "100%">
		<tr  bgcolor="#D3D3D3" >
			<th >关键字</th>
			<th >类型</th>
			<th >示例</th>
			<th >说明</th>
		</tr>
		<tr >
			<td>uri_activity</td>
			<td>string</td>
			<td>"com.example.jpushdemo.OpenClickActivity"</td>
			<td>该字段用于指定开发者想要打开的 activity，值为activity 节点的 “android:name ” 属性值。</td>
		</tr>
	</table>
</div>


***示例：***

```
demo manifest配置：
<activity android:name="com.example.jpushdemo.OpenClickActivity"
      android:exported="true">
      <intent-filter>
           <action android:name="android.intent.action.VIEW"/>
           <category android:name="android.intent.category.DEFAULT"/>
      </intent-filter>
</activity>

请求json如下：
{
    "platform": [
        "android"
    ],
    "audience": "all",
    "notification": {
        "android": {
            "alert": "在线alert003",
            "title": "在线title003",
            "uri_activity": "com.example.jpushdemo.OpenClickActivity",
        }
    },
    "message": {
        "msg_content": "自定义消息内容003"
    }
}
```


####SDK 端配置

##### 1.AndroidManifest.xml中配置点击通知要打开的 activity
```
<activity android:name="您配置的activity"
      android:exported="true">
      <intent-filter>
           <action android:name="android.intent.action.VIEW"/>
           <category android:name="android.intent.category.DEFAULT"/>
      </intent-filter>
</activity>
```
***注：*** android:exported 属性必须设置为 true，并增加示例中的 intent-filter，否则会导致无法收到通知。

##### 2.获取通知相关信息
目前启动配置的 activity 都是使用 Intent.FLAG\_ACTIVITY\_CLEAR\_TOP | Intent.FLAG\_ACTIVITY\_NEW\_TASK 方式启动，只需要在您配置的 activity 中的onCreate方法中进行处理，获取通知信息。

通过 getIntent().getData() 获取到Intent 数据。获取到的数据是 JSON 字符串，通过解析可以获得通知相关内容。

JSON 示例如下：

```
{
	"msg_id":"123456",
	"n_content":"this is content",
	"n_extras":{"key1":"value1","key2":"value2"},
	"n_title":"this is title",
	"rom_type":0
}
```

JSON 内容字段说明：

字段|取值类型|描述
---|---|---
msg_id|String|通过此key获取到通知的msgid
n_title|String|通过此key获取到通知标题
n_content|String|通过此key获取到通知内容
n_extras|String|通过此key获取到通知附加字段
rom_type| byte|通过此key获取到下发通知的平台。得到值说明：byte类型的整数， 0为极光，1为小米，2为华为，3为魅族，4为oppo，5为vivo，8为FCM。

***注：*** rom_type 用于点击事件的上报，一般情况下开发者只需要取到该字段的值用于上报，不需要关心具体取值。


##### 3.通知点击上报
解析通知内容后，需主动调用接口来进行通知点击上报，上报接口如下：

```
/**
* context 上下文
* msgId 消息ID
* whichPushSDK 收到推送的平台，即 rom_type 字段的取值。
**/
JPushInterface.reportNotificationOpened(Context context, String msgId, byte whichPushSDK);
```
***注：*** 点击上报必须传入正确的 whichPushSDK 参数，否则会造成统计数据错误。

##### 4.富媒体调整
在 AndroidManifest.xml 中将 PushActivity、PopWinActivity 的 android:exported="false" 属性修改为 true，否则会导致收不到富媒体推送。

##### 5.检测华为服务升级
如果华为设备华为服务版本过低的话，将不能使用华为推送通道发送通知，必须升级华为服务才行，用户可选检测该服务是否需要升级。
```
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        jPluginPlatformInterface = new JPluginPlatformInterface(this);
    }
    protected void onStart() {
        super.onStart();
        jPluginPlatformInterface.onStart(this);
    }
    protected void onStop() {
        super.onStop();
        jPluginPlatformInterface.onStop(this);
    }
```
***注：*** 参数必须为Activity，请在合适的Activity里调用该接口，onStart和onStop 接口都必须在Activity的生命周期里调用，否则可能引起内存泄漏。

##### 6.Activity 示例代码

```
package com.example.jpushdemo;

import android.app.Activity;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.widget.TextView;

import org.json.JSONException;
import org.json.JSONObject;

import cn.jpush.android.api.JPushInterface;

/**
 * Created by jiguang on 17/7/5.
 */

public class OpenClickActivity extends Activity {
    private static final String TAG = "OpenClickActivity";
    /**消息Id**/
    private static final String KEY_MSGID = "msg_id";
    /**该通知的下发通道**/
    private static final String KEY_WHICH_PUSH_SDK = "rom_type";
    /**通知标题**/
    private static final String KEY_TITLE = "n_title";
    /**通知内容**/
    private static final String KEY_CONTENT = "n_content";
    /**通知附加字段**/
    private static final String KEY_EXTRAS = "n_extras";
    private TextView mTextView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mTextView = new TextView(this);
        setContentView(mTextView);
        handleOpenClick();
    }


    /**
     * 处理点击事件，当前启动配置的Activity都是使用
     * Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK
     * 方式启动，只需要在onCreat中调用此方法进行处理
     */
    private void handleOpenClick() {
        Log.d(TAG, "用户点击打开了通知");
        String data = null;
        //获取华为平台附带的jpush信息
        if (getIntent().getData() != null) {
             data = getIntent().getData().toString();
        }

        //获取fcm、oppo、vivo、华硕、小米平台附带的jpush信息
        if(TextUtils.isEmpty(data) && getIntent().getExtras() != null){
            data = getIntent().getExtras().getString("JMessageExtra");
        }

        Log.w(TAG, "msg content is " + String.valueOf(data));
        if (TextUtils.isEmpty(data)) return;
        try {
            JSONObject jsonObject = new JSONObject(data);
            String msgId = jsonObject.optString(KEY_MSGID);
            byte whichPushSDK = (byte) jsonObject.optInt(KEY_WHICH_PUSH_SDK);
            String title = jsonObject.optString(KEY_TITLE);
            String content = jsonObject.optString(KEY_CONTENT);
            String extras = jsonObject.optString(KEY_EXTRAS);
            StringBuilder sb = new StringBuilder();
            sb.append("msgId:");
            sb.append(String.valueOf(msgId));
            sb.append("\n");
            sb.append("title:");
            sb.append(String.valueOf(title));
            sb.append("\n");
            sb.append("content:");
            sb.append(String.valueOf(content));
            sb.append("\n");
            sb.append("extras:");
            sb.append(String.valueOf(extras));
            sb.append("\n");
            sb.append("platform:");
            sb.append(getPushSDKName(whichPushSDK));
            mTextView.setText(sb.toString());

            //上报点击事件
            JPushInterface.reportNotificationOpened(this, msgId, whichPushSDK);
        } catch (JSONException e) {
            Log.w(TAG, "parse notification error");
        }


    }

    private String getPushSDKName(byte whichPushSDK) {
        String name;
        switch (whichPushSDK){
            case 0:
                name = "jpush";
                break;
            case 1:
                name = "xiaomi";
                break;
            case 2:
                name = "huawei";
                break;
            case 3:
                name = "meizu";
                break;
            case 4:
            	name= "oppo";
            	break;
            case 5:
                name = "vivo";
                break;
            case 6:
                name = "asus";
                break;                
            case 8:
                name = "fcm";
                break;
            default:
                name = "jpush";
        }
        return name;
    }
}
```

