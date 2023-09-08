let a = "Viyaan"
let b = 2023
let c = console.log(a+b);   //String concatination
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// console.log(typeof a+b )
console.log(typeof (a+b))

// const a ={
//     name:"Vimal",   // show an error bcz a is alread defined as const not re-inistialised. we also not initialised by passing object.
//     age:23,
// }
// a=75 

const a1 = {
    name:"Vimal",
    age:23,
}
a1['friend'] = "Shubham"  //it add bcz a1 is pointing to an object which is reserve in memory, a1 is reference to this object,we can change the inside value of reference we add new value,modified update etc... tassk will also done.
a1['friend'] = "Gaurav"  //here we upadte the value of name bcz it work as a object now... 
console.log(a1)

const a2 = {
    Name:"Viyaan",
    Native:"Hathras",
    Hobbies:"Flirting",
    Bike:"Activa 125",
    School:"MLDV",
 }
console.log(a2['Name'])    // or console.log(a2.Name)
console.log(a2['School'])  // or console.log(a2.School)
console.log(a2['Native'])  // or console.log(a2.Native)
console.log(a2['Bike'])    // or console.log(a2.Bike)
console.log(a2['Hobbies'])  // or console.log(a2.Hobbies)

 console.log(a2.Name)
  console.log(a2.School)
   console.log(a2.Native)
    console.log(a2.Bike)
   console.log(a2.Hobbies)