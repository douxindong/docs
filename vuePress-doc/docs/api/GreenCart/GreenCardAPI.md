# 小绿卡送福接口-主页
===================


## **接口说明**

1. 接口名称：主页接口
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/Act/GreenCard/green/List | 
| PRE|http://w2api-pre.lifevc.com/Act/GreenCard/green/List |   
| 正式|https://w2api.lifevc.com/Act/GreenCard/green/List | 

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

* 访问示例：https://w2api.lifevc.com/Act/GreenCard/green/List
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
        "Title": "小绿卡送心意",
        "Id": 107,
        "CardInfo": {
            "DiscountDays": 30,
            "FriendsNum": 5,
            "BannerImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/f1635771d3154a67961a3a5e9c4a7bf9.png",
            "BannerImageList": [
                "http://i1.lifevccdn.com//Upload/AppCategoryBanner/f1635771d3154a67961a3a5e9c4a7bf9.png"
            ],
            "GetIntegralNum": 2000,
            "CardImageList": [
                {
                    "Id": 1,
                    "StyleImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/01cccb0c978d4039a7730c4bdae1e713.jpg",
                    "DataImageUrls": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/709f468d5e394db7a862e2fa986e89de.png,http://i1.lifevccdn.com//Upload/AppCategoryBanner/09401984f4724ae1a5ec8e1b416c8e0f.png",
                    "CardImageList": [
                        "http://i1.lifevccdn.com//Upload/AppCategoryBanner/709f468d5e394db7a862e2fa986e89de.png",
                        "http://i1.lifevccdn.com//Upload/AppCategoryBanner/09401984f4724ae1a5ec8e1b416c8e0f.png"
                    ]
                },
                {
                    "Id": 2,
                    "StyleImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/9b13e5923db844d0ab8e37509423a355.jpg",
                    "DataImageUrls": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/6947e0aee9654fe7ace353aae5fc81ee.png,http://i1.lifevccdn.com//Upload/AppCategoryBanner/4e983a01510f44d6ba8d816652d1a6f8.png",
                    "CardImageList": [
                        "http://i1.lifevccdn.com//Upload/AppCategoryBanner/6947e0aee9654fe7ace353aae5fc81ee.png",
                        "http://i1.lifevccdn.com//Upload/AppCategoryBanner/4e983a01510f44d6ba8d816652d1a6f8.png"
                    ]
                }
            ],
            "CustomerCoupons": {
                "CouponType": 2,
                "CouponsId": [
                    1256,
                    1255,
                    1254,
                    1253
                ]
            },
            "OldCustomerCoupons": null
        },
        "UserInfo": {
            "UserId": 3692108,
            "Balance": 4
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-03-20 23:46:20.053"
}

```

```
失败
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Error": {
            "Code": "GoPage",
            "Msg": "本活动仅限VIP参与",
            "Data": ""
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-03-20 23:21:48.600"
}

```


