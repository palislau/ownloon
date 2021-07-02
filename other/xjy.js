gt();
function gt(){
    var RequestHeaders = $request.headers;
    RequestHeaders["X-AUTH-TOKEN"]="eyJhbGciOiJIUzUxMiIsImlhdCI6MTYxNzYxODU3MywiZXhwIjoxOTMyOTc4NTczfQ.eyJpZCI6NDEwNDEyMjl9.Jfxjcd2-FQKt4HYXxFte_NY_Rhcgij_f6g-BxyfHlennQc_CCbMbvXAVMUYp8CrzVDtwKc0KD0ejaO1-kRrhEg$2";
    $done({headers:RequestHeaders});
    console.log(RequestHeaders);
}
