console.log("There are two type of data type:-")
console.log("1-Primitive & 2-Non-primitive data type")
console.log("primitive data type are of 7 type like(N,N,S,S,B,B,U) and Non-primitive data type is (object)")


// N:-null
// N:-Number
// S:-String
// S:-Symbol
// B:-Boolean
// B:-BigInt
// U:-Undefined

console.log("the variable consist of which type of data like number,string,boolean etc...")
console.log("we can fix any type of data type into another like string type contain number or bollean variable as well but it is not a good practise to do so.")
 let a = null
 let b = 789
 let c = true
 let d = BigInt("6789")+BigInt("1")
 let e = "Viyaan"
 let f = Symbol("I am a symbol")
 let g = undefined    //if we not initialised it will automatic become undefined type
 console.log(a,b,c,d,e,f,g)

 //typeof keyword is used to know the data type of any variable
 console.log(typeof a)
 console.log(typeof b)
 console.log(typeof c)
 console.log(typeof d)
 console.log(typeof e)
 console.log(typeof f)
 console.log(typeof g)

 const item = {
    "Vimal":true,
    "viyan":false,
    "vihan":001,
    "vihaan":undefined
 }
 console.log(item["Vimal"])
 console.log(item["viyan"])
 console.log(item["vihan"])
 console.log(item["vihaan"])