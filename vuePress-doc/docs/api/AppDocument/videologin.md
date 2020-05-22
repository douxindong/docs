# LifeVC 短视频接口
===================

## 登录获取Token


### **接口说明**

1. 接口名称：获获取播放的Token
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://videoapi.lifevc.com/video/PlayerLogin | 

### **请求参数格式**
| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| LoginName    	 | String |  是    | 
| LoginPwd    	 | String |  是    | PwdMd5
### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | VmlkZW9BcGl8NWRsZEdpZWwyOGVqdDlkT1UyZGx1bkkz（下同）
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
Token:换取播放凭证的唯一token（会失效）
```

### **使用实例**

* 访问示例：
```
https://videoapi.lifevc.com/video/PlayerLogin
```
* 返回参数示例：
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Token": "MTpNVFF0TkVJdFFqWXRRMEV0TlVVdE9FWXRRMEl0TWtJdE1rSXRRVEF0UXpRdE5EUXRPREF0UXpZdFF6QXRSa1V0UVRZdE1USXRNREl0UVVZdFFUQXRRakV0TmprdFJUTXRNemd0TXpJdE5UWXRNemN0UkRJdFF6Z3RNMFV0UVRVdFJEY3RRVVV0TUVZdE1URXRPVVV0UlRFdE1qUXROekl0TWtVdFJUY3ROekV0UWtZdE1FRXRNREF0UmtVdE5URXRRVE10TURNdE1VUXRNVUV0UVRNdFFVWXRSREl0TkVJdE5rRXRPREF0UkRrdE1VSXRRVFF0TmpNdFFVUXRPVEV0TkRNdE9EVXRSa0V0TkVVdFJqUXRSVGt0TlRRdFFqZ3RNa1l0TmpRdFFUUXRNRGN0TmpRdE5UWXRORUV0T0RZPQ=="
    },
    "ResultCode": "200",
    "DateTime": "2020-05-22 18:11:41.255"
}
```

## 获获取播放的sts校验数据


### **接口说明**

1. 接口名称：获获取播放的sts校验数据
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://videoapi.lifevc.com/video/GetPlayAuth? | 

### **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| token| String|  是    | 换取播放凭证的唯一token（会失效）

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://videoapi.lifevc.com/video/GetPlayAuth??token={{Token}}
```
* 返回参数示例：
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "SecurityToken": "CAIS3gF1q6Ft5B2yfSjIr5aCLPTV2pJ32pa4RxfGjXobf/hOlobb1Tz2IHhJenJvCegcvvg0lGFZ7Pcblq1rT5ZUHakWvEO7qMY5yxioRqacke7XhOV2pf/IMGyXDAGBr622Su7lTdTbV+6wYlTf7EFayqf7cjPQND7Mc+f+6/hdY88QQxOzYBdfGd5SPXECksIBMmbLPvvfWXyDwEiwVxYz51ok1zxFhP7hkpHG2H33l0bnz+IZnYP1L6W/YtNkVJUFCI/ogrcpJvKbgHILu0kbrvYvlsNa/jvdudWQE4K/Om0agAFozBFMiDgjrUYRwuC+qBsEHFsoMenBLN6uskR6b58+DSk1Gb8jDGkbhn3Ppj8vftsd/9w6LaZb6okdQHBM2dRKitj6BchY5srW15C/hYqlH9ntYsLYERzN5b+O8MLN9xcumj/jX9dT2IaVTWvRwyHUVmqVSyqtzssAGSrHjGl1NA==",
        "AccessKeyId": "STS.NU7gNa7MVmTSE1wizNswbyCp7",
        "AccessKeySecret": "EBUB4azZycXPE6EmF4i48qA5wuH2cMeLk1nc1QdU9YF5",
        "Expiration": "2020-05-22 19:04:33.000"
    },
    "ResultCode": "200",
    "DateTime": "2020-05-22 18:14:34.023"
}
```
token失效 ["InnerData": "token无效"&&"ResultCode": "403",]重新换取token
```json

{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": "token无效",
    "ResultCode": "403",
    "DateTime": "2020-05-22 18:32:28.316"
}
```

## 获取视频列表

### **接口说明**

1. 接口名称：获取视频列表
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 正式|https://videoapi.lifevc.com/video/List/{{pageSize}}/{{pageIndex}}?deviceId=123&itemInfoId=0 | 

### **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| id| String|  是    |  |
| pageIndex| Int|  是    |  |
| pageSize| Int|  是    |  |
| deviceId| String|  是    | 设备ID唯一 |
| itemInfoId| String|  是    |  商品ID,没有则传0|

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://videoapi.lifevc.com/video/List/10/1?deviceId=123&itemInfoId=0
       
