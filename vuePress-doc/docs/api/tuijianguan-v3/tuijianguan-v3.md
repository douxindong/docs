# app端
## 1.推荐官用户信息
===================

### **接口说明**

1. 接口名称：推荐官用户信息
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/Trial/{actcode}/UserInfo| 

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
https://w2api.lifevc.com/Act/Trial/tuijianguan/UserInfo
```
* 返回参数示例：成为推荐官之前
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "ActInfo": {
            "Title": "试用推荐官",
            "WebId": "0b5dda016b714dc5b43bc10faf5ced1b",
            "RuleString": "https://w2.lifevc.com/specialv2/special.html?actcode=shiytjgrules",
            "RemainingAmout": 4173200,
            "BannerImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/799c5bd2737c4ca5966ff233b4bc5a9c.png",
            "ApplyImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/ecdcfab1056b4118af5787979c541813.png",
            "WithdrawCount": 4,
            "WithdrawAmount": 100.0,
            "ActStartTime": "2020-02-22 22:22:22.000",
            "ActEndTime": null
        },
        "UserInfo": {
            "IsBindWX": false,
            "NickName": "Limery",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/bQu2WKEhQMOF5lvG3IBL8A3cn6uwjZoTd97Ap2icQcubLAS5Tibqic3qGe5w23icNQiazvv0o4tdicLibOx9SMffE1Cww/132",
            "IsTrialReffer": false
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 10:37:21.919"
}
```
* 成为推荐官之后
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "ActInfo": {
            "Title": "试用推荐官",
            "WebId": "0b5dda016b714dc5b43bc10faf5ced1b",
            "ApplyImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/ecdcfab1056b4118af5787979c541813.png",
            "WithdrawCount": 4,
            "WithdrawAmount": 100.0,
            "ActStartTime": "2020-02-22 22:22:22.000",
            "ActEndTime": null,
            "ShareTitle": "送你个免费试用礼包！丽芙家居的东西还不错，我经常买！",
            "ShareDescription": "买家居，选丽芙，一站购齐最省心！",
            "ShareImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/5778aba200a845db92506014e85c6b81.png",
            "ShareUrl": "https://w2.lifevc.com/h5activity/index.html",
            "BannerImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/799c5bd2737c4ca5966ff233b4bc5a9c.png",
            "RemainingAmout": 4173200,
            "DescriptionImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/a625752908054c2d8ccd9d76022f4c70.png",
            "UIJson": "{\"BrandImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/e25b0d7407be41709e00b6d9296ff9a6.png\",\"WxTitle\":\"免费试用礼包\",\"successImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/af99b017ba9f4c19a4b9257d5816964f.png\",\"BeforReceiveImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/9cf9962d287a4a4ba7de88a3924e14bd.png\",\"GifReceiveImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/9a92fdbb60a248828f032335c75c2511.gif\",\"ShareImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/4a7c8e9c49f340ea8c45eb6161072981.png\",\"GifShareImage\":\"http://i1.lifevccdn.com//Upload/AppCategoryBanner/61f0230ded794b12bdd45bfbd06cce4b.gif\"}",
            "ActivityImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/1acc6e9dc5ce40608cda41c62642242d.png",
            "MaxWithdrawAmount": 500.0,
            "RuleString": "https://w2.lifevc.com/specialv2/special.html?actcode=shiytjgrules",
            "RaidersString": null,
            "Coupons": [
                {
                    "CouponType": 1,
                    "SortType": 0,
                    "CouponList": [
                        {
                            "GroupId": 0,
                            "Id": 518
                        },
                        {
                            "GroupId": 0,
                            "Id": 517
                        },
                        {
                            "GroupId": 0,
                            "Id": 516
                        }
                    ]
                },
                {
                    "CouponType": 2,
                    "SortType": 0,
                    "CouponList": [
                        {
                            "GroupId": 0,
                            "Id": 1416
                        },
                        {
                            "GroupId": 0,
                            "Id": 1417
                        },
                        {
                            "GroupId": 0,
                            "Id": 1430
                        }
                    ]
                }
            ],
            "IsReceive": false,
            "IsCanReceive": false
        },
        "UserInfo": {
            "IsBindWX": false,
            "NickName": "Limery",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/bQu2WKEhQMOF5lvG3IBL8A3cn6uwjZoTd97Ap2icQcubLAS5Tibqic3qGe5w23icNQiazvv0o4tdicLibOx9SMffE1Cww/132",
            "IsTrialReffer": true,
            "WebId": "882931c250784420a2b4f5b5c391cd5e",
            "CanWithdrawAmount": 0.00,
            "InProcessWithdrawAmount": 0.00,
            "SuccessWithdrawAmount": 0.00,
            "SuccessRefferList": [],
            "NotConfirmList": [],
            "NotOrderList": [
                {
                    "NickName": "18513256401",
                    "UserFace": "https://i1.lifevccdn.com//upload/user/face/userface-78498899f5.jpg",
                    "ConfirmTime": "2020.07.08 21:20:40"
                },
                {
                    "NickName": "勿忘初心",
                    "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Mph3n5YCbm8Ix25PxSTDWLPAr8zfafCUfntl09NmLjz3Yx44JOib9ILh0t1TQn3CWAJwWevGgbeKTZ61PEVSEoA/132",
                    "ConfirmTime": "2020.08.05 06:00:01"
                },
                {
                    "NickName": "终会忘！",
                    "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/qYIqibSGuqs2TfkA5v0tyQXOk1wuFm76X38plE59qS94HhaspS2v49LBhBVkOj14J2AxlPACxav1dicXhRcLX5yg/132",
                    "ConfirmTime": "2020.08.05 20:54:57"
                },
                {
                    "NickName": "好友",
                    "UserFace": "https://i.lifevccdn.com/images/defuser.jpg",
                    "ConfirmTime": "2020.08.06 18:40:19"
                },
                {
                    "NickName": "好友",
                    "UserFace": "https://i.lifevccdn.com/images/defuser.jpg",
                    "ConfirmTime": "2020.08.06 18:59:58"
                },
                {
                    "NickName": "好友",
                    "UserFace": "https://i.lifevccdn.com/images/defuser.jpg",
                    "ConfirmTime": "2020.08.06 19:08:18"
                },
                {
                    "NickName": "Onlyone",
                    "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ08N1O1afbQZDF3lNYlmX1CcXdic5cPh1IYtmHQx5Qww36qQ6hamMcnToFfdd9tG0SmDMwuE6eB3Q/132",
                    "ConfirmTime": "2020.08.06 19:27:49"
                }
            ],
            "ReffererOrder": 364,
            "CanOpenRedPack": []
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 10:44:28.959"
}
```

## 2.申请成为推荐官

===================

### **接口说明**

1. 接口名称：申请成为推荐官
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/Trial/{actcode}/Apply| 

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
https://w2api.lifevc.com/Act/Trial/tuijianguan/Apply
```
* 返回参数示例：申请成功
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "UserInfo": {
            "NickName": "Limery",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/bQu2WKEhQMOF5lvG3IBL8A3cn6uwjZoTd97Ap2icQcubLAS5Tibqic3qGe5w23icNQiazvv0o4tdicLibOx9SMffE1Cww/132",
            "ReffererOrder": 7
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 10:43:21.564"
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
            "Code": "AlertMsg",
            "Msg": "银卡及以上会员才可以参与"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-09-01 10:40:04.028"
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
| 正式|https://w2api.lifevc.com/Act/Trial/{actcode}/WithdrawAmoutUserInfo| 

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
https://w2api.lifevc.com/Act/Trial/tuijianguan/WithdrawAmoutUserInfo
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

## 4.提现
===================

### **接口说明**

1. 接口名称：提现
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/Trial/{actcode}/ApplyWithdraw| 

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
https://w2api.lifevc.com/Act/Trial/tuijianguan/ApplyWithdraw
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

## 5.拆红包
===================

### **接口说明**

1. 接口名称：拆红包
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/Trial/{actcode}/OpenRedpack?id=3| 

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
https://w2api.lifevc.com/Act/Trial/tuijianguan/OpenRedpack?id=3
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
## 6.跑马灯
===================

### **接口说明**

1. 接口名称：跑马灯
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/Trial/{actcode}/Marquee| 

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
https://w2api.lifevc.com/Act/Trial/tuijianguan/Marquee
```
* 返回参数示例：
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": [
        {
            "NickName": "心***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/MpH3AGJ70BL4oFKIF9MCWmpcG6ZmF182KXbV8DoicK39ybycaX9fWeQFJfiaN10b6bb7PCQRibMJ1MIic20yn3hV7w/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "欣***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/0jURB05XfQ1nxqCdSGbLZibLRiczKoeUiaglIuuBW8Rs1sm1JYG1e0vHxxNfm5KIqoZ9ibm2hLvCoZ0Yt9mRh3kNJw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "H***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/zhA6iactjDDLepUibEmlSbV3zsWmvpK7ia19MWlLEF2htXFVZBNQe5niaZyGRdbClnsEC7B6AAVZzg2XJZh3sicwHlQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "R***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/9DyRdqbawibscrFiciaF29EWCyAmgqbSRzUAbicPhzxJl2T3Hd3Aj06seibAzauia7pf0lFdVaRLZYHDjc0H5cdz4pibw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "茹***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5gUpejVfCsW5jZicj5NCJic9xXyvRAkYHGqezooH2tFfAckyuykqiaNrBoFy9pdDtS6eFeqr0Sfe2A/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "欣***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqRwDMrWsEFUjeicdRXcBFDpetAYxWAcRG46hHyNqFPqK6k6e1v9DGLaNFODKl7moBy92lsyu1Vk6w/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "O***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erZE6hMQFx7IuomYRsvRPBusr9aHULluefOyvS1hXUCHf4Wichw9MjAvYSn7pbDpypXgZialZKj9bMw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "月***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTItUBsYauh1cdD1BYDDvlqMG1RdibVCs2xqL1ykJkoWPYciczlItCNr3R9eic5xue3ycjGa1yZRNaa0g/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "小***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/e4oTBUa0bxaIvKiaORxEsIGLE0QcFGeW93BYOib73oXVAFrY2cqcDicz4xibOnAZMdLG7wPUeO9spXcPyJI3haQemQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "丽***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/xnbe85qria1yDQhw1V2D5BJkDHXiaF5ibYyH8O3xuvOpIHb0qKiafAZndj0uzia0CqQNxwy3IgeeQqzw8vwGEEic9cUg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "大***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJtcAHeIBZ3HXDvib5kyqbbQ2ibAWCFqKicumeCHrpib34BiaxO7CcEVzxCZWckAUKBR5tEagRZMVicaibPA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "小***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/NsWua1mEsYDwhGXfF0sTaEO88kKibDz8SfrhrB7lD5jat4wxoP4IFwoqaemQLVuZbDf57wd0NqJtcRwJcia8cicQw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "�***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo08VnMVppIpnKIgF96MD6rYq0dG8U4Vr5ul2fYOkZowHmkqRRCfHl4CvhUHqWWAm9eVgKiaLRABHg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "晓***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/JbfdCH3KFZF9ziauMib7dEdZ4jnqp3gvxgOv4Vu4NRQXIccCuJodjLTXJq9trH3ret6A3VxicGqpmACZgZD6H0CmQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "爱***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo2wRXrZLekUf80N6AZZXGve0A4S0j3BLHt0icfqxZj1ZSyXzKKOiaCZEfeziaBH79qTCrjeIbP2U5ag/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "颖***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/sQaWNDsB2LdStctC3j6nokKfKia04IheE0CmK8Gdq0yQF9hMnKt3MDPILMXP3icVx9ml1yamRrJad8ibOAwzMhFCg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "清***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJabsv6qz5FwQwtjVg6VYY8VY2lzJGInLOHNo2FuNCHKnaQ9tjupAwXEzRgTlQtIoTTS0DITN42oQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "日***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/8Io0icYNEspY5M6s9WoXHcZz6ZaiaO5DRmF9iaJmUgKHxn9WXRKyZgAhSgWd7ctCH5JqYFaNick2AKRfkxkPWUbrhw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "小***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/UdhP5EFBibO9AIyRoNNqyTeNtME1NcRmmJFq4zyictiaG1R2kzTTtYpL2QGLDqMReydTQJriaMgHAGMYJw614swrvQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "小***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbwhpcBATbIt6KQ7kEFvex7ZMRnIXxvXwIFXZkZyV50msZHpGqTCgeIG7vRmbI2VSctcgmW6tHlw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "L***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqk98FKczkT4QuuRq0lnYsah3wTJ7E6iaBpWxoL7tmWAX0jVsEHUPkiaoa7q13ibl48l31jQVRH4n3hg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "明***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqbx6g6H6S8XRejaUnYMbq5AzPZzMHgtLeU4W4ZatEaTkjq7xAUc3ZicibWJ0Vvt5f8cHg0ha7lcxzA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "小***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erSMbOqovqVYNJuUAH6y9o6wa3LKV49iaODaSrw1RwomNlgyor5gfxoTR4FRaFwibw0XMrv6ZzjJZFg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "素***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/6EPPpbIE1ESQQOIjw60BNdggS5Yibg7JWWFvGkiceTr3CLCq0icpWNobCjMNX60Ks7OE7KSmia2ibobOdOrzVj7FJJQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "�***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ34JRIxDzF6Qy3xME4a0BJo4dvCMu0pXKGgXibQvO3ALp0cLJPeHbRyHUVNtMzOIVjxt8w82O3lGA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "马***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/N4wh9llhB5BXMYb0TEibE5eJJOqRCdwiaVt0GzR8mu3HW03BOYTBvMoOiauRjjC7G3rL4NGRBicuibmOvSdDich409ibw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "�***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/j8LTeVoibeibiaNibXUzZNAOWyRcw4fH4paR1S5pMRXMdqWmBF0zziaxwTJ554ZornzvDHWYfMx3ZHpeF4ITZqRNyaA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "雯***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erfkxaeoUXLbR5HHdDL45g4CLHhcCsTXnzI6sTVbABUwOX43YDbKicEm3iauW0A6AuKQ4K4qSaib4kBA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "陈***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/7kxEXDDofMnrvicRhPMhXxOr95cdjuX5icXyK9NSSsdiagDn1lExC1sPLJt9ReRcBClsrFeBSb2to6o1Dx9iaThGhw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "符***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/SAibn3GOmnYBaTIaUqLQickoxwbfeUys52MqgIehLaEZEia8iaWsrpBXJsZWQfOkDvA7peJaLwIyHoRsA85zUD7LtA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "竹***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqPZM4uQ2LItRQKicweJ8z40n8ZP310icfTxwQtEibnzicrN15gafSKNEsBJBuv4WJWp6c4lp59wUWwgw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "J***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKvlm8M9T8OwNtibFYzwzLIKwZibiaz7x7MyI9oGVJbuMyn0RxnDEEvrJvGIwszMprlms6FyLud4pPiaw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "S***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/5XpKR8cg74xricfZv8n9icps3UdnPYUsHKDgB7d9YJ6MAIibgDicqxEo7H1IlcLfQCmyySAZkeEtYFpf11hP4mYCDg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "宋***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/CGPstrvAXkjFicDg9KYQH9CeF2Hh0USBEpDmIGEpItz2OMFeRFJAnmAtqDQy8NR3qkzkWpdfc7iaKAiaGvSTTYB7A/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "解***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq0vTOMBPqwJ2ibnf8HHOeLwmfkmfgQhUYTdlCG3BR49HSibziczWJChS0z8sceaokdKo2E1MZgM2H9A/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "初***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Oy6r8so5DVfAsQRFkpcUvYbSJe62PufUWpSBW3kZibOic7ogbpwI0eJ8dATBXEm8ezLiaDYV4h5JDPcsq40A72uKA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "一***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL6bKWuDa4sbjaLEuPHr97SoZxbVJgtENZtSDl1MhrJIHHibPxdgXzG13bJsg9mfdPpIoPq5hIzb5w/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "梦***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/FDYQqAONxfBM4r1jOsuwoZm5BWAffYviaZJ0nskdrkzLJuwBzSDGzjo5po4Lc5ibwTibPYY1Zv9iaicUqIl9Alaxnlg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "斯***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epddicLt5Hv0KSjw2ww6NrkaFavb7C3ibjveukyFjJjI2GPngOUyIREwweyqJ2JibTbsomfIMPuiaxnng/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "张***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKkkicgbHQOkdl0vQQqiaADlHKmib8ZVyDvSOPEj7HHf1QqFvibv4Eol1SPMAJn6KbZpiajicmiaTCehxL1Q/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "〆***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqfLQicy0icvMsCtvKGERnKWWOC2hpicYMnSM7SKRMazLIrCPWVWc0oZpibX0r6xviaSEYPj6N2q6IvAlg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "惠***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/QicTra5HbNExuMLPZgTzVWC1J2rwI9tgHPFsKoPniaR6T9uv4iaFtvskS7apAZQejp6cJwHCMoYjXOmQABv3HmP0w/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "叶***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTUcH8tvypMcuwiaqUibxpia2d17GmBlNx1kb6mmFfHhVTDia3xTkxIGJnIrfy6ZiaIiakp6Fh5jVRQQbA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "糖***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/sOYOOxpK7wN9PPPNOOd2mHsiabzJxgN0fT2rnrriawxGMwxHh5z2F0VR8LxykazzHtzIRkPFPnQsKUKIENvKXkicg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "C***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eohpItyibsAp2oNxy97kVKHZIFTk5RRu6eD0qTzryryV0qwt4lw5zJfI0aiaXn2FlRQAnXWeicuIQ1sw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "利***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0gbVISGnicpcr3HB6el3piaF3bscHnq9FcUr4qlM6Nz2SianXIg3tseo8UUYDtAFJdzpC3p5wQhZlTe9OVM2jFoQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "小***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/skK8bIFDzE9x9D9eiaQus1OU9xlH2Z0T0CMupJnGrxRXc1cX7ZKjJ1BpTyyPVAtIQPG4gI2awTEX5mgq5fCJ9Fg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "婷***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLjfMfPUDyXmNgcAwUBVZ0CyC6rqRcz8Y5PrJ8rHGuVWXy5JuDib4zmQ6ngzUG566E7zXhCUQ6bJKA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "ᝰ***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJFMOQBiaJJAPsN9R7Vg94sorIy9bHj5oHfaChrBXVSnJ5gkQgWl0PicfEuP2a6xTRHLjvs4W7YiaMyA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "沈***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eohpItyibsAp2jGibaek8tRsVszzEiaDGjpQRWib3IsBTKlLqu2J2YLcoOvnc7fsib5WrJ6pFffLatfzng/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "M***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLuM6pRjGXjA41HLZKiaKByn9MkdmlDjaPa2o5bsdSImpplgVgwaBW5KQsdhFKRe16FuLxE1d1uOKw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "�***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIqSkExvs7GfZbVib8VO1luXqJ2zR7E279WtNJaY8g2qxUCeKNX67lkgTv10WGjDmXquymU7omOt9Q/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "真***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ6SE29G1caIYSIic6kst6KnRjh4nwnyoJc1w7fgwSS4rWd8W7KM40dYDXSxpmwXSq3A77jxNnq5lw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "A***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ0F94uoYZQicZzbRsibeIlXabR7UDkesYCWickZ6UeIQZuzIOgntkZvMTvbEGjLgJUhO9bFZfJjaLEw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "爱***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIHyKKVXG4BjJe5tEQP8bM1amiagdZQFfEw4KnkWUTe2ZljCW3ibCrPpTk8sicWhQxwPkH50zGak9u9g/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "一***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep8AJ219RRenkb1PiafJ5zE04sThpRxb47icQKMyEzAfmeslliaibypgxTIM8I1uXtJXrM3nvbnwIWFiaA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "夏***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/2iblh0jo09Y7mg1vMVPyEJX3Xq2wJAjFHBzzIfLlxicldypx4WxibEh4OHxBFe0KbE1R5gEgEAhsVRy0QGFE8xDMA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "�***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/9BiceVZzBBJpJymR9LjelicsJS8L49giaMfhqicqqz9XCeTuCicuF9OGEMkxt0eAWdVaJ0IzVliaJXcJGycdzlrPJCtw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "阿***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM7ohvSicWG6mI5YbK3Cu4o64cU1DmibdLeueiczXH81NuyVrWB0O3p70RQkeBIKqy8kHbNibkbH4tTc0Q/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "苏***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL07ae6JcItQYwiabSnlkOyr7zibRuvZXf5wUDqviaSRSx8D99fxj0uCuRUfVHBI1uib7oygjqJlnDggg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "淡***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/kGyR667aC5RYP6pM6g9EKyo6CcHZABkknS8TlZwu6MNiau2EnGpEV687BYoJPILb374BYrZYuVzlvbjqtz8r9zQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "我***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8vrQkiaS1fknpvKA9onmURicAmwNjoWbeq4kWsicgEu1sEiaDw1icxHLp2QH9fb1ElQTglfdjXcmhZKw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "Y***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/L8xTgwjU5C1TF1omQ7EaJgTRqD5kwic4z1ia4rWpo1KpvfOA73cELX0ZZNssrGL2goSXLMhfLnKQAXYQwhgAxtLg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "琴***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIbTwZ2VWaGgsOCuKdC1OTTVwM3JNyvSYnlPC4FOibWIw1z5AtfqcqEUTFvlnOgzlsG2Wibic1ZxWO3Q/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "苗***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL4pDKPJOaMNn6FAgecgo8PyCTibqEeiaMvogWicKFdvjVJXMPdxsiaVDK4sdgEVYKpicSaH7NXdSQcicpg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "�***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/kkg4WVFplgN2cDvekYEsaqAjHzLgupsr9icat9BqicicLpLSav0JwHv3MJJq2nEb28ia7nhykZ4cb4dIBLL5Yn4GUg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "、***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIicA4kkUBZKX6IB4FyQhU9VqSwZ764eYXlZzS9CTW6qYJUlYnVvhfUS76ND66XDWPBLeiawibJGzc4w/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "~***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKoXtnv2qIWV6GkVoib9zuQy55kN2vGDtdic0FF1pYSQVoIkCLwF1QpMic0rF0ERhAFLcAnKJZiaj4tfA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "王***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIibTHeQYKnic4yuxSzzPu6iaVbrHbeVX0bh2Z3jocpaJZjiamS8ZOPHtGQ6mu8aHNZqY4RZM97suxcNQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "玲***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/TGCg7AplhQibcztxiaBCYia8Y4e1NNJicCpDjtoiaP3UOfmoZa27lNaicc9tErJdCvgD7yk6pibsrsZFREwvic6gvEYNZw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "海***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLgKibzSST7hPko70MicBicR9DZxzvdGviafqPZDmFZVBeU1tQUbA0JYH9xyFxbTb7pkt0ia8zmiaHGpadg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "独***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erdpKbFgRLnicjicEvWV0hH85d4mNUQ8J9n6C4vZAt8726LttAdTbqw0zCGxq08DMTQ0NLou530MEuQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "超***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKp70DaNwXvRFwatFDTLXp07zwGmPGdWpm6u5Ydc8ticTbZVthflNlUZMUH9icLkjMtpNPyjtpXc4LQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "黑***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLZjmhUBExfj12iaTibRU4sFGuAcWQMcl1ogaVxLlW0Aez2HqJfjZ8ibDHI68reQib5ic9ia1LtPcHhGvibg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "�***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/AIm1CQib0msJZVqRj0pRIPmRmQRoBB68o7G5MMt2KzN1CcBJ9rk6YpQ9q13r2sGj97iaynUfia766nickm3dTibq5NA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "e***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK6vju9pIyDtmQvBex3WCNGh77npU62vWfZn26VTqAho250h2icS6IJiavNc4s06IrKxBlPBibHM2NsQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "筱***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKbPy04717qMiczkSmjxqUecgZBeJkzSibmB4O91M0ibHnsJqU8KVqib37hC3A7E3JN8QFYz2nLmuxciag/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "糖***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/hogIh7fEhogPhwz1Qfsd0DqAMPwdoUiaMQAnjIDc2kzS0V5HLn5LdzvHbAOKxWSxGxLWErB4tibLyZaWTfeYlLwA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "清***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL2XuHauDG5ckuUR3nD4yqaWCo0XWNGdVicaXa3lko1UuAfibrFPaN77M1nFibL2xlz3d0wfrb4mtPRw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "�***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJnFD2bpUJQouiab8uARsgvLvdqMTSLibuh5yxWGanNgos5DN7cC5S4x6icGETlgj3gK0C3znReuibO6w/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "李***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/qOf1gUGLsfTz2WZVibKEcyPg9InhB43K6iansRWxKuq9E91dKeFhxJM2ToJz8zAOlpk4EW6Xx2VTEQ3MOtpFyYdw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "红***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erOq5venaygDpicREyAeyE8PicmSLEoicgI7XdcdnuibISPyGSsS7dN0JreBZaEPIzsV0ExBAPFsJhB4g/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "B***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DIzCuicXIibibGLYK8xc2ZmPxQVicYZy802r2gQricrGfOzjIfiaMiaibJB4z4ECaWJnkpQSibaStbCd1ArmByTmppc6hyw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "魔***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/SLZxIsmIDiacs42mfLTic61jVNkzibXwsCsib4VxoyEdJmrz3DfXsKDoicBXjFuxWwWs9kXbjRNibTYlMd97YWtWrXcQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "A***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoMd3W1ULAfIwFqiaw7nLlLy3AocvzL3YJ2z10J0q8CoHCR3WOsE9H814NdOqyKiaKhXv3L5dvCnQTQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "心***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/9ibt6ey8NAgxC85Bk5tmI2jARqCKBbk9hS8SmConwTL6fuI2fw30n2bl5bng9p48l9NMicHktCPUvtZqpicCATiaxQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "晓***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLJzrtHs9DeaEulVScMdwOGMOGHCdqBfDcBy0ib4tY5L3lozJBa70bact0edEua2w0cjPF5rb6FACg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "燕***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/lO7ibyLpOOBWe4q5sMGJQXFm4a2kLAPpLUJcHN7Uib16UG2Xv0voBnpmEI9QcX2Cicazgqmyxh1jvPwXIQs9ciaEzw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "马***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Hhe8HsJYTAJ0mtp9icK77wRBgk6ibuz4JVcXuf0SmTk9xaoApUrFGtyRoc3TWNAbUl1656AglCYZkK9Vfepzmp9g/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "芸***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIVy4eB1Ncz4KzXHTwKXlTs9pmdmjaZGJxFCrVsVUkGVAfP9Y1KnbaoVoLA4JR9p1KA97mmJt8aIQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "王***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKe4DjQWeXKdTC45vXrs6tibbZ7yla01cENcYLdjy4ibjk2iavUYOM49mRchmcdQibbrWzuxhacam7OmQ/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "艳***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLicKvwXnJa8jjocLaVeW3iaw0GrJhhHlzBM0tamVr5BwXCj8gS9TSB9NtcyvIibKXj4m2eTw3uHkvfA/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "L***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/icasFMa6SKbfNC5mwibKVEyHaib85LibZLPRkSdiauKtDyDZETM0R3CricHxIXayg2lpYVdYL6wwL3USeckIB6pdUrMw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "杨***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKlFhRMauhbwVQSjziboqZibhuu3ziazXxVCBBfwDRicKQoMhcgQ1Fyyj5U3J6a0vMMJT3KehCN5ot50Q/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "M***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/7SOblVZ7dNKFkggfsGYibR4mH6SYsza4O0CFNJ8WP27xBmjxsXnD35VCjkBXP41h4ib4N8I2UFyqQRWqviaAHdOibg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "�***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIicJdHFvex4cnGsHTlLxAKB1nTTPZMgD1BSKbZQeSunME0RzdZc2WbXKsbibqmG8ibn9KbXFlQdvUHg/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "花***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/NGcg3YBdmojeEaHy7ibpETdqtPaic3fJmiaTlXa7QfSgDSaCCMxuo0TysfAAxBbmEVRRibuY0dQu3qiciaibrsSZMEzcw/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "小***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/WaoYibdE2lezL8iays50IXCbur2BR3Kx8THzuUICAJS0sDsOhxEAGIgsA7tdMUhC4XFYMaQquVicYz9qp9JnzWg9A/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "肥***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/cY6x5J4LKP54VOo6ZYBzASMgKYUKOsQjTIJiaYhgyzSUVubZ3FxlrTZgibTf0GTasiafZGhHWvF94nXeeAdztwM0w/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "小***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKlicKgCNuhqMtQ5yK04RTjBjMwqBXaToTnXjaicp6TGbgliaKnmcVRnb91lQepZGibwVLCMVUOhq0v2A/132",
            "Message": "提现了100元微信红包。"
        },
        {
            "NickName": "丹***",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLXiaYTlV5iaq7BxiaianPSRegpA2fvKQLf0Q3OeVmJAPdsEVcgUfK1ZAMALAPhSibOF7kQwEdicEfwULqQ/132",
            "Message": "提现了100元微信红包。"
        }
    ],
    "ResultCode": "200",
    "DateTime": "2020-09-01 11:16:34.910"
}
```

## 7.领取限时礼包
===================

### **接口说明**

1. 接口名称：领取限时礼包
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://w2api.lifevc.com/Act/Trial/{actcode}/GiftReceive| 

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
https://w2api.lifevc.com/Act/Trial/tuijianguan/GiftReceive
```
* 返回参数示例：成功
```
同之前
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
