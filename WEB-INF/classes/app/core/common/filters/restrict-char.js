export default function() {
    return function (input, charLength) {
        if (input.length > charLength) {
            input = input.substring(0, charLength) + "...";
        }
        return input;
    };
}