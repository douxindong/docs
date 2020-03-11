权益领券接口
===================


### **接口说明**

1. 接口名称：权益领券接口
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/MarketingAct/{webid}/Reward/Receive?idtype={idtype}&id={id}  | 
| PRE|http://w2api-pre.lifevc.com/MarketingAct/{webid}/Reward/Receive?idtype={idtype}&id={id}  |   
| 正式|https://w2api.lifevc.com/MarketingAct/{webid}/Reward/Receive?idtype={idtype}&id={id}  | 

### **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| webid| String|  是    | 活动webid
| idtype| Int|  是    | 取info接口内的Idtype
| id| Int|  是    | 取info接口内的InfoId

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
Recived=true 表示已领取
IsEmpty=true 表示已抢空

```

### **使用实例**

* 访问示例：https://w2api.lifevc.com/MarketingAct/{webid}/Reward/Receive?idtype={idtype}&id={id}
* 返回参数示例：

```
成功
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": true,
    "ResultCode": "200",
    "DateTime": "2019-10-17 18:22:43.516"
}

```

```
失败，406、409需弹提示框展示错误信息
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "券已经不存在了，请刷新页面后再试",
    "ResultCode": "406",
    "DateTime": "2019-10-17 17:57:31.774"
}

{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "你已领取过啦",
    "ResultCode": "406",
    "DateTime": "2019-10-17 18:00:58.021"
}

```
