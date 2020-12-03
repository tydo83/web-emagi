const madlib = function(sentence) {
    return sentence.split(' ').map((word) => {
        const category = getCategory(word);
        if (category.length === 0) {
            return word;
        } else {
            return randomElement(category).symbol;
        }
    }).join(' ');
}
