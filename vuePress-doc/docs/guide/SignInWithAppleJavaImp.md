# 实现服务端交互示例demo
`java`
github:[SignInWithApple](https://github.com/douxindong/SignInWithApple.git)

```java
package com.zhaouri.applelogin.controller;

import ...

@Slf4j
@RestController
@RequestMapping(value = "/")
public class HomeController {

    private Jws<Claims> claims;

    @RequestMapping("/")
    public String index() {

        return "hello";
    }
//    @RequestMapping("/err")
//    public HttpResult err() {
//         HttpResult httpResult = new HttpResult();
//         httpResult.setCode(4);
//         httpResult.setMsg("Error");
//         HashMap map = new HashMap<String,String>();
//         map.put("innnerData",'a');
//        httpResult.setData(map);
//         return httpResult;
//    }

//     @RequestMapping("/error")
//     public Object errors() {
////         HttpResult httpResult = new HttpResult();
//
////         httpResult.setCode(4);
////         httpResult.setMsg("Error");
////         return httpResult;
//         return "error";
//     }

    @RequestMapping(value = "/Decode")
    @ResponseBody
    public HttpResult Decode(@RequestParam("jwt") final String jwt) throws UnsupportedEncodingException{
        final HttpResult httpResult = new HttpResult();
        httpResult.setCode(0);
        httpResult.setMsg("Param Error");
//        final Jws<Claims> claim = jwtParser.parseClaimsJws(jwt);
//        System.out.printf(String.valueOf(claim));


        return httpResult;
    }
    /**
     * 对前端传来的JWT字符串identityToken的第二部分进行解码
     * 主要获取其中的aud和sub，aud大概对应ios前端的包名，sub大概对应当前用户的授权的openID
     * @param identityToken
     * @return  {"aud":"com.xkj.****","sub":"000***.8da764d3f9e34d2183e8da08a1057***.0***","c_hash":"UsKAuEoI-****","email_verified":"true","auth_time":1574673481,"iss":"https://appleid.apple.com","exp":1574674081,"iat":1574673481,"email":"****@qq.com"}
     */
    public static JSONObject parserIdentityToken(String identityToken){
        String[] arr = identityToken.split("\\.");
        Base64 base64 = new Base64();
        String decode = new String (base64.decodeBase64(arr[1]));
        String substring = decode.substring(0, decode.indexOf("}")+1);
        JSONObject jsonObject = JSON.parseObject(substring);
        return  jsonObject;
    }

    /***
     * 苹果登录校验
     *
     * @param jwt 苹果票据 很长很长的一串
     * @param aud iOS包名 eg:com.xxx.xxx
     * @param sub 苹果对应的唯一用户标识
     * @return code 100、success 0、缺少参数 -1 apple identityToken expired -2 apple
     *         identityToken illegal
     */
    @RequestMapping(value = "/appleVerify")
    @ResponseBody
    public HttpResult appleVerify(@RequestParam("jwt") final String jwt, @RequestParam("aud") final String aud,
                                  @RequestParam("sub") final String sub) throws UnsupportedEncodingException {

        final HttpResult httpResult = new HttpResult();
        if (StringUtils.isEmpty(jwt) || StringUtils.isEmpty(aud) || StringUtils.isEmpty(sub)) {
            httpResult.setCode(0);
            httpResult.setMsg("Param Error");
            return httpResult;
        }

        Integer result = -1;

        final String url = "https://appleid.apple.com/auth/keys";
        final String jsonData = HttpClientUtil.httpGetRequest(url);
        final AppleKeys appleKeys = JSONObject.parseObject(jsonData, AppleKeys.class); // 将json字符串转化为JSONObject

        final Base64 base64 = new Base64();
        System.out.println(new String(base64.decode("eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmxpZmV2Yy5pb3NBcHAiLCJleHAiOjE1OTc2MzYwNTQsImlhdCI6MTU5NzYzNTQ1NCwic3ViIjoiMDAwMjc3LjAwOWIxMzM2ZjE4YTQ5MjQ5M2E0MTAxNjZhZmMyODQxLjA0MDQiLCJhdF9oYXNoIjoiN0pqRnROWEdTXzFCVEw1QlU3Zlo0ZyIsImVtYWlsIjoiZG91eGluZG9uZ0BpY2xvdWQuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJ0cnVlIn0"), "UTF-8"));

        String n = "";
        String ee = "";
        List<String> as = Arrays.asList(jwt.split("."));
        System.out.println(as);
        System.out.println(jwt.split("."));

        if (appleKeys.getKeys().size() > 0) {
            // 获得jsonArray的第一个元素
            final Keys keys = appleKeys.getKeys().get(1);

            n = keys.getN();
            ee = keys.getE();

//            log.info("[苹果登录日志]jwt:{},aud:{},sub:{}", jwt, aud, sub);
        }
//        for (keys:appleKeys.getKeys()) {
//            if ()
//        }
//        System.out.printf();
        try {
            final PublicKey kPublicKey = createPublicKey(n, ee);

            result = verify(kPublicKey, jwt, aud, sub);
            if (result == 1) {
                httpResult.setCode(100);
                httpResult.setMsg("success");
                httpResult.setData(claims);
            } else {
                httpResult.setCode(result);
                httpResult.setMsg("fail");
            }

            // log.info("获取公钥结果:" + result + ";" + kPublicKey.toString());
        } catch (final NoSuchAlgorithmException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (final InvalidKeySpecException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return httpResult;
    }

    public RSAPublicKeySpec build(final String n, final String e) {
        final BigInteger modulus = new BigInteger(1, Base64.decodeBase64(n));
        final BigInteger publicExponent = new BigInteger(1, Base64.decodeBase64(e));
        return new RSAPublicKeySpec(modulus, publicExponent);
    }

    public int verify(final PublicKey key, final String jwt, final String audience, final String subject) {
        final JwtParser jwtParser = Jwts.parser().setSigningKey(key);
        jwtParser.requireIssuer("https://appleid.apple.com");
        jwtParser.requireAudience(audience);
        jwtParser.requireSubject(subject);

        try {
            final Jws<Claims> claim = jwtParser.parseClaimsJws(jwt);
            System.out.printf(String.valueOf(claim));
            if (claim != null && claim.getBody().containsKey("auth_time")) {

                claims = claim;

//                log.info("[Apple登录解密结果]header:{},body:{},signature:{}", claim.getHeader(), claim.getBody(),
//                        claim.getSignature());

                return 1;
            }
            return 0;
        } catch (final ExpiredJwtException e) {
//            log.error("apple identityToken expired");
            e.printStackTrace();
            return -1;
        } catch (final Exception e) {
//            log.error("apple identityToken illegal");
            return -2;
        }
    }

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
}
```
接口：
http://10.99.68.30:8088/appleVerify  GET 
```
请求参数：
jwt:eyJraWQiOiI4NkQ4OEtmIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmxpZmV2Yy5pb3NBcHAiLCJleHAiOjE1OTc2MzU3OTQsImlhdCI6MTU5NzYzNTE5NCwic3ViIjoiMDAwMjc3LjAwOWIxMzM2ZjE4YTQ5MjQ5M2E0MTAxNjZhZmMyODQxLjA0MDQiLCJjX2hhc2giOiJ1S2g4R3VJQ0pTR0Y0Q2phQ1FjeFBBIiwiZW1haWwiOiJkb3V4aW5kb25nQGljbG91ZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJhdXRoX3RpbWUiOjE1OTc2MzUxOTQsIm5vbmNlX3N1cHBvcnRlZCI6dHJ1ZX0.Cmy5CgYiS6SV0Y5KLp9PJg8uXdRYs6Py8M1CXLhZZP-Ac-4AQJXh9dMT7YJXbi3J1Yj9WEHXF2uYAxRv-M54FP9zq9nLtxCFQfkBJc2-i2aSG1E_kLJU1R4PQKljUKRC-dMrv68hfwziJ7DoCCb5CwSZxdiimlihW_1gx3jiWTTbcjlouCJZy07xPtxBNON44d0gkG4rTQzhhstfX0vuK6DWDZu6K_rqDwRDYFOo3r9g8SVcpB93--IY0-sDNK5XZA04k1jS6V4ZIqW-DWqrbnEtpfERHE_9JrFCg8iiLMGNvUSiAZFalNVBzab7LQAVQbihJ1SaM1-tOpZQOn6G2w
aud:com.lifevc.iosApp
sub:000277.009b1336f18a492493a410166afc2841.0404
```
```json
{
    "code": 100,
    "msg": "success",
    "data": {
        "header": {
            "kid": "eXaunmL",
            "alg": "RS256"
        },
        "body": {
            "iss": "https://appleid.apple.com",
            "aud": "com.lifevc.iosApp",
            "exp": 1597378463,
            "iat": 1597377863,
            "sub": "000277.009b1336f18a492493a410166afc2841.0404",
            "c_hash": "EcDwyvs9Ja8EdYoFYCqhOQ",
            "email": "douxindong@icloud.com",
            "email_verified": "true",
            "auth_time": 1597377863,
            "nonce_supported": true,
            "real_user_status": 2
        },
        "signature": "uLFfVB2-VHvGauQT6Pp2rjdSoL99l_pkpZXFAP_B__4Bb4oTM0gBlHIkieZAoECFphfcE-o_zX79VH6yIs9L7tMHORRjcw4uwRbuu99JZlxqXWQZXDhBinmfQWVFypJLsqz4dvhzHL8ywaXH9M0BdlmW5gghB8K8X9VTNHrK5ogRQH92Aj-y2KQJxakrFKdnuTm_NlDIcH--D83cZ9-0Lmh6xTRo-XE1FdyTXlzM_Cayncd1qi9xnTDfeGAfzoLxTNyHgjzlLOUbZiK5pNU19an-XRYBqjvEEdFc9MW1bVTZAck6xQD81yl2SS0YPlT51PFp2A_66fr4aw3j2MYs-A"
    }
}
```
code，token授权方式：较简单代码未实现
接口：https://appleid.apple.com/auth/token POST
```
client_secret:eyJraWQiOiJTOVU5MjNNNEo3IiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiI3TFU0UEVDMlJOIiwiaWF0IjoxNTk3NjM1MjEwLCJleHAiOjE2MTMxODcyMTAsImF1ZCI6Imh0dHBzOi8vYXBwbGVpZC5hcHBsZS5jb20iLCJzdWIiOiJjb20ubGlmZXZjLmlvc0FwcCJ9.VGLEYV00fTX-2g_e0of_f-rRxFnMSvWsBCvcvjf6nnRu0TDDENUpo3-rRzjyXltsqXHega4SViCU-wthk0P_5Q
client_id:com.lifevc.iosApp
code:c056485048680478a9a0b36d891c4e99b.0.nsxx.TA7y-KyrlbRDL2ti6IXteA
grant_type:authorization_code
refresh_token:ra7882ca192ca4bd3a221a60b44148f14.0.msxx.aS-IIqT_AFyQUeHLtXDTIQ
//grant_type:refresh_token
```
```json
{
    "access_token": "ae920b9fba9314c138f9bca02ff165f95.0.msxx.u97aeotTYDpL9O98YzFR3w",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "ra7882ca192ca4bd3a221a60b44148f14.0.msxx.aS-IIqT_AFyQUeHLtXDTIQ",
    "id_token": "eyJraWQiOiJlWGF1bm1MIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmxpZmV2Yy5pb3NBcHAiLCJleHAiOjE1OTc2MzU5NjksImlhdCI6MTU5NzYzNTM2OSwic3ViIjoiMDAwMjc3LjAwOWIxMzM2ZjE4YTQ5MjQ5M2E0MTAxNjZhZmMyODQxLjA0MDQiLCJhdF9oYXNoIjoiNDNKSElIbTJWM0NMV2I4RmpTWHF3dyIsImVtYWlsIjoiZG91eGluZG9uZ0BpY2xvdWQuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJ0cnVlIiwiYXV0aF90aW1lIjoxNTk3NjM1MTk0LCJub25jZV9zdXBwb3J0ZWQiOnRydWV9.Wym3wOhaQwUhuSRWByjud9rD16YhMlxtyVcCutiQDzv549nZJqei5F-COuQZXOrrBliiFCGgNoXhaBQtoac-F3DXHm4yCohkA2oY--4Sxl7t8O5ETBQOZuz-ZX6YQ_eSLR0wrtJJbMrRqBlner-dapGV-28w2Rmw4kA9oSfra5NnJgsFtobOhXBu3THXOBmb5QP9tXeLiEY6k3wnY2cxnEjhVhLdZjKgL9emIaR6RFKmlSUo50kkRfTeuIaZ7gAJDno3L4lrfs0N0EbvceHmwOceF34CFWxDbMpbTkiabUvwQAkqI1ylSB0Ld1xfIxE9txH91bUIxMaXkgmjbTHoWA"
}
```
