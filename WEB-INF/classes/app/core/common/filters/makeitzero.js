export function makeitzero() {
    return function (input) {
        if (input === undefined || input === null || isNaN(input))
            return 0;
        else
            return input;
    };
}
