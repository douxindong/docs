# 接口文档
## 1.月度超级粉丝榜用户信息
===================

### **接口说明**

1. 接口名称：月度超级粉丝榜用户信息
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/FansRank/{actcode}/userinfo| 

### **请求参数格式**

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | QWN0QXBpfDZjYXRyZW9mMGpwbzM4ZWI0MElINDY1ZGtsZnVv
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://w2api.lifevc.com/Act/FansRank/202008/userinfo
```
* 返回参数示例：
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "ActInfo": {
            "Title": "8月度超级粉丝榜",
            "RuleString": null,
            "CalcBeginTime": "2020-08-20 00:00:00.000",
            "CalcEndTime": "2020-08-30 00:00:00.000",
            "GiftImage1": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/0d66acba01724f9a9fadc8dd7687dc0f.jpg",
            "GiftImage2": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/bb409b31bf7b4d848730f91f4c786eeb.jpg",
            "GiftImage3": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/5011b7a28b764c749a85aae8e9d7560d.jpg",
            "GiftImage4": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/39eb0a65f334421187abcefac4248649.jpg",
            "LotteryTime3": "2020-09-14 00:00:00.000",
            "UIJson": null,
            "ActStartTime": "2020-09-14 00:00:00.000",
            "ActEndTime": null
        },
        "UserInfo": {
            "IsShowTips": false,
            "IsBindWX": true,
            "NickName": "Thea",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbXiciaGfhmv9hH02EAOjh2Pia3LGCA4YwxbJZYgicB6OHFEPERpwibybIRiaibMX78OK2GtH6AzrMOhIsw/132",
            "IsJoin": true,
            "HasAccess": true,
            "Province": "上海",
            "City": "上海",
            "County": "皇后区",
            "GoodsAmount": 9999999.00,
            "RankNum": 1,
            "RewardList": [
                {
                    "Type": 4,
                    "Status": 1,
                    "UpdateTime": "0001-01-01 00:00:00.000"
                },
                {
                    "Type": 1,
                    "Status": 100,
                    "UpdateTime": "2020-09-15 20:16:30.420"
                },
                {
                    "Type": 2,
                    "Status": 1,
                    "UpdateTime": "0001-01-01 00:00:00.000"
                }
            ]
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-16 09:47:25.831"
}
```

## 2.开启

===================

### **接口说明**

1. 接口名称：开启
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/FansRank/{actcode}/Join| 

### **请求参数格式**

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | QWN0QXBpfDZjYXRyZW9mMGpwbzM4ZWI0MElINDY1ZGtsZnVv
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://w2api.lifevc.com/Act/FansRank/202008/Join
```
* 返回参数示例：成功
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": true,
    "ResultCode": "200",
    "DateTime": "2020-09-16 09:46:59.853"
}
```
* 失败
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Error": {
            "Code": "NoAccess",
            "Msg": "未进排名榜"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-16 09:46:59.853"
}
```

## 3.提现金额页用户信息
===================

### **接口说明**

1. 接口名称：提现金额页用户信息
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/FansRank/{actcode}/WithdrawAmoutUserInfo| 

### **请求参数格式**

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://w2api.lifevc.com/Act/FansRank/202008/WithdrawAmoutUserInfo
```
* 返回参数示例：有记录的
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "UserInfo": {
            "CanWithdrawAmount": 0.00,
            "InProcessWithdrawAmout": 100.00,
            "SuccessWithdrawAmount": 0.00,
            "AllList": [
                {
                    "Amout": "-100.00",
                    "Time": "2020.08.31 20:53:34",
                    "Type": 4,
                    "TypeName": "申请提现"
                },
                {
                    "Amout": "90.00",
                    "Time": "2020.08.31 20:16:05",
                    "Type": 2,
                    "TypeName": "礼包领取奖励"
                },
                {
                    "Amout": "5.00",
                    "Time": "2020.08.31 20:16:05",
                    "Type": 2,
                    "TypeName": "礼包领取奖励"
                },
                {
                    "Amout": "5.00",
                    "Time": "2020.08.31 20:16:05",
                    "Type": 2,
                    "TypeName": "礼包领取奖励"
                }
            ],
            "InProcessList": [
                {
                    "Amout": "-100.00",
                    "Time": "2020.08.31 20:53:34",
                    "Type": 4,
                    "TypeName": "申请提现"
                }
            ],
            "SuccessList": [],
            "FailedList": []
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 10:50:44.692"
}
```
* 无记录的
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "UserInfo": {
            "CanWithdrawAmount": 0.00,
            "InProcessWithdrawAmout": 0.00,
            "SuccessWithdrawAmount": 0.00,
            "AllList": [],
            "InProcessList": [],
            "SuccessList": [],
            "FailedList": []
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 10:49:09.420"
}
```

## 4.拆红包
===================

### **接口说明**

1. 接口名称：拆红包
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/FansRank/{actcode}/OpenRedpack| 

### **请求参数格式**

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://w2api.lifevc.com/Act/FansRank/202008/OpenRedpack
```
* 返回参数示例：成功
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Result": false,
        "ResultMsg": "",
        "UserInfo": {
            "CanWithdrawAmount": 0.00,
            "InProcessWithdrawAmount": 100.00,
            "SuccessWithdrawAmount": 0.00
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 11:10:13.108"
}
```
* 已经拆过红包了
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "已经拆过红包了",
    "ResultCode": "406",
    "DateTime": "2020-09-16 09:54:51.116"
}
```
## 5.提现
===================

### **接口说明**

1. 接口名称：提现
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/FansRank/{actcode}/ApplyWithdraw| 

### **请求参数格式**

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://w2api.lifevc.com/Act/FansRank/202008/ApplyWithdraw
```
* 返回参数示例：成功
```
同之前
```
* 申请失败
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Error": {
            "Code": "AmountNotFull",
            "Msg": "申请失败，可提现金额不足100.0元",
            "Data": 100.00
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 10:58:20.348"
}
```
* 红包已申请过提现
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "红包已申请过提现",
    "ResultCode": "406",
    "DateTime": "2020-09-16 10:25:08.786"
}
```

## 6.领取优惠券
===================

### **接口说明**

1. 接口名称：领取优惠券
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/FansRank/{actcode}/ReceiveCoupon| 

### **请求参数格式**

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://w2api.lifevc.com/Act/FansRank/202008/ReceiveCoupon
```
* 返回参数示例：成功
```
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "IsReceive": false,
        "ReceiveByUserInfo": null,
        "ShareUserInfo": {
            "UserName": "Limery",
            "UserFace": "http://thirdwx.qlogo.cn/mmopen/vi_32/5KkJuzHoQA6V4j3Zeu7wOicScPBXO5oww8XpYo2WaZ7ppQ0AceSgjNgzlw4NDmIRoiaGr6Ip8icGGHA1XxZ2RXH4g/132"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-07-02 18:39:31.843"
}

```
* 返回参数示例：成功
```
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "已经领取过了",
    "ResultCode": "406",
    "DateTime": "2020-09-16 09:56:16.914"
}
```
* 失败
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Error": {
            "Code": "GoPage",
            "Msg": "活动已结束",
            "Data": "http://w2.lifevc.com/end.html"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 11:20:10.088"
}
```
