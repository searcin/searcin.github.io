export function replaceString() {
    return function (input, params) {  
        let regEx = new RegExp(params.target, "g");
        let newVal = input.replace(regEx, params.replace);
        return newVal;
    };
}
