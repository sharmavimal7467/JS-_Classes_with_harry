console.log("har\"".length);

let nam2 = "I AM VIMAL SHARMA FROM HATHRAS,UTTAR PRADESH INDIA";
let ser = "HATHRAS";   //due to case sensitive hathras not found.
console.log(nam2.includes(ser));
console.log(`The word "${ser}" ${nam2.includes(ser) ? "is" : "is not"} in the sentences`);

//start with & end with...
let str = prompt("Enter the sentences you want to check the word,that word is present or not ?");
let str2 = prompt("Enter the word you want to check in the provided string");
let str3 = (str.includes(str2));
console.log(str3);
console.log(`The word "${str2}" ${str.includes(str2) ? "is" : "is not"} present in the string`);
if(str3==true){
    console.log(str2);
}


//we not change the provided string we appy change anf store it in new string but provided string is not chance bcz of immutable