```
* 返回参数示例：
```json
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Total": 8,
        "VideoList": [
            {
                "WebId": "f26a7d6c2ab245d9ae8a505ceb8db95f",
                "Title": "爆浆香蕉酸奶吐司",
                "Description": "爆浆香蕉酸奶吐司",
                "CoverUrl": "http://videores.lifevc.com/7093968a31db4c588a1aa14ce5005ce3/snapshots/39e26c60d66948deb1df31c801d98166-00003.jpg",
                "FirstFrameUrl": "",
                "GoodsShowType": 1,
                "CateId": 1000137893,
                "User": {},
                "Duration": 33.8,
                "Size": 18829560,
                "Tags": "",
                "Goods": {
                    "Info": {
                        "Code": "817713613",
                        "ItemInfoId": 36839,
                        "GroupId": 9505,
                        "Name": "厨房台面收纳架系列",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/d3fad351632b49098a80242350ab6db3.jpg",
                        "SalePrice": 25.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": [
                            {
                                "Text": "新",
                                "Color": "FFFFFF",
                                "BGColor": "AB2B2C"
                            }
                        ],
                        "OnSale": true,
                        "SalableInventory": 114,
                        "SaleStatus": 1,
                        "Appeal": "瓶瓶罐罐们都整齐摆放"
                    },
                    "TotalSalesCount": 108
                }
            },
            {
                "WebId": "921fb12da30f4f6aa8d997f298eaaca9",
                "Title": "大白兔牛奶拿铁配巧克力派",
                "Description": "vol.6 大白兔牛奶拿铁配巧克力派",
                "CoverUrl": "http://videores.lifevc.com/d07105c38f684d5c8ace511d489a39be/snapshots/90c06d4ea1a141d699e4a084a7a9a388-00002.jpg",
                "FirstFrameUrl": "",
                "GoodsShowType": 1,
                "CateId": 1000137893,
                "User": {},
                "Duration": 32.27,
                "Size": 10475660,
                "Tags": "",
                "Goods": {
                    "Info": {
                        "Code": "817713613",
                        "ItemInfoId": 36839,
                        "GroupId": 9505,
                        "Name": "厨房台面收纳架系列",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/d3fad351632b49098a80242350ab6db3.jpg",
                        "SalePrice": 25.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": [
                            {
                                "Text": "新",
                                "Color": "FFFFFF",
                                "BGColor": "AB2B2C"
                            }
                        ],
                        "OnSale": true,
                        "SalableInventory": 114,
                        "SaleStatus": 1,
                        "Appeal": "瓶瓶罐罐们都整齐摆放"
                    },
                    "TotalSalesCount": 108
                }
            },
            {
                "WebId": "a6606c6b2b3349fe89bb7223a7b6a9b0",
                "Title": "一分钟教你叠床笠",
                "Description": "一分钟教你叠床笠",
                "CoverUrl": "http://videores.lifevc.com/c66c86e3c60b4d56ade5f24878c59f70/snapshots/c70207c989fb4c03996359cfe5bb4710-00002.jpg",
                "FirstFrameUrl": "",
                "GoodsShowType": 1,
                "CateId": 1000137893,
                "User": {},
                "Duration": 25.03,
                "Size": 6882880,
                "Tags": "",
                "Goods": {
                    "Info": {
                        "Code": "817713613",
                        "ItemInfoId": 36839,
                        "GroupId": 9505,
                        "Name": "厨房台面收纳架系列",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/d3fad351632b49098a80242350ab6db3.jpg",
                        "SalePrice": 25.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": [
                            {
                                "Text": "新",
                                "Color": "FFFFFF",
                                "BGColor": "AB2B2C"
                            }
                        ],
                        "OnSale": true,
                        "SalableInventory": 114,
                        "SaleStatus": 1,
                        "Appeal": "瓶瓶罐罐们都整齐摆放"
                    },
                    "TotalSalesCount": 108
                }
            },
            {
                "WebId": "3c0031e47d88418a838b25bba53374bf",
                "Title": "吐司的神仙级吃法",
                "Description": "吐司的神仙级吃法",
                "CoverUrl": "http://videores.lifevc.com/fd17986115af44c39153d4e5d4bd3d22/snapshots/c6582a71d5a84080be73fb3be363aa46-00003.jpg",
                "FirstFrameUrl": "",
                "GoodsShowType": 1,
                "CateId": 1000137893,
                "User": {},
                "Duration": 36.8,
                "Size": 22699338,
                "Tags": "",
                "Goods": {
                    "Info": {
                        "Code": "817713613",
                        "ItemInfoId": 36839,
                        "GroupId": 9505,
                        "Name": "厨房台面收纳架系列",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/d3fad351632b49098a80242350ab6db3.jpg",
                        "SalePrice": 25.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": [
                            {
                                "Text": "新",
                                "Color": "FFFFFF",
                                "BGColor": "AB2B2C"
                            }
                        ],
                        "OnSale": true,
                        "SalableInventory": 114,
                        "SaleStatus": 1,
                        "Appeal": "瓶瓶罐罐们都整齐摆放"
                    },
                    "TotalSalesCount": 108
                }
            },
            {
                "WebId": "1b553a54bbd54511a3105733eb4e7e80",
                "Title": "可可球旺仔拿铁",
                "Description": "vol.5 可可球旺仔拿铁",
                "CoverUrl": "http://videores.lifevc.com/abd55652fab542bd9849b0325c32191f/snapshots/73ff027b07504ccd878480a1ac979649-00003.jpg",
                "FirstFrameUrl": "",
                "GoodsShowType": 1,
                "CateId": 1000137893,
                "User": {},
                "Duration": 39.03,
                "Size": 23878808,
                "Tags": "",
                "Goods": {
                    "Info": {
                        "Code": "817713613",
                        "ItemInfoId": 36839,
                        "GroupId": 9505,
                        "Name": "厨房台面收纳架系列",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/d3fad351632b49098a80242350ab6db3.jpg",
                        "SalePrice": 25.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": [
                            {
                                "Text": "新",
                                "Color": "FFFFFF",
                                "BGColor": "AB2B2C"
                            }
                        ],
                        "OnSale": true,
                        "SalableInventory": 114,
                        "SaleStatus": 1,
                        "Appeal": "瓶瓶罐罐们都整齐摆放"
                    },
                    "TotalSalesCount": 108
                }
            },
            {
                "WebId": "bf83adc0c8c9456799b3308db65d92cf",
                "Title": "肉松海苔午餐肉吐司",
                "Description": "vol.7 肉松海苔午餐肉吐司",
                "CoverUrl": "http://videores.lifevc.com/eedeef51994040d9a481405bf13fdf6b/snapshots/5adfd699657e42829de2caa1946e3e7e-00003.jpg",
                "FirstFrameUrl": "",
                "GoodsShowType": 1,
                "CateId": 1000137893,
                "User": {},
                "Duration": 37.33,
                "Size": 11016564,
                "Tags": "",
                "Goods": {
                    "Info": {
                        "Code": "817713613",
                        "ItemInfoId": 36839,
                        "GroupId": 9505,
                        "Name": "厨房台面收纳架系列",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/d3fad351632b49098a80242350ab6db3.jpg",
                        "SalePrice": 25.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": [
                            {
                                "Text": "新",
                                "Color": "FFFFFF",
                                "BGColor": "AB2B2C"
                            }
                        ],
                        "OnSale": true,
                        "SalableInventory": 114,
                        "SaleStatus": 1,
                        "Appeal": "瓶瓶罐罐们都整齐摆放"
                    },
                    "TotalSalesCount": 108
                }
            },
            {
                "WebId": "c1d5ee9a06994419b95b6208e3c2b5e7",
                "Title": "小喵",
                "Description": "小喵",
                "CoverUrl": "http://videores.lifevc.com/ecf7d3ac55eb4e959d5e52507216d41d/snapshots/be4dff2e5a99467f9908aba82852250b-00001.jpg",
                "FirstFrameUrl": "",
                "GoodsShowType": 1,
                "CateId": 1000137893,
                "User": {},
                "Duration": 7.93,
                "Size": 1292978,
                "Tags": "",
                "Goods": {
                    "Info": {
                        "Code": "817713613",
                        "ItemInfoId": 36839,
                        "GroupId": 9505,
                        "Name": "厨房台面收纳架系列",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/d3fad351632b49098a80242350ab6db3.jpg",
                        "SalePrice": 25.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": [
                            {
                                "Text": "新",
                                "Color": "FFFFFF",
                                "BGColor": "AB2B2C"
                            }
                        ],
                        "OnSale": true,
                        "SalableInventory": 114,
                        "SaleStatus": 1,
                        "Appeal": "瓶瓶罐罐们都整齐摆放"
                    },
                    "TotalSalesCount": 108
                }
            },
            {
                "WebId": "8dbd377b2d624513b81310097300ca0d",
                "Title": "泡面的殿堂级吃法",
                "Description": null,
                "CoverUrl": "http://videores.lifevc.com/2a4d59ca989843939c68f879701a31f9/snapshots/3bde444ba10a4a4b8349e161a10574c4-00003.jpg",
                "FirstFrameUrl": "",
                "GoodsShowType": 1,
                "CateId": 1000137893,
                "User": {},
                "Duration": 39.61,
                "Size": 25061304,
                "Tags": "",
                "Goods": {
                    "Info": {
                        "Code": "817713613",
                        "ItemInfoId": 36839,
                        "GroupId": 9505,
                        "Name": "厨房台面收纳架系列",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/d3fad351632b49098a80242350ab6db3.jpg",
                        "SalePrice": 25.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": [
                            {
                                "Text": "新",
                                "Color": "FFFFFF",
                                "BGColor": "AB2B2C"
                            }
                        ],
                        "OnSale": true,
                        "SalableInventory": 114,
                        "SaleStatus": 1,
                        "Appeal": "瓶瓶罐罐们都整齐摆放"
                    },
                    "TotalSalesCount": 108
                }
            }
        ],
        "HasNew": false
    },
    "ResultCode": "200",
    "DateTime": "2020-05-22 18:33:56.909"
}
```
