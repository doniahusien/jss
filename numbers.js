var x = 5;
//x ="5"
var str = "58";
console.log(x);

console.log(x.toString());
console.log(Number(str));
var y = 8.52482;
console.log(y);
console.log(typeof (y.toFixed(4)));

var decimalNum = y.toFixed(2);//"8.52"
var z= Number(decimalNum)
console.log(2 + z);


console.log(2 / "g");
console.log("donia"*6);//NaN
console.log(isNaN("donia" * 6));
console.log(isNaN(6));



console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("   10"));
console.log(Number("10  "));
console.log(Number("   10  "));
console.log(Number("10.35  "));
console.log(Number("10,35  "));
console.log(Number("10 35  "));

console.log(2 + "2");
console.log(2/"2");//casting

