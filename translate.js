const translate = function(sentence) {
    return sentence.split(' ').map((word) => {
        for (const emoji of emojis) {
            if (emoji.name === word.toLowerCase()) {
                return emoji.symbol;
            }
        }

        return word;
    }).join(' ');
}
