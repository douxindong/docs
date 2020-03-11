VIP会员回馈
===================


### **接口说明**

1. 接口名称：活动页
3. 传输方式：Get
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/MarketingAct/VipMember/ActInfo  | 
| PRE|http://w2api-pre.lifevc.com/MarketingAct/VipMember/ActInfo    |  
| 正式|https://w2api.lifevc.com/MarketingAct/VipMember/ActInfo   |

##** params**#
| **名称** | **类型** | **必填** | **说明** |
  actCode	string		是			活动code


### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 调用原生方法获取用户si


### **字段说明：**
```

（1） 用户已登录，并且活动未结束
InnerData{
	info{
		Status:// 活动状态 1 正在进行 2 未开始 3已结束
		Title：//活动名称，
		RuleString：//活动规则，
		HeadImage：//头图,
		StartTime://活动开始时间,
		EndTime:活动结束时间,
		LotteryTime://开奖时间,
		PastWonUserImage：//上期中奖图 为null则是第一期
		ActEndWonUserImage：//本期活动结束中奖图
		HasNext：//是否有下一期
	},
	UserInfo{
		IsLogIn：是否登录
		UserName://用户名称,
		IsVipUser：//是否为VIP用户,
		IsParticipated：//是否已经参与,
		ConsumeAmount://消费总金额
	}
}

（2）活动结束
InnerData{
	info{
		ActEndWonUserImage://本期活动结束中奖图
		Status:// 活动状态 1 正在进行 2 未开始 3已结束
		HasNext：//是否有下一期
	}
}
         

(3)用户未登录
InnerData{
	Info 
	{
		PastWonUserImage//上期中奖图 为null则是第一期
		HasNext = //是否有下一期
	},
	UserInfo
	{
		IsLogIn = IsLogIn：是否登录
	}
}	 
                                                                                    

```


### **使用实例 **

* 访问示例：http://w2api-pre.lifevc.com/MarketingAct/VipMember/ActInfo?actCode=VIPMember_01

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
            "StartTime": "2020-03-01 00:00:00.000",
            "EndTime": "2020-03-14 23:59:59.000",
            "HeadImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/4db82a70cee14ddb85f34af253713970.jpg",
            "LotteryTime": "2020-03-15 20:00:00.000",
            "PastWonUserImage": null,
            "RuleString": "规则规则规则规则规则规则"
        },
        "UserInfo": {
            "UserName": "Ash",
            "IsVipUser": false,
            "IsParticipated": false,
            "ConsumeAmount": 364
        }
    },
    "ResultCode": "200",
    "DateTime": "2020-03-09 15:17:41.968"
}