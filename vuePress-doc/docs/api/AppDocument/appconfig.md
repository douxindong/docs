# LifeVC app配置接口
===================

## **接口说明**

1. 接口名称：app配置接口
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://rest.lifevc.com/content/Setting | 

## **请求参数格式**

## **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | rest的
| ustr    	 | String |  否    | 用户身份标识， 取si

## **字段说明：**
```
EnableVideoPlugin 为false的话不初始化任何与视频相关的SDK和预加载
EnableVideo 为false的话第三个TabBar为闲逛
下次生效本次存储保证性能
```

## **使用实例**

* 访问示例：
```
https://rest.lifevc.com/content/Setting
```
* 返回参数示例：
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "EnableVideoPlugin": true,
        "EnableVideo": true
    },
    "ResultCode": "200",
    "DateTime": "2020-05-22 20:46:28.684"
}
```
