# 小绿卡送福接口-制卡页
===================


## **接口说明**

1. 接口名称：制卡页接口
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/Act/GreenCard/green/1/Info | 
| PRE|http://w2api-pre.lifevc.com/Act/GreenCard/green/1/Info |   
| 正式|https://w2api.lifevc.com/Act/GreenCard/green/{id}/Info | 

## **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| id| Int|  是    | 取Act/GreenCard/green/List接口CardImageList内的id字段

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

* 访问示例：https://w2api.lifevc.com/Act/GreenCard/green/1/Info
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
        "Id": 107,
        "CardInfo": {
            "Id": 1,
            "StyleImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/01cccb0c978d4039a7730c4bdae1e713.jpg",
            "DataImageUrls": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/709f468d5e394db7a862e2fa986e89de.png,http://i1.lifevccdn.com//Upload/AppCategoryBanner/09401984f4724ae1a5ec8e1b416c8e0f.png",
            "CardImageList": [
                "http://i1.lifevccdn.com//Upload/AppCategoryBanner/709f468d5e394db7a862e2fa986e89de.png",
                "http://i1.lifevccdn.com//Upload/AppCategoryBanner/09401984f4724ae1a5ec8e1b416c8e0f.png"
            ]
        },
        "UserInfo": {
            "UserId": 3692108,
            "Balance": 4
        },
        "GiftInfo": [
            {
                "ActivityName": "积点卡-香薰热敷眼罩（10片装）",
                "ImageUrl": null,
                "Id": 1253,
                "Type": 2
            },
            {
                "ActivityName": "积点卡-可触屏保湿滋养手膜",
                "ImageUrl": null,
                "Id": 1254,
                "Type": 2
            },
            {
                "ActivityName": "积点卡-山羊奶滋养保湿足膜",
                "ImageUrl": null,
                "Id": 1255,
                "Type": 2
            },
            {
                "ActivityName": "积点卡-黑科技雪肌亮肤面膜",
                "ImageUrl": null,
                "Id": 1256,
                "Type": 2
            }
        ]
    },
    "ResultCode": "200",
    "DateTime": "2020-03-21 00:20:51.474"
}

```
