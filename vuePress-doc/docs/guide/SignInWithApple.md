# Sign In With Apple 从登陆到服务器验证
## 客户端
关于手机端登录的代码，...，登录成功后， 返回的参数：
<a data-fancybox title="images" href="http://i1.lifevccdn.com//Upload/AppCategoryBanner/3452b814c4c940aca35f413f97b59155.jpg">![images](http://i1.lifevccdn.com//Upload/AppCategoryBanner/3452b814c4c940aca35f413f97b59155.jpg)</a>

授权成功：
```json5
{
    "appleIDCredential" : "<ASAuthorizationAppleIDCredential: 0x280014360 { userIdentifier: 000277.009b1336f18a492493a410166afc2841.0404, authorizedScopes: (\n) }>",
    "authorizationCode" : "c209fbde0f81d4df983164722f1a260f7.0.nsxx.xhJeNEk-CURzSAJfP5lgfQ",
    "email" : "douxindong@icloud.com",
    "familyName" : "\U7aa6",
    "givenName" : "\U5fc3\U4e1c",
    "identityToken" : "eyJraWQiOiJlWGF1bm1MIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmxpZmV2Yy5pb3NBcHAiLCJleHAiOjE1OTczNzg0NjMsImlhdCI6MTU5NzM3Nzg2Mywic3ViIjoiMDAwMjc3LjAwOWIxMzM2ZjE4YTQ5MjQ5M2E0MTAxNjZhZmMyODQxLjA0MDQiLCJjX2hhc2giOiJFY0R3eXZzOUphOEVkWW9GWUNxaE9RIiwiZW1haWwiOiJkb3V4aW5kb25nQGljbG91ZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJhdXRoX3RpbWUiOjE1OTczNzc4NjMsIm5vbmNlX3N1cHBvcnRlZCI6dHJ1ZSwicmVhbF91c2VyX3N0YXR1cyI6Mn0.uLFfVB2-VHvGauQT6Pp2rjdSoL99l_pkpZXFAP_B__4Bb4oTM0gBlHIkieZAoECFphfcE-o_zX79VH6yIs9L7tMHORRjcw4uwRbuu99JZlxqXWQZXDhBinmfQWVFypJLsqz4dvhzHL8ywaXH9M0BdlmW5gghB8K8X9VTNHrK5ogRQH92Aj-y2KQJxakrFKdnuTm_NlDIcH--D83cZ9-0Lmh6xTRo-XE1FdyTXlzM_Cayncd1qi9xnTDfeGAfzoLxTNyHgjzlLOUbZiK5pNU19an-XRYBqjvEEdFc9MW1bVTZAck6xQD81yl2SS0YPlT51PFp2A_66fr4aw3j2MYs-A",
    "realUserStatus" : 2,
    "user" : "000277.009b1336f18a492493a410166afc2841.0404",//苹果用户唯一标识符，它在同一个开发者账号下的所有 App 下是一样的，我们可以用它来与后台的账号体系绑定起来（类似于微信的OpenID）。
}
```


## 服务端
Sign in with Apple REST API文档：[sign_in_with_apple_rest_api](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api)

苹果提供给用户服务端两种验证方式：

## 1.基于授权码authorizationCode的后端验证`推荐`
[generate_and_validate_tokens](https://developer.apple.com/documentation/sign_in_with_apple/generate_and_validate_tokens)
<a data-fancybox title="authorizationCod" href="http://i1.lifevccdn.com//Upload/AppCategoryBanner/fcf734739e334ad3af534ab98f0ce000.png">![authorizationCod](http://i1.lifevccdn.com//Upload/AppCategoryBanner/fcf734739e334ad3af534ab98f0ce000.png)</a>
```
过程：
1.APP端苹果登录,获取授权信息
2.服务端拿着code去Apple服务端获取授权验证，
POST https://appleid.apple.com/auth/token
```
| **名称** | **类型** | **必填** | **说明** |
| :-------: 	 | :----: | :------:  | :---: |
| client_id    	 | String |  是    |com.lifevc.iosApp|
| client_secret    	 | String |  是    | 生成方法见下方| 
| code    	 | String |  是    |{authorizationCode}|
| grant_type    	 | String |  是    |authorization_code(授权码验证时用)或refresh_token（刷新令牌验证）| 
| refresh_token    	 | String |  否    |刷新令牌验证请求需要此参数。|
| redirect_uri    	 | String |  否    | web网站时需要| 
```
client_secret生成:相关参数
key_file = "Path to the private key"//见worktle附件，p8文件路径
team_id = "7LU4PEC2RN"
client_id = "com.lifevc.iosApp"
key_id = "S9U923M4J7"
```
备注：生成方法
 JWT.encode(...)
 
 网上亲测通过示例：
 建一个secret_gen.rb文件将以下代码copy进去
```ruby
require "jwt"

# key_file = "Path to the private key"
# team_id = "Your Team ID"
# client_id = "Your App Bundle ID"
# key_id = "The Key ID of the private key"
key_file = "/Users/lifevc/Desktop/signinwithapple/AuthKey_S9U923M4J7.p8"
team_id = "7LU4PEC2RN"
client_id = "com.lifevc.iosApp"
key_id = "S9U923M4J7"

validity_period = 180 # In days. Max 180 (6 months) according to Apple docs.

private_key = OpenSSL::PKey::EC.new IO.read key_file

token = JWT.encode(
	{
		iss: team_id,
		iat: Time.now.to_i,
		exp: Time.now.to_i + 86400 * validity_period,
		aud: "https://appleid.apple.com",
		sub: client_id
	},
	private_key,
	"ES256",
	header_fields=
	{
		kid: key_id 
	}
)
puts token
```
```
sudo ruby secret_gen.rb 
得到如下结果:
yJraWQiOiJTOVU5MjNNNEo3IiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiI3TFU0UEVDMlJOIiwiaWF0IjoxNTk3NjM1MjEwLCJleHAiOjE2MTMxODcyMTAsImF1ZCI6Imh0dHBzOi8vYXBwbGVpZC5hcHBsZS5jb20iLCJzdWIiOiJjb20ubGlmZXZjLmlvc0FwcCJ9.VGLEYV00fTX-2g_e0of_f-rRxFnMSvWsBCvcvjf6nnRu0TDDENUpo3-rRzjyXltsqXHega4SViCU-wthk0P_5Q
```
然后将此结果填入client_secret参数发起POST请求：
[以下参数文档](https://developer.apple.com/documentation/sign_in_with_apple/generate_and_validate_tokens)
```json
{
    "access_token": "ae920b9fba9314c138f9bca02ff165f95.0.msxx.u97aeotTYDpL9O98YzFR3w",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "ra7882ca192ca4bd3a221a60b44148f14.0.msxx.aS-IIqT_AFyQUeHLtXDTIQ",
    "id_token": "eyJraWQiOiJlWGF1bm1MIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmxpZmV2Yy5pb3NBcHAiLCJleHAiOjE1OTc2MzU5NjksImlhdCI6MTU5NzYzNTM2OSwic3ViIjoiMDAwMjc3LjAwOWIxMzM2ZjE4YTQ5MjQ5M2E0MTAxNjZhZmMyODQxLjA0MDQiLCJhdF9oYXNoIjoiNDNKSElIbTJWM0NMV2I4RmpTWHF3dyIsImVtYWlsIjoiZG91eGluZG9uZ0BpY2xvdWQuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJ0cnVlIiwiYXV0aF90aW1lIjoxNTk3NjM1MTk0LCJub25jZV9zdXBwb3J0ZWQiOnRydWV9.Wym3wOhaQwUhuSRWByjud9rD16YhMlxtyVcCutiQDzv549nZJqei5F-COuQZXOrrBliiFCGgNoXhaBQtoac-F3DXHm4yCohkA2oY--4Sxl7t8O5ETBQOZuz-ZX6YQ_eSLR0wrtJJbMrRqBlner-dapGV-28w2Rmw4kA9oSfra5NnJgsFtobOhXBu3THXOBmb5QP9tXeLiEY6k3wnY2cxnEjhVhLdZjKgL9emIaR6RFKmlSUo50kkRfTeuIaZ7gAJDno3L4lrfs0N0EbvceHmwOceF34CFWxDbMpbTkiabUvwQAkqI1ylSB0Ld1xfIxE9txH91bUIxMaXkgmjbTHoWA"
}
```
其中 id_token 也是 JWT 数据，decode 出 payload 部分如下：
```json
{ 
  "iss":"https://appleid.apple.com",
  "aud":"com.lifevc.iosApp",
  "exp":1597636054,
  "iat":1597635454,
  "sub":"000277.009b1336f18a492493a410166afc2841.0404",
  "at_hash":"7JjFtNXGS_1BTL5BU7fZ4g",
  "email":"douxindong@icloud.com",
  "email_verified":"true"
}
```
其中`aud`与app的bundleID一致，`sub` 部分即与手机端获得的 `user` 一致，服务器端通过对比 `sub` 字段信息是否与手机端上传的 `user` 信息一致来确定是否成功登录。
进行`lifevc`业务侧注册登录


## 2.基于JWT的算法验证
[fetch_apple_s_public_key_for_verifying_token_signature](https://developer.apple.com/documentation/sign_in_with_apple/fetch_apple_s_public_key_for_verifying_token_signature)

时序图：<a data-fancybox title="时序图" href="https://img-blog.csdnimg.cn/20200528114828379.png">![时序图](https://img-blog.csdnimg.cn/20200528114828379.png)</a>
```
过程：
 1.需要逆向构造过程，decode出JWT的三个部分（主要是第一部分【包含确认使用哪个key去构造公钥】和第二部分【包含用户sub"openID"信息】）
 2.从appleid.apple.com/auth/keys中获取公钥，并将公钥转换为pem对JWT进行验证
 3.如identityToken通过验证，则可以根据其payload中的内容进行验证等操作
```
1.Apple公钥接口：`Public Key`

`https://appleid.apple.com/auth/keys`
```json
{
  "keys": [
    {
      "kty": "RSA",
      "kid": "86D88Kf",
      "use": "sig",
      "alg": "RS256",
      "n": "iGaLqP6y-SJCCBq5Hv6pGDbG_SQ11MNjH7rWHcCFYz4hGwHC4lcSurTlV8u3avoVNM8jXevG1Iu1SY11qInqUvjJur--hghr1b56OPJu6H1iKulSxGjEIyDP6c5BdE1uwprYyr4IO9th8fOwCPygjLFrh44XEGbDIFeImwvBAGOhmMB2AD1n1KviyNsH0bEB7phQtiLk-ILjv1bORSRl8AK677-1T8isGfHKXGZ_ZGtStDe7Lu0Ihp8zoUt59kx2o9uWpROkzF56ypresiIl4WprClRCjz8x6cPZXU2qNWhu71TQvUFwvIvbkE1oYaJMb0jcOTmBRZA2QuYw-zHLwQ",
      "e": "AQAB"
    },
    {
      "kty": "RSA",
      "kid": "eXaunmL",
      "use": "sig",
      "alg": "RS256",
      "n": "4dGQ7bQK8LgILOdLsYzfZjkEAoQeVC_aqyc8GC6RX7dq_KvRAQAWPvkam8VQv4GK5T4ogklEKEvj5ISBamdDNq1n52TpxQwI2EqxSk7I9fKPKhRt4F8-2yETlYvye-2s6NeWJim0KBtOVrk0gWvEDgd6WOqJl_yt5WBISvILNyVg1qAAM8JeX6dRPosahRVDjA52G2X-Tip84wqwyRpUlq2ybzcLh3zyhCitBOebiRWDQfG26EH9lTlJhll-p_Dg8vAXxJLIJ4SNLcqgFeZe4OfHLgdzMvxXZJnPp_VgmkcpUdRotazKZumj6dBPcXI_XID4Z4Z3OM1KrZPJNdUhxw",
      "e": "AQAB"
    }
  ]
}
```
>得到一个 keys 列表，也就是 JWK 列表。
 这也就意味着客户端向服务器提交的 `identityToken` 可能是用 `keys` 里面的特定某个 `JWK` 来进行加密的。
 接下来就需要我们确定当前的 `identityToken` 到底是使用哪个 `JWK` 来加密的，这样做可以避免批量生成证书，提升性能。
```java
//对前端传来的JWT字符串identityToken的第一部分进行解码
base64.decode('eyJraWQiOiJlWGF1bm1MIiwiYWxnIjoiUlMyNTYifQ')
decode出JWT的header部分得到
{"kid": "eXaunmL","alg": "RS256"}
```
根据`kid`遍历找出对应的`n`、`e`,构造公钥
```java
/**
 * 从hex string生成公钥
 *
 * @param stringN
 * @param stringE
 * @return 构造好的公钥
 * @throws NoSuchAlgorithmException
 * @throws InvalidKeySpecException
 */
public static PublicKey createPublicKey(final String stringN, final String stringE)
        throws NoSuchAlgorithmException, InvalidKeySpecException {
    try {
        // BigInteger N = new BigInteger(stringN, 16); // hex base
        // BigInteger E = new BigInteger(stringE, 16); // hex base

        final BigInteger modulus = new BigInteger(1, Base64.decodeBase64(stringN));
        final BigInteger publicExponent = new BigInteger(1, Base64.decodeBase64(stringE));

        final RSAPublicKeySpec spec = new RSAPublicKeySpec(modulus, publicExponent);
        final KeyFactory kf = KeyFactory.getInstance("RSA");
        return kf.generatePublic(spec);
    } catch (final Exception e) {
        e.printStackTrace();
    }

    return null;
}
```
接下来验证JWT的有效性
```java
public int verify(PublicKey key, String jwt, String audience, String subject) {                      
    JwtParser jwtParser = Jwts.parser().setSigningKey(key);              
    jwtParser.requireIssuer("https://appleid.apple.com");        
    jwtParser.requireAudience(audience);
    jwtParser.requireSubject(subject); 
    try {
       Jws<Claims> claim = jwtParser.parseClaimsJws(jwt);
       if (claim != null && claim.getBody().containsKey("auth_time")) {  
          return GlobalCode.SUCCESS;  //验证通过          
       }           
       return GlobalCode.THIRD_AUTH_CODE_INVALID;
    } catch (ExpiredJwtException e) { 
       log.error("apple identityToken expired", e);
       return GlobalCode.THIRD_AUTH_CODE_INVALID;
    } catch (Exception e) {
       log.error("apple identityToken illegal", e);
       return GlobalCode.FAIL_ILLEGAL_REQ;
    }
}
```
验证通过。

接下来对APP传来的JWT字符串identityToken的第二部分进行解码
```java
/**
  * 对APP传来的JWT字符串identityToken的第二部分进行解码
  * 主要获取其中的aud和sub，aud大概对应ios APP端的包名，sub大概对应当前用户的授权的openID
  * @param identityToken
  * @return  {"iss":"https://appleid.apple.com","aud":"com.lifevc.iosApp","exp":1597636054,"iat":1597635454,"sub":"000277.009b1336f18a492493a410166afc2841.0404","at_hash":"7JjFtNXGS_1BTL5BU7fZ4g","email":"douxindong@icloud.com","email_verified":"true"}
  */
  public static JSONObject parserIdentityToken(String identityToken){
       String[] arr = identityToken.split("\\.");
       Base64 base64 = new Base64();
       String decode = new String (base64.decodeBase64(arr[1]));
       String substring = decode.substring(0, decode.indexOf("}")+1);
       JSONObject jsonObject = JSON.parseObject(substring);
       return  jsonObject;
  }
```
得到`sub`（sub大概对应当前用户的授权的openID） 进行`lifevc`业务侧注册登录

## 3.参考文档：
[本地接口实现：](SignInWithAppleJavaImp.md)

[Sign In With Apple 从登陆到服务器验证](https://www.yuque.com/zhanglong/bb0s5d/cxbh7n)

[Sign in with Apple（苹果授权登陆）](https://blog.csdn.net/wpf199402076118/article/details/99677412)

[iOS 13 苹果账号登陆与后台验证相](https://juejin.im/post/6844903914051993607)

[Apple官方文档sign_in_with_apple](https://developer.apple.com/documentation/sign_in_with_apple)
