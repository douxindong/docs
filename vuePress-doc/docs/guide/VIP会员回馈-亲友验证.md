VIP会员回馈
===================
### **接口说明**

1. 接口名称：参与接口
3. 传输方式：Get
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://w2api-test.lifevc.com/VipMember/{sharingUserId}/FriendCreateCheck  | 
| PRE|http://w2api-pre.lifevc.com/VipMember/{sharingUserId}/FriendCreateCheck    |  
| 正式|https://w2api.lifevc.com/VipMember/{sharingUserId}/FriendCreateCheck   |


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


（2）用户未登录时
InnerData{
	info{
		PastWonUserImage://历史中奖图
		Status:// 活动状态 1 正在进行 2 未开始 3已结束
	}，UserInfo{
		IsLogIn:// 是否登录
	}
}

（3）用户已登录

InnerData{
	info{
		PastWonUserImage://历史中奖图
		Status:// 活动状态 1 正在进行 2 未开始 3已结束
	}，UserInfo{
		IsLogIn:// 是否登录
		IsParticipated：//是否已在本期活动中助力过
		IsJoin：//是否在此助力中
		RealName：//亲友名称
		RealFace：//亲友头像
		SharingUserId：//分享人Id
	}
}

