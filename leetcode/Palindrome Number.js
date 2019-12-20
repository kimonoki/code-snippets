// precision?

// string
var isPalindrome = function (x) {
    if (parseInt(("" + x).split("").reverse().join(""))==x){
        return true
    }
    return false
};
