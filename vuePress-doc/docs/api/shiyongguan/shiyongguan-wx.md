# 微信端接口领取页面信息
===================

## **接口说明**

1. 接口名称：领取页面信息
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/TrialRefferer/{actcode}/{webid}/ReceiveInfo| 

## **请求参数格式**

## **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 
| ustr    	 | String |  否    | 用户身份标识， 取si

## **字段说明：**
```
ReceiveByUserInfo:领取者用户信息
```

## **使用实例**

* 访问示例：
```
https://w2api.lifevc.com/Act/TrialRefferer/tuijianguan1/1cc74b44b546498898d02cc9f6644b2b/ReceiveInfo
```
* 返回参数示例：
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "IsReceive": false,
        "ReceiveByUserInfo": null,
        "ShareUserInfo": {
            "UserName": "杨先森",
            "UserFace": "http://thirdwx.qlogo.cn/mmopen/vi_32/5KkJuzHoQA6V4j3Zeu7wOicScPBXO5oww8XpYo2WaZ7ppQ0AceSgjNgzlw4NDmIRoiaGr6Ip8icGGHA1XxZ2RXH4g/132"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-07-02 18:39:31.843"
}

```
失败
```
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Error": {
            "Code": "AlertMsg",
            "Msg": "仅限新用户"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-07-02 18:40:54.607"
}
```
