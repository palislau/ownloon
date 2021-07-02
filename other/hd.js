var wz = $request.url;
var RequestHeaders = $request.headers;


//各个以下

//知音视频解锁VIP无限看（by 公众号 iOS黑科技）
//下载地址
//https://sghoxm.xyz?p=WD44PJ
var gjz = "apic";
var jm = "Authorization";
var jz = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MjIzODAzIiwiaXNzIjoiIiwiaWF0IjoxNjE4NjQwMDY3LCJuYmYiOjE2MTg2NDAwNjcsImV4cCI6MTc3NjMyMDA2N30.OA8xpC_bd7epGV5dp-Cr9aNfAiLwCkEKX_qpepcdBZY$2";
if (wz.indexOf(gjz) != -1) {
   gt(jm, jz);
}
var gjz = "avapp";
if (wz.indexOf(gjz) != -1) {
   gt(jm, jz);
}


// 三更解锁VIP无限看
// 下载地址： https: //blwtgwe.cn/5858489?tmp=dy&dir=0
var gjz = "txt2021";
var jm = "seq";
var jz = "B08EA77B-D13C-4977-B420-A613A1149783";
if (wz.indexOf(gjz) != -1) {
   gt(jm, jz);
}
var jm = "User-Agent";
var jz = "FourInOne/3.3.3 (iPhone; iOS 13.5; Scale/2.00)";
if (wz.indexOf(gjz) != -1) {
   gt(jm, jz);
}
var jm = "token";
var jz = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyXzU4NTg0ODkiLCJleHAiOjE5MzI4MDU4NzN9._OMLgq-wKEpXwI9t1WJBX_-Pn9aIskrxjoVZo6zXAGY5xbklc6RUd7skCdadyhAMzsKZCmtLm2FxFgHrXoZg7w";
if (wz.indexOf(gjz) != -1) {
   gt(jm, jz);
}

var gjz = "kaqcn";
var jm = "seq";
var jz = "B08EA77B-D13C-4977-B420-A613A1149783";
if (wz.indexOf(gjz) != -1) {
   gt(jm, jz);
}
var jm = "User-Agent";
var jz = "FourInOne/3.3.3 (iPhone; iOS 13.5; Scale/2.00)";
if (wz.indexOf(gjz) != -1) {
   gt(jm, jz);
}
var jm = "token";
var jz = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyXzU4NTg0ODkiLCJleHAiOjE5MzI4MDU4NzN9._OMLgq-wKEpXwI9t1WJBX_-Pn9aIskrxjoVZo6zXAGY5xbklc6RUd7skCdadyhAMzsKZCmtLm2FxFgHrXoZg7w";
if (wz.indexOf(gjz) != -1) {
   gt(jm, jz);
}



/*
var gjz = "";
var jm = "";
var jz = "";
if (wz.indexOf(gjz) != -1) {
   gt(jm, jz);
}
*/


$done({
   headers: RequestHeaders
});
console.log(RequestHeaders);
console.log("改写headers成功");


function gt(key, keyval) {
   RequestHeaders[key] = keyval;
}
