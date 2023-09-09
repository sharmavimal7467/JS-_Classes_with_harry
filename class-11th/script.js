//Function reduce the code written tendency. It help to reuse the code again and again. It also reduce the length of code. But if we want to write we to just by copy and paste But if we want to do some changes then the problem will come.
let a = 8;
let b = 2;
let c = 3;
let d = "Done";

function  aveOfThree(x,y,z){
        return ((x+y+z)/3)
}
function sumOfThree(x,y,z){
    return (x+y+z)
}
function multiOfThree(x,y,z){
    return (x*y*z)
}
function done(d){
    return ("Done");
}

console.log("sum of three number",a+b+c);
      //or
console.log("sum of three number",sumOfThree(a,b,c)); 
console.log(done(d));    


console.log("average of three number",(a+b+c)/3);
      //or
console.log("average of three number",aveOfThree(a,b,c));
console.log(done(d)); 


console.log("multiple of three number",(a*b*c));
     //or
console.log("multiple of three number",multiOfThree(a,b,c)); 
console.log(done(d));     


//if we don't call the function in the code alone function not do anythink it simple stay in the program not do anything in the program.


//Another way

const sum= (p,q)=>{
    return p+q;
}
console.log("sum of two numbers",sum(a,b));

//we also pass the function without argument

































































