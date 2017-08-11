
//best practice
function digital_root(n) {
    return (n - 1) % 9 + 1;
}

//my solution and thoughts
function digital_root(n) {
    var mod=10;
    var digital_root=0;
    while ((n%mod)!=0||n>9){//end with zero
        digital_root+=(n%mod);
        n-=n%mod;
        n=n/10; //!important, how you mod down the digits
    }
    digital_root+=n;
    if(digital_root>9){
        return arguments.callee(digital_root);}  //recursively call the function itself
    else
        return digital_root;
}
