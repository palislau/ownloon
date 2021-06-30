var RequestHeaders = $request.headers;
RequestHeaders["Cookie"] = "ChangeExampleCookie";
RequestHeaders["Host"] = "www.baidu.com";
$done({RequestHeaders});
