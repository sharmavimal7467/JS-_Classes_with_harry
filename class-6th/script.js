77;
"Hello!,Vimal"
false
//all these compile but not show anything
let a = 45;
let b = 4;
console.log("a+b=",a+b)  //here a and b are operant and + is operator.
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a**b=",a**b)   //heere ** mns a to the power b,like 45power4((45)^4).
console.log("a++=",a++)  //here print the same value and then increase
console.log(a)
console.log("++a=",++a)   //first print the increase value
console.log(a)
console.log("a--=",a--)    //here print the same value and then decrease
console.log(a)
console.log("--a=",--a)    //first print the decrease value
console.log(a)


// Arithmetic operator always provide result in number while none of  operant are String.If any operant is string it will work as concatination .
// relation operator provide answer in true or false. 
// logical operator is result is shown in the form of boolean

let comp1 = 6;
let comp2 = 7;
console.log("comp1==comp2:-",comp1==comp2)
console.log("comp1!=comp2:-",comp1!=comp2)
console.log("comp1===comp2:-",comp1===comp2)
console.log("comp1!==comp2:-",comp1!==comp2)
//here we don't find any of different b/w == and ===.

//but we change the data  type then the difference is visible clearly

let comp3 = 6;
let comp4 = "6";
console.log(typeof comp3)
console.log(typeof comp4)
console.log("comp3==comp4:-",comp3==comp4)  //== only compare the value
console.log("comp3!=comp4:-",comp3!=comp4)
console.log("comp3===comp4:-",comp3===comp4)  //=== compare the data type 
console.log("comp3!==comp4:-",comp3!==comp4)