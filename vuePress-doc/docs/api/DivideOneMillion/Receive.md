# 瓜分红包-提现接口
===================


## **接口说明**

1. 接口名称：瓜分红包提现接口
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/Act/CarveUpWxRedPack/{webid}/Receive| 
| PRE|http://w2api-pre.lifevc.com/Act/CarveUpWxRedPack/{webid}/Receive |   
| 正式|https://w2api.lifevc.com/Act/CarveUpWxRedPack/{webid}/Receive | 

## **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| webid| String|  是    | 活动webid

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

* 访问示例：https://w2api.lifevc.com/Act/CarveUpWxRedPack/79043d3a58204f8796d5b206c0a4ffe2/Receive
* 返回参数示例：

```
成功
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "提现成功",
    "ResultCode": "200",
    "DateTime": "2020-04-05 13:40:18.908"
}

```

```
失败，406、409需弹提示框展示错误信息
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "请开奖后再来",
    "ResultCode": "406",
    "DateTime": "2020-04-05 11:39:02.470"
}
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "您还未满足提现资格，继续加油哦",
    "ResultCode": "406",
    "DateTime": "2020-04-05 13:33:54.992"
}
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "您的消费数据还在统计中，请稍后再试",
    "ResultCode": "406",
    "DateTime": "2020-04-05 13:39:40.812"
}
```


