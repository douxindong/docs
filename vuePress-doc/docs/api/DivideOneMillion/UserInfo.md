# 瓜分红包-用户信息接口
===================


## **接口说明**

1. 接口名称：瓜分红包用户信息接口
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/Act/CarveUpWxRedPack/UserInfo?actCode=TestCelebrationCode  | 
| PRE|http://w2api-pre.lifevc.com/Act/CarveUpWxRedPack/UserInfo?actCode=TestCelebrationCode   |   
| 正式|https://w2api.lifevc.com/Act/CarveUpWxRedPack/UserInfo?actCode=TestCelebrationCode  | 

## **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| actCode| String|  是    | 活动code

## **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

## **字段说明：**
```
TotalAmount:累计购物金额
NeedAmount:差的钱数
TotalSuccessNum:目前已参与成功的人数
LotteryTime:开奖时间
IsSuccess:是否满足
IsLottery:是否已开奖
IsBindWX:是否已绑定微信
UserFace:微信头像
NickName:微信昵称
CashOutStatus:提现状态：1未提现、2提现中、3已失效、4已提现、5已过期；为0的话说明：未满足条件或者未开奖ShareAmountPerCapita:人均瓜分金额
CashOutDays：有效天数
OrderStartTime订单开始时间即圈定某时间段内下的订单满足条件
```

## **使用实例**

* 访问示例：https://w2api.lifevc.com/Act/CarveUpWxRedPack/UserInfo?actCode=TestCelebrationCode
* 返回参数示例：

```
成功
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "ActInfo": {
            "Title": "九周年庆典",
            "WebId": "79043d3a58204f8796d5b206c0a4ffe2",
            "BannerImages": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/9bc328cfd274454581d0fb6d272aa4b4.jpg",
            "OtherImages": null,
            "ActStartTime": "2020-04-03 00:00:00.000",
            "ActEndTime": "2020-05-07 00:00:00.000",
            "OrderStartTime": "2020-04-08 00:00:00.000",
            "OrderEndTime": "2020-04-29 00:00:00.000",
            "LotteryTime": "2020-04-30 10:00:00.000",
            "IsLottery": false,
            "TotalSuccessNum": 0,
            "DividingAmount": 1000000,
            "ShareAmountPerCapita": 1000000
        },
        "UserInfo": {
            "TotalAmount": 0,
            "NeedAmount": 300,
            "IsSuccess": false,
            "IsBindWX": true,
            "NickName": "Thea",
            "UserFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbXiciaGfhmv9hH02EAOjh2Pia3LGCA4YwxbJZYgicB6OHFEPERpwibybIRnicrTaCDUVDMPn0oyx6pwBg/132",
            "CashOutStatus": 0
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-04-05 11:37:28.121"
}

```

```
失败，406、409需弹提示框展示错误信息


```


