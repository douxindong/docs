(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{84:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vip会员回馈-参与"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vip会员回馈-参与"}},[t._v("#")]),t._v(" VIP会员回馈-参与")]),t._v(" "),n("p",[t._v("===================")]),t._v(" "),n("h2",{attrs:{id:"接口说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口说明"}},[t._v("#")]),t._v(" "),n("strong",[t._v("接口说明")])]),t._v(" "),n("ol",[n("li",[t._v("接口名称：参与接口")]),t._v(" "),n("li",[t._v("传输方式：Post")]),t._v(" "),n("li",[t._v("接口url")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("环境")])]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("请求连接")])]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("说明")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("测试")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("http://w2api-test.lifevc.com/MarketingAct/VipMember/Create")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("PRE")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("http://w2api-pre.lifevc.com/MarketingAct/VipMember/Create")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("正式")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("https://w2api.lifevc.com/MarketingAct/VipMember/Create")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),n("p",[t._v("##** params**#\n| "),n("strong",[t._v("名称")]),t._v(" | "),n("strong",[t._v("类型")]),t._v(" | "),n("strong",[t._v("必填")]),t._v(" | "),n("strong",[t._v("说明")]),t._v(" |\nactCode\tstring\t\t是\t\t\t活动code")]),t._v(" "),n("h2",{attrs:{id:"请求头headers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求头headers"}},[t._v("#")]),t._v(" "),n("strong",[t._v("请求头Headers")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("名称")])]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("类型")])]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("必填")])]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("说明")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Type")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("请求方式，值=application/json")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("ApiToken")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("接口请求token，值为固定值，由丽芙家居提供")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("ustr")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("用户身份标识， 调用原生方法获取用户si")])])])]),t._v(" "),n("h2",{attrs:{id:"字段说明："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字段说明："}},[t._v("#")]),t._v(" "),n("strong",[t._v("字段说明：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\n\n(1) 正常参与\nInnerData{\n\tinfo{\n\t\tStatus:// 活动状态 1 正在进行 2 未开始 3已结束\n\t\tTitle：//活动名称，\n\t\tLotteryTime://开奖时间,\n\t\tMutualFunds：//共享红包金额,\n\t\tFriendsNum://邀请好友人数,\n\t\tBisectionAmount://每人可分得红包金额,\n\t\tShareTitle：//分享标题,\n\t\tShareImage：//分享图片,\n\t\tShareDesc://分享内容,\n\t\tRuleString://规则\n\t},\n\tUserInfo{\n\t\tIsLogIn：是否登录\n\t\tMyUserId：//参与人ID\n\t\tIsFull：//是否已经满员\n\t\tUserName：//用户名称\n\t\tConsumeAmount：//消费总金额\n\t\tNeedFriendsNum：//还需好友助力数量\n\t\tMyFace：//头像\n\t\tFriendsFaces：{[\n\t\t\t\n\t\t]}已助力好友头像\n\t}\n}\n\n\n（2）活动结束\nInnerData{\n\tinfo{\n\t\tActEndWonUserImage://本期活动结束中奖图\n\t\tStatus:// 活动状态 1 正在进行 2 未开始 3已结束\n\t}\n}\n                                         \n                                                                                    \n\n")])])]),n("h2",{attrs:{id:"使用实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用实例"}},[t._v("#")]),t._v(" **使用实例 **")]),t._v(" "),n("ul",[n("li",[t._v("访问示例：http://w2api-pre.lifevc.com/MarketingAct/VipMember/Create?actCode=VIPMember_01")])]),t._v(" "),n("p",[n("strong",[t._v("请求头Headers")]),t._v("\nApiToken:QWN0QXBpfDZjYXRyZW9mMGpwbzM4ZWI0MElINDY1ZGtsZnVv\nContent-Type:application/json\nustr:pZYtpHICuZK3l%2FOP9JB0FAq6GY7s41ryG5XBzZr6It%2BbB8gkzN9o3Uh2X3v%2FyC%2B0btxU5ItMvC4%3D")]),t._v(" "),n("ul",[n("li",[t._v("返回参数示例：")])]),t._v(" "),n("p",[t._v('{\n"Result": true,\n"Status": 0,\n"Message": "",\n"InnerData": {\n"Info": {\n"Title": "VIP会员回馈",\n"LotteryTime": "2020-03-15 20:00:00.000",\n"MutualFunds": 2688,\n"FriendsNum": 5,\n"BisectionAmount": 537.6,\n"ShareTitle": "帮我助力共享红包",\n"ShareImage": "http://i1.lifevccdn.com//Upload/AppCategoryBanner/f2869561f9714f8b94e48a940eb4b98b.jpg",\n"ShareDesc": "帮我助力共享红包",\n"RuleString": "规则规则规则规则规则规则"\n},\n"UserInfo": {\n"MyUserId": 4590885,\n"IsFull": false,\n"UserName": "Ash",\n"ConsumeAmount": 364,\n"NeedFriendsNum": 5,\n"MyFace": "https://thirdwx.qlogo.cn/mmopen/vi_32/tVI59CydicXHicje7Zhfa2TqlTfjKO7sWLgfOGKZkVtEBY9c0SPic3l3VAdb4ukb0dUsYZdpES0thU2oYoQthKNVQ/132"\n}\n},\n"ResultCode": "200",\n"DateTime": "2020-03-09 15:24:54.321"\n}')])])}),[],!1,null,null,null);e.default=r.exports}}]);