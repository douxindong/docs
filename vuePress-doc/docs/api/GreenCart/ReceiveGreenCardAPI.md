# 小绿卡送福接口-领取

===================


## **接口说明**

1. 接口名称：领取接口
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/Act/GreenCard/green/665f7efcacbe4d21b2dd2e0ea70fb436/Receive| 
| PRE|http://w2api-pre.lifevc.com/Act/GreenCard/green/665f7efcacbe4d21b2dd2e0ea70fb436/Receive |   
| 正式|https://w2api.lifevc.com/Act/GreenCard/green/{WebId}/Receive | 

## **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| WebId| String|  是    | Act/GreenCard/green/{id}/Create返回的webId|

## **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

## **字段说明：**
```
```

## **使用实例**

* 访问示例：https://w2api.lifevc.com/Act/GreenCard/green/665f7efcacbe4d21b2dd2e0ea70fb436/Receive	
```
ApiToken:QWN0QXBpfDZjYXRyZW9mMGpwbzM4ZWI0MElINDY1ZGtsZnVv
ustr:Z7oCN9NBJgp%2f9tcaNKoyX2TX2Sb0rJ3Vr12eOAVsywpNv56RxIAtvSJi5F5lxLraOT6%2fNEDZpJA%3d
vip
ustr:ESWkaLG3T8joYlR5OhUjHJDtb1v7fhT0SAkSNwI2e9%2b8NWrsbnHHqhvM3NpHeABHhgmLg9vA51Q%3d

```

* 返回参数示例：

```
成功
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "IsSendDiscount": true,
        "SendGiftInfo": {
            "ActivityName": "积点卡-香薰热敷眼罩（10片装）",
            "ImageUrl": null
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-03-21 21:12:54.909"
}
```
```
失败
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "自己不能领取自己的小绿卡",
    "ResultCode": "406",
    "DateTime": "2020-03-21 00:56:24.014"
}

{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "小绿卡已被领取了",
    "ResultCode": "406",
    "DateTime": "2020-03-21 00:57:06.801"
}
```
