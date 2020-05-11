# 短视频接口
===================

## 获取Token


### **接口说明**

1. 接口名称：获获取播放的Token
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://rest-test.lifevc.com/user/randomUser| 
| PRE|http://rest-pre.lifevc.com/user/randomUser |   
| 正式|https://rest.lifevc.com/user/randomUser | 

### **请求参数格式**


### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://alivc-demo.aliyuncs.com/user/randomUser?
```
* 返回参数示例：
```json
{
	"result": "true",
	"requestId": "",
	"message": "",
	"code": "200",
	"data": {
		"id": "407639",
		"userId": "375745",
		"nickName": "Eric",
		"avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/09.png",
		"gmtCreate": "2020-05-11 15:50:58.0",
		"gmtModified": "",
		"token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNzU3NDUiLCJpYXQiOjE1ODkxODM0NTgsInN1YiI6IntcInVzZUlkXCI6XCIzNzU3NDVcIn0iLCJleHAiOjE1OTE3NzU0NTh9.tyy4sbkfTT52qhBIm5ATmaANedchXthfDNnkCVQr3_I"
	}
}
```

## 获获取播放的sts校验数据


### **接口说明**

1. 接口名称：获获取播放的sts校验数据
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://rest-test.lifevc.com/demo/getSts| 
| PRE|http://rest-pre.lifevc.com/demo/getSts |   
| 正式|https://rest.lifevc.com/demo/getSts | 

### **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| token| String|  是    | token

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://alivc-demo.aliyuncs.com/demo/getSts?token=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4Mzg5NzgiLCJpYXQiOjE1ODgwNjU4OTgsInN1YiI6IntcInVzZUlkXCI6XCI4Mzg5NzhcIn0iLCJleHAiOjE1OTA2NTc4OTh9.rmmdUir4_czU-HWjbeKUQhGmh-zB7L8dANVhdMM7Waw
```
* 返回参数示例：
```json
{
	"result": "true",
	"requestId": "47f65781-a760-4a0d-907e-580e151d5899",
	"message": "",
	"code": "200",
	"data": {
		"accessKeyId": "STS.NTRtyEXTJ7erJcTAJBPffawhn",
		"securityToken": "CAISiwJ1q6Ft5B2yfSjIr5fnP8PxtYtrgKeZSEXlpUoXXOlKjrLDjDz2IHlKdHBuCeoWs/QylWxU5voblrRtTtpfTEmBbI5t4MpVqhrwPtHTspGu/OEchIG5FDAB0PcZKImADd/iRfbxJ92PCTmd5AIRrJL+cTK9JS/HVbSClZ9gaPkOQwC8dkAoLdxKJwxk2qR4XDmrQpTLCBPxhXfKB0dFoxd1jXgFiZ6y2cqB8BHT/jaYo603392oesP9M5UxZ8wjCYnujLJMG/CfgHIK2X9j77xriaFIwzDDs+yGDkNZixf8aLOKooQxfFUpO/hnSvIY/KSlj5pxvu3NnMH7xhNKePtSVynP9kh1DXtxrYkagAEemLqiDR9FgWXEanussPmGXBdzhCFSK+hmIS5YGb0m62kF4fIVL2VHpgjcuM9j6iZ1DONwusZBCSaMYy0+Bzk+rBLbNYK2+5EXlSyil1fCca/LP91HFLFTBI48qu/UTagBUSfEyXaF6uo8I2tCJviorxS37MM/cHW52Us3FMzrMQ==",
		"expiration": "2020-04-28T14:45:52Z",
		"accessKeySecret": "9jmvEeWDK1jmLKdN5uwVSZqNs9V7xWkYiTpS6iSyc8BX"
	}
}
```


## 获推荐的视频列表

### **接口说明**

1. 接口名称：获推荐的视频列表
2. 传输方式：GET
3. 接口url

| **环境** | **请求连接** | **说明** |
| :-------: | :----------: | :---: |
| 测试|http://rest-test.lifevc.com/vod/getRecommendVideoList| 
| PRE|http://rest-pre.lifevc.com/vod/getRecommendVideoList |   
| 正式|https://rest.lifevc.com/vod/getRecommendVideoList | 

### **请求参数格式**

