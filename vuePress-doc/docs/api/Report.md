# 活动交互统计接入说明
===================


### **说明**

1. 接口名称：活动交互统计接入
2. 传输方式：Get
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|https://w2api-test.lifevc.com/act/{actCode}/WeChatReport |
| Pre|https://w2api-pre.lifevc.com/act/{actCode}/WeChatReport |
| 正式|https://w2api.lifevc.com/act/{actCode}/WeChatReport |

### **URL参数格式**

| **名称** | **类型** | **必填** | **说明** |
| :-------: | :----: | :---: | :---: |
| actcode| String|  是    | 活动actcode


### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， app内赋值si；微信内赋值授权接口返回的微信用户token

### **表单参数格式**

| **名称** | **类型** | **必填** | **说明** |
| :-------: | :----: | :---: | :---: |
| type| Int|  是    | 统计类型： APP分享 = 1,APP打开 = 2, 微信分享 = 3, 微信打开 = 4, 微信领取 = 5, APP下载 = 6, APP兑换=7, PC兑换=8, APP领取 = 9，连接点击 = 10，生成海报=11，web领取=12,浏览器打开=13
| actid| int|  否    | 取detail接口innerdata下的id
| phone| String|  否    | 手机号取点击兑换时候，用户填的手机号
| sourcecode| String|  否    | 取页面链接参数sourcecode的值
| shareuserid| String|  否  | 分享人userid
| sharewxuid|String|  否  |  分享人微信userid
 wechatreport统计接口，增加2个参数，
两个参数，在打开的访问连接上能取到就传，取不到不传，只打开页面这种类型传递即可

### **返回参数格式**

* Result： 请求结果
* Status： 0 请求状态
* Message：信息
* ResultCode，信息码
* DateTime，时间
* InnerData：结果信息
```
InnerData：内容说明

```

### **使用实例 获取活动主页**

* 访问示例：https://w2api.lifevc.com/act/WechatReport/CollentDebris2

    Headers健值对
```

ApiToken:QWN0QXBpfDZjYXRyZW9mMGpwbzM4ZWI0MElINDY1ZGtsZnVv
Content-Type:application/json
ustr:ESWkaLG3T8iFf7xF4ndIbH0P4phInAbNgYfdg4XTg/AC/iAg6mcp3z0YMYNe7dlVec4+Rj38OxVetifhjb7Ddg==

```
    Body内容
```

{"type":1}

```

* 返回参数示例：

```
成功
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": true,
    "ResultCode": "200",
    "DateTime": "2018-11-07 16:41:33.190"
}
```

```
使用说明
请异步访问该接口

```
