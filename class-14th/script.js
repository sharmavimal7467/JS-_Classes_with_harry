let nam = 'i am vimal sharma from hathras,uttar pradesh india';
console.log(nam.length)    //-->this is property
console.log(nam.toUpperCase());    //-->this is function
console.log(nam.slice(2,49));    //here 49th character is exclusite in the string.
console.log(nam.replace("vimal","viyaan"))  //this work with whole string.



let nam2 = "I AM VIMAL SHARMA FROM HATHRAS,UTTAR PRADESH INDIA";  //how we do it with some selected words.
console.log(nam.length)        //-->this is property
console.log(nam2.toLowerCase());        //-->this is function
console.log(nam.slice(2));     //if we not write second (stop value) it will print till end. 
console.log(nam2.replace("SHAR", "BHA"));   //tis work with words 
// const place = (nam2.indexOf('hathras'));   //how we find the index of any special words.
// console.log(place);





console.log(nam.concat(" is the intro of ",nam2, " I know its rewrite line but its true!"));  //we add anything after the first srting in this way.

//if we want to remove extra space from the any string.
// let nam3 = "        i     am        vimal      sharma      .     i       am             from            hathras."
let nam3 = "        i     ";     //it only remove the space from the one word not from the whole string.
// nam3 = (nam3.toLowerCase());
console.log(nam3.trim());


console.log("Strings are immutable");

//bcz string are immutable old (original) string will never change . By changing we create new string...

//every time i print somethink it will not chnage the old (original) string it will create new string avery time.