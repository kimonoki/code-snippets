
function duplicateCount(text){
  var Occurence={};//in the function to restore
  var count = 0;
  var lowertext= text.toLowerCase(); //parentheses
  for (i=0;i<text.length-2;i++){
    for( j=i+1;j<text.length;j++){  //text length 原来写-1
      if (lowertext[j]==lowertext[i]){
       Occurence[lowertext[i]]=1;
        }   
    }
  }
  for( value in Occurence){  //for.. in for object traversal
    count++;
}      
return count; 
  
}