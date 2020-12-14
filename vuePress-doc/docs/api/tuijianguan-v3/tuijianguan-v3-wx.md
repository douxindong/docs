# 微信端
## 8.微信领取页信息
===================

### **接口说明**

1. 接口名称：微信领取页信息
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/TrialRefferer/{actcode}/{webid}/ReceiveUserInfo| 

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
https://w2api.lifevc.com/Act/Trial/tuijianguan/2933b9eda5e04eb98deda9fb4da49230/ReceiveUserInfo
```
* 返回参数示例：
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "DescriptionImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/a625752908054c2d8ccd9d76022f4c70.png",
        "WXDescriptionImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/aa6744c836984f7181f94358949c8b60.png",
        "UIJson": "{\"BrandImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/e25b0d7407be41709e00b6d9296ff9a6.png\",\"WxTitle\":\"免费试用礼包\",\"successImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/af99b017ba9f4c19a4b9257d5816964f.png\",\"BeforReceiveImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/9cf9962d287a4a4ba7de88a3924e14bd.png\",\"GifReceiveImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/9a92fdbb60a248828f032335c75c2511.gif\",\"ShareImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/4a7c8e9c49f340ea8c45eb6161072981.png\",\"GifShareImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/61f0230ded794b12bdd45bfbd06cce4b.gif\"}",
        "IsReceive": false,
        "ReceiveUserInfo": {
            "UserName": "好友",
            "UserFace": "http://i.lifevccdn.com/images/defuser.jpg"
        },
        "ShareUserInfo": {
            "UserName": "Thea",
            "UserFace": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKvialU7OBntWqnU6OqpFvhl9u4uq3fQ3nlSwopyatvFbgSXE1WtN2elkSaSNPRqIic3PDR22kp0o2A/132"
        },
        "ShareInfo": {
            "ShareImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/5778aba200a845db92506014e85c6b81.png",
            "ShareDescription": "买家居，选丽芙，一站购齐最省心！",
            "ShareTitle": "送你个免费试用礼包！丽芙家居的东西还不错，我经常买！",
            "ShareUrl": "https://w2.lifevc.com/h5activity/index.html"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 11:22:39.515"
}
```
失败
```json
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
## 9.微信领取礼包
===================

### **接口说明**

1. 接口名称：领取页面信息
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/TrialRefferer/{actcode}/{webid}/Receive| 

### **请求参数格式**

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
ReceiveByUserInfo:领取者用户信息
```

### **使用实例**

* 访问示例：
```
https://w2api.lifevc.com/Act/Trial/tuijianguan/2933b9eda5e04eb98deda9fb4da49230/Receive
```
* 返回参数示例：
```
同之前
```
失败
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "不能领取自己分享的礼包",
    "ResultCode": "406",
    "DateTime": "2020-09-01 11:25:49.288"
}
```
```json
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
    "DateTime": "2020-09-01 11:26:43.469"
}
```
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Error": {
            "Code": "AlertMsg",
            "Msg": "你已领取Limery分享的礼包，每人限领1次礼包"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 11:26:57.852"
}
```
