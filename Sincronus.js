//  Callback function
function Callback(val){
    console.log(val);


}
var aniamls = ["dog", "cat", "horse", "kangoroo"]

aniamls.forEach(function(val){
    console.log(val);
})

//using callback funcrion
aniamls.forEach(Callback);