| **名称**   | **类型** | **必填** | **说明** |
| :-------: | :----:   | :---:   | :---:   |
| id| String|  是    |  |
| pageIndex| Int|  是    |  |
| pageSize| Int|  是    |  |
| token| String|  是    | token |

### **请求头Headers**

| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| Content-Type    	 | String |  是    | 请求方式，值=application/json
| ApiToken    	 | String |  是    | 接口请求token，值为固定值，由丽芙家居提供
| ustr    	 | String |  否    | 用户身份标识， 取si

### **字段说明：**
```
```

### **使用实例**

* 访问示例：
```
https://alivc-demo.aliyuncs.com//vod/getRecommendVideoList?
       id=
       &pageIndex=1
       &pageSize=10
       &token=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4Mzg5NzgiLCJpYXQiOjE1ODgwNjU4OTgsInN1YiI6IntcInVzZUlkXCI6XCI4Mzg5NzhcIn0iLCJleHAiOjE1OTA2NTc4OTh9.rmmdUir4_czU-HWjbeKUQhGmh-zB7L8dANVhdMM7Waw
```
* 返回参数示例：
```json
{
 "result": "true",
 "requestId": "7145372e-ebdf-4fe0-a1d1-8a2b32cd1db5",
 "message": "",
 "code": "200",
 "data": {
  "total": 34,
  "videoList": [{
   "id": "48",
   "title": "时尚潮流",
   "description": "时尚潮流",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/606a1932980c4659b0cea0c002c5f4a2/snapshots/9d860ef74eee4d8d8839bc40518e2a05-00002.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/606a1932980c4659b0cea0c002c5f4a2/snapshots/normal/1DDF26E2-16850C34008-1103-1445-334-2638600001.jpg",
   "size": 9397946,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "时尚潮流",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "606a1932980c4659b0cea0c002c5f4a2",
   "duration": 15.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/606a1932980c4659b0cea0c002c5f4a2/b314dab22948728776abe4324a47e34f-fd.mp4"
  }, {
   "id": "46",
   "title": "闺蜜姐妹淘",
   "description": "闺蜜姐妹淘",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/edc82fc54b2a495e97d70930954a4e6d/snapshots/763dfe1f4ee14425b00ea139127bcf26-00002.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/edc82fc54b2a495e97d70930954a4e6d/snapshots/normal/172AF88C-16850C3412C-1103-1445-334-2638600001.jpg",
   "size": 17134660,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "闺蜜姐妹淘",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "edc82fc54b2a495e97d70930954a4e6d",
   "duration": 15.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/edc82fc54b2a495e97d70930954a4e6d/4a18f25f3246caae7cd5b069aa04443d-fd.mp4"
  }, {
   "id": "44",
   "title": "宠物2",
   "description": "宠物2",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/4fa4049cb0514ee4a04be126be0161bf/snapshots/99204d4b28ce4f609dcb9b2fbff53641-00001.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/4fa4049cb0514ee4a04be126be0161bf/snapshots/normal/2061CC10-16850C34255-1103-1445-334-2638600001.jpg",
   "size": 1440191,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "宠物2",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "4fa4049cb0514ee4a04be126be0161bf",
   "duration": 8.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/4fa4049cb0514ee4a04be126be0161bf/45f2fc4402a620fcc4baf43877b9f865-fd.mp4"
  }, {
   "id": "43",
   "title": "彩虹",
   "description": "彩虹",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/fbb74168c5a34c9da0c3b3e778a362a6/snapshots/79f82af5f9e0489087681145aaf3e989-00001.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/fbb74168c5a34c9da0c3b3e778a362a6/snapshots/normal/3264B686-16850C342EE-1103-1445-334-2638600001.jpg",
   "size": 2809569,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "彩虹",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "fbb74168c5a34c9da0c3b3e778a362a6",
   "duration": 8.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/fbb74168c5a34c9da0c3b3e778a362a6/e024507e38863f4a7dcbc2a5e1e003a5-fd.mp4"
  }, {
   "id": "42",
   "title": "飞机起飞",
   "description": "飞机起飞",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/e791d784a3154594a5801b6040e787a0/snapshots/ec6a9070aa8f4fd7b7ee6dafe8e6d466-00001.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/e791d784a3154594a5801b6040e787a0/snapshots/normal/3E475BE2-16850C34389-1103-1445-334-2638600001.jpg",
   "size": 3362211,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "飞机起飞",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "e791d784a3154594a5801b6040e787a0",
   "duration": 10.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/e791d784a3154594a5801b6040e787a0/375dc0b1b411fcd768643a1746935425-fd.mp4"
  }, {
   "id": "41",
   "title": "傍晚",
   "description": "傍晚",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/ded4cdff72874c49b535f12150886884/snapshots/a8ff564a0ad14088acf023c2f7ee9dfa-00001.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/ded4cdff72874c49b535f12150886884/snapshots/normal/145F6E56-16850C34411-1103-1445-334-2638600001.jpg",
   "size": 3434647,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "傍晚",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "ded4cdff72874c49b535f12150886884",
   "duration": 10.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/ded4cdff72874c49b535f12150886884/67ddedca7a61d36934d9ba25aa6e8fd0-fd.mp4"
  }, {
   "id": "40",
   "title": "奔驰田野",
   "description": "奔驰田野",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/052acf8c261a4e119bf45f261b1b2011/snapshots/f264918a852a41f6b89afca81882242a-00002.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/052acf8c261a4e119bf45f261b1b2011/snapshots/normal/3F2A7CBC-16850C344AB-1103-1445-334-2638600001.jpg",
   "size": 3494385,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "奔驰田野",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "052acf8c261a4e119bf45f261b1b2011",
   "duration": 10.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/052acf8c261a4e119bf45f261b1b2011/5e6c9206d9123709cf41653a29199918-fd.mp4"
  }, {
   "id": "39",
   "title": "蓝天",
   "description": "蓝天",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/e27b48787a254bdbabe352384570aa59/snapshots/e06f8ce8ee3a48f0a2bbbc17f1adbc1e-00001.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/e27b48787a254bdbabe352384570aa59/snapshots/normal/55F99AD3-16850C34527-1103-1445-334-2638600001.jpg",
   "size": 3350264,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "蓝天",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "e27b48787a254bdbabe352384570aa59",
   "duration": 10.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/e27b48787a254bdbabe352384570aa59/2dcdf2cfb2aa0c709d3f46207a2cd23f-fd.mp4"
  }, {
   "id": "38",
   "title": "烤肉",
   "description": "烤肉",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/5e9438dafc8e443fb39b647a3f7e73a5/snapshots/781fcbb48b02478597d9867ef5db5b16-00001.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/5e9438dafc8e443fb39b647a3f7e73a5/snapshots/normal/1FD9709-16850C345B4-1103-1445-334-2638600001.jpg",
   "size": 8669132,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "烤肉",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "5e9438dafc8e443fb39b647a3f7e73a5",
   "duration": 6.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/5e9438dafc8e443fb39b647a3f7e73a5/147b35420eb4bb1b86ed228003edacd4-fd.mp4"
  }, {
   "id": "37",
   "title": "起飞风景",
   "description": "起飞风景",
   "coverUrl": "https://alivc-demo-vod.aliyuncs.com/fb4fe2dd84974080957d6264678ac23e/snapshots/fc9539b93e05480a89dfe4349704b4e1-00001.jpg",
   "creationTime": "",
   "status": "1",
   "firstFrameUrl": "http://alivc-demo-vod.aliyuncs.com/fb4fe2dd84974080957d6264678ac23e/snapshots/normal/2E163A19-16850C3465D-1103-1445-334-2638600001.jpg",
   "size": 3480053,
   "cateId": 1,
   "cateName": "推荐列表",
   "tags": "起飞风景",
   "shareUrl": "",
   "user": {
    "userId": "2435470766044",
    "userName": "Angela",
    "avatarUrl": "http://live-appserver-sh.alivecdn.com/heads/08.png"
   },
   "videoId": "fb4fe2dd84974080957d6264678ac23e",
   "duration": 10.0,
   "transcodeStatus": "",
   "snapshotStatus": "success",
   "censorStatus": "success",
   "narrowTranscodeStatus": "success",
   "fileUrl": "https://alivc-demo-vod.aliyuncs.com/fb4fe2dd84974080957d6264678ac23e/ffca262c67ec96b8ef6ae442be74ae63-fd.mp4"
  }]
 }
}
```
