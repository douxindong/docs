# VIP会员回馈-好友助力
===================


## **接口说明**

1. 接口名称：参与接口
3. 传输方式：Post
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/MarketingAct/VipMember/{sharingUserId}/FriendCreate  | 
| PRE|http://w2api-pre.lifevc.com/MarketingAct/VipMember/{sharingUserId}/FriendCreate    |  
| 正式|https://w2api.lifevc.com/MarketingAct/VipMember/{sharingUserId}/FriendCreate   |


##** params**#
| **名称** | **类型** | **必填** | **说明** |
  actCode	string		是			活动code


## **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  是    | 用户身份标识， 调用原生方法获取用户si


## **字段说明：**
```

（1）好友已登录助力成功
InnerData{
	info{
		Status:// 活动状态 1 正在进行 2 未开始 3已结束
		Title：//活动名称，
		LotteryTime://开奖时间,
		MutualFunds：//共享红包金额,
		FriendsNum://邀请好友人数,
		BisectionAmount://每人可分得红包金额,
		ShelfImage：货架图
		ShelfImageUrl：//货架图链接
		RuleString://规则
		LuckyBagReceiveImage//:参与成功后 福袋领取图片
	},
	UserInfo{
		IsLogIn = //是否已登录
		IsFull：//是否已经满员
		IsJoin ：//是否在团中
		UserName：//用户名称
		ConsumeAmount：//消费总金额
		NeedFriendsNum：//还需好友助力数量
		MyFace：//头像
		FriendsFaces：{[
			
		]}已助力好友头像
		"IsReceived": //是否已经领取过福袋
        "IsCanReceive": //是否可以领取福袋
	}
}
                                        

（2）团人数已满
InnerData{
	info{
		CouponReceiveImage：//福袋领取图片
		CouponReceiveDesc：//福袋领取文案
	},
	UserInfo{
		IsLogIn = //是否已登录
		IsFull = //人数是否已满,
		IsJoin = //是否在团中,
		IsReceived = //是否已经领取
		IsCanReceive = //是否可以领取
	}
}

（3） 好友未登录
InnerData{
	info{
		PastWonUserImage：//上期中奖图 为null则是第一期
	},
	UserInfo{
		IsLogIn = //是否已登录
	}
}

（4）活动结束
InnerData{
	info{
		ActEndWonUserImage://本期活动结束中奖图
		Status:// 活动状态 1 正在进行 2 未开始 3已结束
	}
}


## **使用实例 **

* 访问示例：http://w2api-pre.lifevc.com/MarketingAct/4590885/FriendCreate?actCode=VIPMember_01



**请求头Headers**
ApiToken:QWN0QXBpfDZjYXRyZW9mMGpwbzM4ZWI0MElINDY1ZGtsZnVv
Content-Type:application/json
ustr:ESWkaLG3T8iFf7xF4ndIbH0P4phInAbNRj%2BFNjfRGsweGO9LOHh3oZ%2F%2FgOA2saViUmU%2BUOv3PbzHNDiExdI1GQ%3D%3D

* 返回参数示例：该情况为已在团中
{
    "Result": true,
    "Status": 0,
    "Message": "",
    "InnerData": {
        "Info": {
            "LotteryTime": "2020-03-15 20:00:00.000",
            "MutualFunds": 2688,
            "FriendsNum": 5,
            "BisectionAmount": 448,
            "ShelfImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/478ed970bfb249b49bab16c3f524ba83.jpg",
            "ShelfImageUrl": "http://www.lifevc.com",
            "RuleString": "规则规则规则规则规则规则",
            "LuckyBagReceiveImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/391d7adc65f648b4a82ba33bf27ccc66.jpg"
        },
        "UserInfo": {
            "IsFull": false,
            "IsJoin": true,
            "NeedFriendsNum": 4,
            "MyFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/tVI59CydicXHicje7Zhfa2TqlTfjKO7sWLgfOGKZkVtEBY9c0SPic3l3VAdb4ukb0dUsYZdpES0thU2oYoQthKNVQ/132",
            "FriendsFaces": [
                "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbXiciaGfhmv9hH02EAOjh2Pia3LGCA4YwxbJZYgicB6OHFEPERpwibybIRnicrTaCDUVDMPn0oyx6pwBg/132"
            ],
            "IsReceived": false,
            "IsCanReceive": true
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-03-09 15:48:50.834"
}
