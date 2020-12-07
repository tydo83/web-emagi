// Queries
const submitButton = document.querySelector('#submit-button');
const buttons = document.querySelectorAll(".radio-button");
const userInputHandler = document.querySelector('#emagi-input');
const resultOutput = document.querySelector('#results');

// Helper function
const emojiFunctions = () => {
    const userInput = userInputHandler.value;
    let userSelection = "None";
    for(const selection of buttons) {
        if(selection.checked === true) {
            userSelection = selection.value
        }
    }
    switch(userSelection) {
        case 'encode':
            resultOutput.innerText = encode(userInput);
            break;
        case 'translate':
            resultOutput.innerText = translate(userInput);
            break;
        case 'madlib':
            resultOutput.innerText = madlib(userInput);
            break;
        case 'search':
            const searchArray = search(userInput);
            if(searchArray.length > 0) {
                let searchedList = document.createElement('li')
                for(const result of searchArray) {
                    searchedList.append(result.symbol);
                }
                resultOutput.innerText = searchedList;
            } else {
                resultOutput.innerText = "Your search returned no emojis."
            }
            break;
        case 'random':
            const randomArray = getCategory(userInput);
            if(randomArray.length > 0) {
                resultOutput.innerText = randomElement(randomArray).symbol;
            } else {
                resultOutput.innerText = randomElement(emojis).symbol;
            }
            break;
    }   
}

// Event handler
submitButton.addEventListener('click', emojiFunctions)

