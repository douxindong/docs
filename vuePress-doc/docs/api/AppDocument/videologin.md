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
| 正式|https://videoapi.lifevc.com/video/List/{pageSize}/{pageIndex}?deviceId=123&itemInfoId=0 | 

### **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
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
GoToType：跳转类型，0啥也不做，1.去详情页，2打开连接
CardShowType：卡片展示类型，1234分别代表一个卡片的样式
LinkUrl：打开的连接url
BtnText：大按钮上的文字
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
        "Total": 16,
        "VideoList": [
            {
                "WebId": "4ea08ece41c14e298d6efb2979d35a18",
                "VideoId": "090b47ca4ce0499e9993b9ebbcc13267",
                "Title": "洗床品，光用洗衣液是不够的",
                "Description": "≥90%驱螨丨加强洁净丨温和配方丨安全无刺激",
                "CoverUrl": "http://videores.lifevc.com/090b47ca4ce0499e9993b9ebbcc13267/snapshots/02145f6fb3734e21a804c04dd7dd7c2d-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/090b47ca4ce0499e9993b9ebbcc13267/snapshots/02145f6fb3734e21a804c04dd7dd7c2d-00002.jpg",
                "CateId": 1000132429,
                "User": {},
                "Duration": 15.36,
                "Size": 1757056,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/090b47ca4ce0499e9993b9ebbcc13267/snapshots/02145f6fb3734e21a804c04dd7dd7c2d-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": {
                    "Info": {
                        "Code": "839588560",
                        "ItemInfoId": 30290,
                        "GroupId": 8116,
                        "Name": "床品洗涤伴侣(除螨+加强洁净)",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/b6a9efb17605408fa0f03a7c84a3a086.jpg",
                        "SalePrice": 29.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": [
                            {
                                "Text": "加量优惠",
                                "Color": "FFFFFF",
                                "BGColor": "AB2B2C"
                            }
                        ],
                        "OnSale": true,
                        "SalableInventory": 1838,
                        "SaleStatus": 1,
                        "Appeal": "洗床品，光用洗衣液是不够的"
                    },
                    "TotalSalesCount": 6095
                }
            },
            {
                "WebId": "128628fd2aaa4c0ba7e7a427e74e812f",
                "VideoId": "b669a31434034fbda449cf518a45654e",
                "Title": "轻轻一贴，告别发霉",
                "Description": "防水防霉防油污丨撕后无痕丨易清洁丨多场景可用",
                "CoverUrl": "http://videores.lifevc.com/b669a31434034fbda449cf518a45654e/snapshots/1b50cbef400b4b8680a7cbde43712ccb-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/b669a31434034fbda449cf518a45654e/snapshots/1b50cbef400b4b8680a7cbde43712ccb-00002.jpg",
                "CateId": 1000137893,
                "User": {},
                "Duration": 15.31,
                "Size": 1759820,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/b669a31434034fbda449cf518a45654e/snapshots/1b50cbef400b4b8680a7cbde43712ccb-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": {
                    "Info": {
                        "Code": "861696630",
                        "ItemInfoId": 33949,
                        "GroupId": 9149,
                        "Name": "缝隙防水防霉透明密封贴",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/97e8dfff405c4720b0c2efaa68a65f21.jpg",
                        "SalePrice": 29.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": null,
                        "OnSale": true,
                        "SalableInventory": 410,
                        "SaleStatus": 1,
                        "Appeal": "轻轻一贴，告别发霉"
                    },
                    "TotalSalesCount": 3017
                }
            },
            {
                "WebId": "c9be1541d7f547bda13c2c0aae89a38b",
                "VideoId": "f5abd78d76d84731aec05d6db2a8087e",
                "Title": "洗菜、沥水、保鲜、一个就够",
                "Description": "一物多用丨食品级材质丨带盖设计",
                "CoverUrl": "http://videores.lifevc.com/f5abd78d76d84731aec05d6db2a8087e/snapshots/71630e031b3e472e8f473620f5f971eb-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/f5abd78d76d84731aec05d6db2a8087e/snapshots/71630e031b3e472e8f473620f5f971eb-00002.jpg",
                "CateId": 1000137893,
                "User": {},
                "Duration": 15.21,
                "Size": 34393728,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/f5abd78d76d84731aec05d6db2a8087e/snapshots/71630e031b3e472e8f473620f5f971eb-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": {
                    "Info": {
                        "Code": "876732121",
                        "ItemInfoId": 36419,
                        "GroupId": 9703,
                        "Name": "食品级双层沥水保鲜盒",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/febabbd3872646cfaeb0100feb3608a2.jpg",
                        "SalePrice": 35.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": null,
                        "OnSale": true,
                        "SalableInventory": 948,
                        "SaleStatus": 1,
                        "Appeal": "洗菜、沥水、密封保鲜，一个就够"
                    },
                    "TotalSalesCount": 570
                }
            },
            {
                "WebId": "9ecfa1d263224083a206a5f20873596f",
                "VideoId": "968f1b2d26ca4e12acef84ceff56fc97",
                "Title": "轻轻一拉，快速变锋利",
                "Description": "高效磨刀丨三段式设计丨舒适把手丨防滑底座",
                "CoverUrl": "http://videores.lifevc.com/968f1b2d26ca4e12acef84ceff56fc97/snapshots/fa182d18b5da457f8b7b2d9cf692caca-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/968f1b2d26ca4e12acef84ceff56fc97/snapshots/fa182d18b5da457f8b7b2d9cf692caca-00002.jpg",
                "CateId": 1000137893,
                "User": {},
                "Duration": 15.46,
                "Size": 35102340,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/968f1b2d26ca4e12acef84ceff56fc97/snapshots/fa182d18b5da457f8b7b2d9cf692caca-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": null
            },
            {
                "WebId": "3daee0c0e2d249fbbe92aedae86771c2",
                "VideoId": "1133532ad51d44f2a24c4c7471c090b6",
                "Title": "让下厨轻松一点儿",
                "Description": "食品级材质丨轻松高效丨多场景适用",
                "CoverUrl": "http://videores.lifevc.com/1133532ad51d44f2a24c4c7471c090b6/snapshots/79ad5dcbd77d4ba9857ea2b0ccfa36cb-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/1133532ad51d44f2a24c4c7471c090b6/snapshots/79ad5dcbd77d4ba9857ea2b0ccfa36cb-00002.jpg",
                "CateId": 1000137893,
                "User": {},
                "Duration": 15.25,
                "Size": 34345752,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/1133532ad51d44f2a24c4c7471c090b6/snapshots/79ad5dcbd77d4ba9857ea2b0ccfa36cb-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": {
                    "Info": {
                        "Code": "806901100",
                        "ItemInfoId": 29673,
                        "GroupId": 7971,
                        "Name": "下厨工具套装(时尚系列)",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/f115acc73b574e048dacca5b3156514a.jpg",
                        "SalePrice": 29.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": null,
                        "OnSale": true,
                        "SalableInventory": 160,
                        "SaleStatus": 1,
                        "Appeal": "让下厨轻松一点儿"
                    },
                    "TotalSalesCount": 2122
                }
            },
            {
                "WebId": "109d3f06cde84da0a81fb8a26984be61",
                "VideoId": "fb23a038ca2041849b9793ef5411d2cd",
                "Title": "分格设计，一桶多用省空间",
                "Description": "可拆卸分格设计丨保鲜防潮丨食品级PP丨独立开口",
                "CoverUrl": "http://videores.lifevc.com/fb23a038ca2041849b9793ef5411d2cd/snapshots/7e91c656cb9c44ed908f80cdeab2aa2d-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/fb23a038ca2041849b9793ef5411d2cd/snapshots/7e91c656cb9c44ed908f80cdeab2aa2d-00002.jpg",
                "CateId": 1000137893,
                "User": {},
                "Duration": 15.04,
                "Size": 34044596,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/fb23a038ca2041849b9793ef5411d2cd/snapshots/7e91c656cb9c44ed908f80cdeab2aa2d-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": {
                    "Info": {
                        "Code": "85950520",
                        "ItemInfoId": 35068,
                        "GroupId": 9439,
                        "Name": "五谷杂粮保鲜桶",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/57f98388611b4e1087dcd3769f23ed69.jpg",
                        "SalePrice": 55.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": null,
                        "OnSale": true,
                        "SalableInventory": 735,
                        "SaleStatus": 1,
                        "Appeal": "分格设计，一桶多用省空间"
                    },
                    "TotalSalesCount": 1000
                }
            },
            {
                "WebId": "f346ecbf329e4a53ac88c92cbbdfd40f",
                "VideoId": "c9910fab9fbf43e0afcf78b694136fbe",
                "Title": "专门为小空间准备的“晾晒树”",
                "Description": "可折叠收纳丨轻松移动丨430不锈钢管丨整体承重35kg",
                "CoverUrl": "http://videores.lifevc.com/c9910fab9fbf43e0afcf78b694136fbe/snapshots/28de11877a234d3ca691e04669d818f7-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/c9910fab9fbf43e0afcf78b694136fbe/snapshots/28de11877a234d3ca691e04669d818f7-00002.jpg",
                "CateId": 1000132429,
                "User": {},
                "Duration": 15.42,
                "Size": 36168632,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/c9910fab9fbf43e0afcf78b694136fbe/snapshots/28de11877a234d3ca691e04669d818f7-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": {
                    "Info": {
                        "Code": "830352880",
                        "ItemInfoId": 34946,
                        "GroupId": 9397,
                        "Name": "可折叠省空间晾晒架",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/531c4bd96d544f8797041c6b4aa40954.jpg",
                        "SalePrice": 99.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": null,
                        "OnSale": true,
                        "SalableInventory": 201,
                        "SaleStatus": 1,
                        "Appeal": "专为小空间准备的“晾晒树”"
                    },
                    "TotalSalesCount": 252
                }
            },
            {
                "WebId": "bee337a990a34c94b8907891d6281f81",
                "VideoId": "5a26f643b5604917bc5d6005a140ebfa",
                "Title": "抗菌率高于99%",
                "Description": "抗菌率99％丨双面可用丨食品级PP材质丨可挂可立",
                "CoverUrl": "http://videores.lifevc.com/5a26f643b5604917bc5d6005a140ebfa/snapshots/e4cfc194d170495497920b0b8ea0547e-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/5a26f643b5604917bc5d6005a140ebfa/snapshots/e4cfc194d170495497920b0b8ea0547e-00002.jpg",
                "CateId": 1000137893,
                "User": {},
                "Duration": 15.13,
                "Size": 34562072,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/5a26f643b5604917bc5d6005a140ebfa/snapshots/e4cfc194d170495497920b0b8ea0547e-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": {
                    "Info": {
                        "Code": "871178091",
                        "ItemInfoId": 33163,
                        "GroupId": 8910,
                        "Name": "食品级抗菌双面可立砧板",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/990a45f202da4925b086e0285814e67e.jpg",
                        "SalePrice": 69.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": null,
                        "OnSale": true,
                        "SalableInventory": 504,
                        "SaleStatus": 1,
                        "Appeal": "抗菌率高于99%！"
                    },
                    "TotalSalesCount": 1864
                }
            },
            {
                "WebId": "eb9b63b342d7466a84813fa3e015dc4c",
                "VideoId": "1dd3af2e48894bc8a2cd983c24e5b10e",
                "Title": "吸湿防潮，衣物持久干燥",
                "Description": "高吸湿丨大容量包装丨灵巧挂钩",
                "CoverUrl": "http://videores.lifevc.com/1dd3af2e48894bc8a2cd983c24e5b10e/snapshots/e4021f8eb53c4c37bb44b16b866b2bfe-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/1dd3af2e48894bc8a2cd983c24e5b10e/snapshots/e4021f8eb53c4c37bb44b16b866b2bfe-00002.jpg",
                "CateId": 1000132429,
                "User": {},
                "Duration": 15.04,
                "Size": 35336060,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/1dd3af2e48894bc8a2cd983c24e5b10e/snapshots/e4021f8eb53c4c37bb44b16b866b2bfe-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": {
                    "Info": {
                        "Code": "80478270",
                        "ItemInfoId": 24933,
                        "GroupId": 9961,
                        "Name": "可挂式防潮除湿剂(4袋装)",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/a6c12390de15495f91e23b1a0480519c.jpg",
                        "SalePrice": 20.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": null,
                        "OnSale": true,
                        "SalableInventory": 1571,
                        "SaleStatus": 1,
                        "Appeal": "吸湿防潮，衣物持久干燥"
                    },
                    "TotalSalesCount": 2388
                }
            },
            {
                "WebId": "632135f81f9249b09d3b9b2e778d88b0",
                "VideoId": "043e6be3417f416381a11e19a93b9ac2",
                "Title": "杂物多，丢得到处都是？",
                "Description": "你需要这款前开式收纳箱",
                "CoverUrl": "http://videores.lifevc.com/043e6be3417f416381a11e19a93b9ac2/snapshots/2a7dbee57c714a71a0d048584c39c0aa-00002.jpg",
                "FirstFrameUrl": "http://videores.lifevc.com/043e6be3417f416381a11e19a93b9ac2/snapshots/2a7dbee57c714a71a0d048584c39c0aa-00002.jpg",
                "CateId": 1000132429,
                "User": {},
                "Duration": 15.04,
                "Size": 34265756,
                "Tags": "",
                "Data": {
                    "FirstFrameUrl": "http://videores.lifevc.com/043e6be3417f416381a11e19a93b9ac2/snapshots/2a7dbee57c714a71a0d048584c39c0aa-00002.jpg",
                    "ListImgUrl": "",
                    "CardShowType": 1,
                    "GoToType": 1,
                    "LinkUrl": "",
                    "BtnText": ""
                },
                "Goods": {
                    "Info": {
                        "Code": "86353486",
                        "ItemInfoId": 18579,
                        "GroupId": 4825,
                        "Name": "前开式收纳箱(可叠加)",
                        "Image": "http://i1.lifevccdn.com//upload/AppItemHeaders/f04a47dbc6bc42f79e33aae8a91b7524.jpg",
                        "SalePrice": 59.00,
                        "ActivityPrice": 0.0,
                        "ActivityTag": null,
                        "ActivityEndDate": "0001-01-01 00:00:00.000",
                        "SaleTags": null,
                        "OnSale": true,
                        "SalableInventory": 26,
                        "SaleStatus": 1,
                        "Appeal": "杂物们，快到箱子里去"
                    },
                    "TotalSalesCount": 37431
                }
            }
        ],
        "HasNew": false
    },
    "ResultCode": "200",
    "DateTime": "2020-05-25 19:08:25.076"
}
```
