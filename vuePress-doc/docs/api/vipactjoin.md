# VIP会员回馈-参与
===================


## **接口说明**

1. 接口名称：参与接口
3. 传输方式：Post
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/MarketingAct/VipMember/Create  | 
| PRE|http://w2api-pre.lifevc.com/MarketingAct/VipMember/Create    |  
| 正式|https://w2api.lifevc.com/MarketingAct/VipMember/Create   |



##** params**#
| **名称** | **类型** | **必填** | **说明** |
  actCode	string		是			活动code


## **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 调用原生方法获取用户si


## **字段说明：**
```


(1) 正常参与
InnerData{
	info{
		Status:// 活动状态 1 正在进行 2 未开始 3已结束
		Title：//活动名称，
		LotteryTime://开奖时间,
		MutualFunds：//共享红包金额,
		FriendsNum://邀请好友人数,
		BisectionAmount://每人可分得红包金额,
		ShareTitle：//分享标题,
		ShareImage：//分享图片,
		ShareDesc://分享内容,
		RuleString://规则
	},
	UserInfo{
		IsLogIn：是否登录
		MyUserId：//参与人ID
		IsFull：//是否已经满员
		UserName：//用户名称
		ConsumeAmount：//消费总金额
		NeedFriendsNum：//还需好友助力数量
		MyFace：//头像
		FriendsFaces：{[
			
		]}已助力好友头像
	}
}


（2）活动结束
InnerData{
	info{
		ActEndWonUserImage://本期活动结束中奖图
		Status:// 活动状态 1 正在进行 2 未开始 3已结束
	}
}
                                         
                                                                                    

```


## **使用实例 **

* 访问示例：http://w2api-pre.lifevc.com/MarketingAct/VipMember/Create?actCode=VIPMember_01

**请求头Headers**
ApiToken:QWN0QXBpfDZjYXRyZW9mMGpwbzM4ZWI0MElINDY1ZGtsZnVv
Content-Type:application/json
ustr:pZYtpHICuZK3l%2FOP9JB0FAq6GY7s41ryG5XBzZr6It%2BbB8gkzN9o3Uh2X3v%2FyC%2B0btxU5ItMvC4%3D

* 返回参数示例：

{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Info": {
            "Title": "VIP会员回馈",
            "LotteryTime": "2020-03-15 20:00:00.000",
            "MutualFunds": 2688,
            "FriendsNum": 5,
            "BisectionAmount": 537.6,
            "ShareTitle": "帮我助力共享红包",
            "ShareImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/f2869561f9714f8b94e48a940eb4b98b.jpg",
            "ShareDesc": "帮我助力共享红包",
            "RuleString": "规则规则规则规则规则规则"
        },
        "UserInfo": {
            "MyUserId": 4590885,
            "IsFull": false,
            "UserName": "Ash",
            "ConsumeAmount": 364,
            "NeedFriendsNum": 5,
            "MyFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/tVI59CydicXHicje7Zhfa2TqlTfjKO7sWLgfOGKZkVtEBY9c0SPic3l3VAdb4ukb0dUsYZdpES0thU2oYoQthKNVQ/132"
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-03-09 15:24:54.321"
}
