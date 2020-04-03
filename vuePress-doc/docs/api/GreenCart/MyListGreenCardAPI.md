# 小绿卡送福接口-我的列表

===================


## **接口说明**

1. 接口名称：我的列表接口
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/Act/GreenCard/green/UserList?pageNo=1&pageSize=10| 
| PRE|http://w2api-pre.lifevc.com/Act/GreenCard/green/UserList?pageNo=1&pageSize=10 |   
| 正式|https://w2api.lifevc.com/Act/GreenCard/green/UserList?pageNo=1&pageSize=10 | 

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

* 访问示例：https://w2api.lifevc.com/Act/GreenCard/green/UserList?pageNo=1&pageSize=10
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
        "List": [
            {
                "Title": "小绿卡送心意",
                "SettingId": 107,
                "WebId": "665f7efcacbe4d21b2dd2e0ea70fb436",
                "ShareUserName": "Thea",
                "ShareUserFace": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbXiciaGfhmv9hH02EAOjh2Pia3LGCA4YwxbJZYgicB6OHFEPERpwibybIRnicrTaCDUVDMPn0oyx6pwBg/132",
                "ReceiveUserFace": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbXiciaGfhmv9hH02EAOjh2Pia3LGCA4YwxbJZYgicB6OHFEPERpwibybIRnicrTaCDUVDMPn0oyx6pwBg/132",
                "ReceiveUserName": "Thea",
                "Message": "我想你了呀",
                "SendGiftInfo": {
                    "ActivityName": "积点卡-香薰热敷眼罩（10片装）",
                    "ImageUrl": null
                }
            },
            {
                "Title": "小绿卡送心意",
                "SettingId": 107,
                "WebId": "ece3a9991fcf41d08e00e7aab2b0e76a",
                "ShareUserName": "Thea",
                "ShareUserFace": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbXiciaGfhmv9hH02EAOjh2Pia3LGCA4YwxbJZYgicB6OHFEPERpwibybIRnicrTaCDUVDMPn0oyx6pwBg/132",
                "ReceiveUserFace": "http://i.lifevccdn.com/images/defuser.jpg",
                "ReceiveUserName": "好友",
                "Message": "我像你了",
                "SendGiftInfo": {
                    "ActivityName": "积点卡-香薰热敷眼罩（10片装）",
                    "ImageUrl": null
                }
            }
        ],
        "More": false
    },
    "ResultCode": "200",
    "DateTime": "2020-03-21 01:00:34.493"
}

```
