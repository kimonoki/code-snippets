var romanToInt = function (s) {
    var sum = 0;
    if (s.includes("IV")) {
        s = cutString(s, "IV");
        sum = sum + 4;
    }

    if (s.includes("IX")) {
        s = cutString(s, "IX");
        sum = sum + 9;
    }

    if (s.includes("XL")) {
        s = cutString(s, "XL");
        sum = sum + 40;
    }

    if (s.includes("XC")) {
        s = cutString(s, "XC");
        sum = sum + 90;
    }


    if (s.includes("CD")) {
        s = cutString(s, "CD")
        sum = sum + 400;
    }

    if (s.includes("CM")) {
        s = cutString(s, "CM");
        sum = sum + 900;
    }

    while (s.includes("I")) {
        s = cutString(s, "I");
        sum = sum + 1;
    }

    while (s.includes("V")) {
        s = cutString(s, "V");
        sum = sum + 5;
    }
    while (s.includes("X")) {
        s = cutString(s, "X");
        sum = sum + 10;
    }


    while (s.includes("L")) {
        s = cutString(s, "L");
        sum = sum + 50;
    }

    while (s.includes("C")) {
        s = cutString(s, "C");
        sum = sum + 100;
    }

    while (s.includes("D")) {
        s = cutString(s, "D");
        sum = sum + 500;
    }

    while (s.includes("M")) {
        s = cutString(s, "M");
        sum = sum + 1000;
    }

    return sum;
};


function cutString(s, pattern) {
    var index = s.indexOf(pattern);
    s = s.split("");
    s.splice(index, pattern.length);
    s = s.join("");
    return s
}
