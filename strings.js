//escape
var str = "Hello world \"samia\" samia samia ";
let newStr = str.replace(/samia/i, "faris");
let newStr2= str.replaceAll("samia", "faris");
console.log(newStr);
console.log(newStr2);


var str2 = 'Hello world i\'m faris';
var str3 = `Hello world "i'm faris" '`;
var str4 = 'Hello \\ \\ \n\t world ';

var str5 = "hello";
var str8="HeLLO"
console.log(str5.toUpperCase());
console.log(str5.toLowerCase());

var str6 = "ABCDEF"
console.log(str6.at(-1));
console.log(str6.charAt(-1));

console.log(str5.length);
console.log(str6.length);

var str9 = "  Hello World    ";//11
console.log(str9.trimEnd());
console.log(str9.trimStart());


console.log(str9.length);//17
console.log(str9);
var withoutSpace = str9.trim()//"Hello World"
console.log((str9.trim()).length);
//array
var x = "Hello,world || JJ";
console.log(x.split(" "));

var yStr = "please locate where you locate";
console.log(yStr.indexOf("Locate"));
console.log(yStr.lastIndexOf("locate"));
//search only can use reqular flag /i 
console.log(yStr.search(/locate/i));


var mStr="rain in stay in the"
var xy = mStr.matchAll("ain");
console.log(xy);


console.log(mStr.includes("ain",10));
