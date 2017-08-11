// using date , using replace, using regular expression

var months = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
};
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
console.log(enteredCode,correctCode,currentDate,expirationDate);
function splitDate(input) {
    return input.replace(
        /^(\w+)-(\d+)/, '$2-$1'
    ).split('-');
    
}//https://goo.gl/xfmBmL
var datecurrent=splitDate(currentDate);
var dateexpire=splitDate(expirationDate);
var dc = Date.parse(datecurrent);
var de = Date.parse(dateexpire);

  if (dc>de||enteredCode!=correctCode||!(enteredCode===correctCode)){
//different types !important 
  return false;}
  else{
  return true;}
}