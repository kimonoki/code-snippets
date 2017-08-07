// 递归必须在函数里把参数传下去不然会丢失值


var finaldepth=0;

function persistence(num,k){
var k=k||0;  //重点
console.log(k);
var product=1;
if(num<10){return 0;}
var digits = [];
while (num > 0) {
    digits[digits.length] = num % 10;
    num = parseInt(num / 10);
}
digits.reverse();

for (var i = 0; i < digits.length;product *= digits[i++]){}
if(product<10){
  finaldepth=k;
  return finaldepth+1;}
else{
  k=k+1;
  console.log(k);
  return persistence(product,k)}  // pass the counter
}