console.log("all about let,var,const")
console.log("var are globally scoped which mns it change any where in the code while let & const are blocked scoped ")
console.log("var can be updated & re-declared within its scope")
console.log("let can be updated but not re-declared")
// let t = 34;   
// var t = "harry"    // it will show error      
// console.log(t)
console.log("const can neither be update nor be re-declared")
console.log("mostly try to use const variable")
console.log("var variable are initialized with undefined whereas let and const variable are not initialized")
console.log("const must be initialized during deceleration unline var and let")
var a = 45;
var b = "vimal";
var c = true;
var d = undefined;
console.log(b)
//but here we found the change of variable after outside the block
{
    var b = "baman";
    console.log(b)
}
//here it will change while var b goes inside the block;
console.log(b);

let e = "vihan"
console.log(e)
{
   e = "sharma"      //if we not inistalised let here is will work as var... and after block it will same 
    console.log(e)
}
console.log(e)

//it will create some bugs in the program, this problem is resolved by the help of lets.

let f = "viyan"
console.log(f)
{
   let f = "pandit"      
    console.log(f)
}
console.log(f)


//we also not do that we provide let to any variable and after upadte that variable with any other var,const..

// let f = "viyan"
// console.log(f)
// {
//     var f = "pandit"
//     console.log(f)
// }
// console.log(f)
