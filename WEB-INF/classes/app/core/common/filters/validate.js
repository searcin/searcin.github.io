export function validate() {
    return function (input, args) {
        if (input === null || input === undefined)
            return args;
        else
            return input;
    };
}
