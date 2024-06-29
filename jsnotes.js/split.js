//REMOVES spaces similar on the brackets and limit on the second parameter if exceeds give blank on array;

let  stringz = "coals";
stringz.split("s");
console.log(stringz);
let string1 = "aa1a2a3a4a5a6aa";
const sui = string1.split("a",7);
let as = sui.join("")

console.log(string1);
console.log( as);
//This will output:  [ '', 's', 's', 's', 's', 'i' ]
let sting2 = "A,A,A,A,A,B[[[]";
const sa =sting2.replace(/[A-Za-z0-9,';-]/g, "").toLowerCase();
console.log(sa+"NIGER");
const s = sting2.split(",").reverse().join();

console.log(s);

