let body = $response.body;
let obj = JSON.parse(body);


//一Guan
//cure情况一
if (obj.hasOwnProperty("data")) {
   if (obj.data.cureNum != undefined) {
      obj.data.cloverNum = 999;
      obj.data.cureNum = 3;
      obj.data.giftedCloverNum = 999;
      obj.data.poisonNum = 3;
   } else
   if (obj.data.hasOwnProperty("userProp")) {
      if (obj.data.userProp.cureNum != undefined) {
         obj.data.userProp.cloverNum = 999;
         obj.data.userProp.cureNum = 3;
         obj.data.userProp.giftedCloverNum = 999;
         obj.data.userProp.poisonNum = 3;
      }
   }
} else {
   obj.code = 0;
}


$done({
   body: JSON.stringify(obj)
});
