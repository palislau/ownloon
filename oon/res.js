let body = $response.body;
let obj = JSON.parse(body);
var wz = $request.url;


//一Guan
var gjz = "api.jijigugu.club";
if (wz.indexOf(gjz) != -1) {
   if (obj.hasOwnProperty("data")) {
      if (obj.data.cureNum != undefined) {
         obj.data.cloverNum = 999;
         obj.data.cureNum = 3;
         obj.data.giftedCloverNum = 999;
         obj.data.poisonNum = 3;
         if (obj.data.poisonTime != undefined) {
            delete obj.data.poisonTime;
         }        
      } else
      if (obj.data.hasOwnProperty("userProp")) {
         if (obj.data.userProp.cureNum != undefined) {
            obj.data.userProp.cloverNum = 999;
            obj.data.userProp.cureNum = 3;
            obj.data.userProp.giftedCloverNum = 999;
            obj.data.userProp.poisonNum = 3;
            if (obj.data.userProp.poisonTime != undefined) {
               delete obj.data.userProp.poisonTime;
            }  
         }
      }
   } else {
      obj.code = 0;
   }
}



//物语
var gjz = "sapi.tiduhn.cn:443/wecoreapi";
if (wz.indexOf(gjz) != -1) {
   if (obj.hasOwnProperty("data")) {
      if (obj.data.times != undefined) {
         obj.data.times = 8;
      }
   }
}


$done({
   body: JSON.stringify(obj)
});
