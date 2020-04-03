# 小绿卡送福接口-提交卡

===================


## **接口说明**

1. 接口名称：提交卡接口
2. 传输方式：POST
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/Act/GreenCard/green/1/Create| 
| PRE|http://w2api-pre.lifevc.com/Act/GreenCard/green/1/Create |   
| 正式|https://w2api.lifevc.com/Act/GreenCard/green/{id}/Create | 

## **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| | json|  是    | 
```
{
    "cardImg":"http://i1.lifevccdn.com//Upload/AppCategoryBanner/709f468d5e394db7a862e2fa986e89de.png",
    "message":"我想你了呀",
    "giftType":2,
    "giftId":1253
}
```
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

* 访问示例：https://w2api.lifevc.com/Act/GreenCard/green/1/Create
```
ApiToken:QWN0QXBpfDZjYXRyZW9mMGpwbzM4ZWI0MElINDY1ZGtsZnVv
ustr:Z7oCN9NBJgp%2f9tcaNKoyX2TX2Sb0rJ3Vr12eOAVsywpNv56RxIAtvSJi5F5lxLraOT6%2fNEDZpJA%3d
vip
ustr:ESWkaLG3T8joYlR5OhUjHJDtb1v7fhT0SAkSNwI2e9%2b8NWrsbnHHqhvM3NpHeABHhgmLg9vA51Q%3d

```
* body
```
{"cardImg":"http://i1.lifevccdn.com//Upload/AppCategoryBanner/709f468d5e394db7a862e2fa986e89de.png","message":"我想你了呀","giftType":2,"giftId":1253}
```
* 返回参数示例：

```
成功
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "WebId": "7cdf101f0f7a492eb9904533d63351c5",
        "ShareUserName": "Thea",
        "ShareUserFace": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbXiciaGfhmv9hH02EAOjh2Pia3LGCA4YwxbJZYgicB6OHFEPERpwibybIRnicrTaCDUVDMPn0oyx6pwBg/132"
    },
    "ResultCode": "200",
    "DateTime": "2020-03-21 12:22:25.366"
}

```