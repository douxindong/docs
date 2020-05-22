# 记录日志统计接口
===================

## 记录查看日志接口
### **接口说明**

1. 接口名称：记录查看日志接口
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/video/{{WebId}}/ViewLog?DeviceId={{DeviceId}}&Duration={{Duration}} | 

### **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| WebId| String|  是    | 活动webid
| DeviceId| String|  是    | 设备ID，唯一
| Duration| String|  是    | 具体播放的时间单位：秒

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
https://w2api.lifevc.com/video/8dbd377b2d624513b81310097300ca0d/ViewLog?DeviceId=123&Duration=1 
```

### **使用实例**

* 返回参数示例：

```
成功
{
       "Result": true,
       "Status": 0,
       "Message": "",
       "InnerData": "保存成功",
       "ResultCode": "200",
       "DateTime": "2020-05-22 19:01:21.887"
   }

```
```
失败，
{
       "Result": true,
       "Status": 0,
       "Message": "",
       "InnerData": "操作失败",
       "ResultCode": "500",
       "DateTime": "2020-05-22 19:01:21.887"
   }
```

## 记录点击日志接口
===================


### **接口说明**

1. 接口名称：记录点击日志
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/video/{{WebId}}/ClickLog?DeviceId={{DeviceId}}&type={{type}}&itemInfoId=2|

### **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| WebId| String|  是    | 活动webid
| DeviceId| String|  是    | 设备ID，唯一
| type| String|  是    | 跳转商品详情1
| itemInfoId| String|  是    | 商品ID


### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
https://w2api.lifevc.com/video/a6606c6b2b3349fe89bb7223a7b6a9b0/ClickLog?DeviceId=1&type=1&itemInfoId=2 
```

### **使用实例**

* 返回参数示例：

```
成功
{
       "Result": true,
       "Status": 0,
       "Message": "",
       "InnerData": "保存成功",
       "ResultCode": "200",
       "DateTime": "2020-05-22 19:01:21.887"
   }

```
```
失败，
{
       "Result": true,
       "Status": 0,
       "Message": "",
       "InnerData": "操作失败",
       "ResultCode": "500",
       "DateTime": "2020-05-22 19:01:21.887"
   }
```


