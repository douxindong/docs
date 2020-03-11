VIP会员回馈
===================
### **接口说明**

1. 接口名称：参与接口
3. 传输方式：Post
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/MarketingAct/VipMember/FriendReceive  | 
| PRE|http://w2api-pre.lifevc.com/MarketingAct/VipMember/FriendReceive    |  
| 正式|https://w2api.lifevc.com/MarketingAct/VipMember/FriendReceive   |


##** params**#
| **名称** | **类型** | **必填** | **说明** |
  actCode	string		是			活动code


### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  是    | 用户身份标识， 调用原生方法获取用户si


### **字段说明：**
（1）活动结束时
InnerData{
	info{
		ActEndWonUserImage://本期活动结束中奖图
		Status:// 活动状态 1 正在进行 2 未开始 3已结束
	}
}


（2）领取成功时
InnerData{
	Info{
		CouponReceiveImage//:福袋领取后图片
		CouponReceiveDesc//：福袋领取后文案
	}
}



* 返回参数示例*领取成功
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Info": {
            "CouponReceiveImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/67ac4dae258c4b24b53b70ee9983ba2a.jpg",
            "CouponReceiveDesc": "你已领取VIP会员亲友福袋"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-03-09 16:28:37.125"
}