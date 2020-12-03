const encode = function(sentence) {
    let result = '';
    for (const char of sentence) {
        let found = false;
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                result += emoji.symbol;
                found = true;
            }
        }

        if (found === false) {
            result += char;
        }
    }

    return result;
}
