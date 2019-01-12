


function doIf(condition, func){
    if (condition){
        func()
    }
}
const a = "Apple";
doIf(a===1, A)
doIf(a==="Apple",B);
doIf(a==="animal",C);


function A(){console.log(1)};
function B(){console.log("apple")};
function C(){console.log("animal")};
