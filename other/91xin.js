var RequestHeaders = $request.headers;
console.log(RequestHeaders);
console.log("上面是原始的");
if (RequestHeaders.hasOwnProperty("X-AUTH-TOKEN")) {
   if (RequestHeaders["X-AUTH-TOKEN"] != "") {
      var jz = "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYxNzYxODU3MywiZXhwIjoxOTMyOTc4NTczfQ.eyJpZCI6NDEwNDEyMjl9.Jfxjcd2-FQKt4HYXxFte_NY_Rhcgij_f6g-BxyfHlennQc_CCbMbvXAVMUYp8CrzVDtwKc0KD0ejaO1-kRrhEg$2";
      RequestHeaders["X-AUTH-TOKEN"] = jz;
      $done({
         headers: RequestHeaders
      });
      console.log(RequestHeaders);
      console.log("改写headers成功");
   } else {
      $done()
      console.log("X-AUTH-TOKEN为空所以headers没动");
   }
} else {
   $done()
   console.log("没有X-AUTH-TOKEN所以headers没动");
}
