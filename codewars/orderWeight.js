function orderWeight(strng) {
    var temp =strng.replace( /\n/g, " " ).split( " " );
    console.log(temp);
    var strng =strng.replace( /\n/g, " " ).split( " " );  
    var len =strng.length;
    var indices=new Array(len);
    var results=new Array(len);
    var weight=new Array(len)
    for (i=0;i<len;++i){weight[i]=0;}
    for(var i=0;i<len;i++){
    var digits= temp[i].split('');
    var digits = digits.map(Number)
    for (var j=0;j<digits.length;++j){
    weight[i]=weight[i]+digits[j];}}
 for (var i = 0; i <len; ++i) {indices[i] = i;}
 
    indices.sort(function (a,b) {
    if (weight[a]==weight[b]){
    if( temp[a]<temp[b]){
    return -1;}
    else{ return 1;}
    }
    else if( weight[a] < weight[b]){
    return -1;}
    return 1;
 });

    console.log(indices);
     for (var i = 0; i <len; ++i) {
     strng[i]=temp[indices[i]];}
     return strng.join(' ');
}