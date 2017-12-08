export function capitalize() {
    return function (input) {
        if (input !== undefined)
            return input.charAt(0).toUpperCase() + input.slice(1);
        else
            return input;
    };
}
