export function operators() {
    return function (sign, arg1, arg2) {
        switch(sign) {
            case "+":
                return arg1 + arg2;
            case "-":
                return arg1 - arg2;
            case "*":
                return arg1*arg2;
            case "/":
                return arg1/arg2;
        }
    };
}
