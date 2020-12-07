# Web Emoji

### A Walkthrough

##### The Basic Structure

* The first step is to query the submit button on our page. It's got an id already, so it should be faaaairly easy.
* Add an event listener function to it. You could do this as an anonymous inline function or a named function. But the important thing is: **every code we write for this app will go in this function!** That's because we only have one time we have to DO something in our app, and that's when the user hits that submit button. Then we wait for them to press it again. That's it!

##### Our First Feature

Let's start with `encode`.

* First, we need to query our input box. Check it out in the HTML--it's the one with the id `emagi-input`.
* Once we've queried that element and have it in our JavaScript, type something into the text box and then inspect the element in your browser (`console.dir` can do this, or you can do it with the dev tools themselves), and you'll see that it has a property `value` that holds the text you wrote in. Grab that `.value` property and save it in a variable--maybe call it `userInput`?
* There's an `h1` in our html with the id `results`--this is where we'll put our output to our user. Query that element and save it to a variable.
* Now set its innerText to the result of passing the input to `encode`. **Note: this function is available to you globally because it's sourced in _first_ in your html file. Check it out at the bottom of the file; we have a LOT of script tags here!**
* Test it out. Try typing something into the input box and hitting submit. You should see an emoji for every letter you typed in!

##### Radio Buttons

If you're not familiar with the term, "radio buttons" are mutually exclusive buttons. In this case, there's one for every feature of our app. Let's use them to let the user select which feature to use!

* Query ALL the radio buttons using `querySelectorAll` and the query `.radio-button`, one of the classes set on each of the buttons in our `index.html` file. This will return an array-like set of elements. If you access those elements at index 0, you'll get the first one, at 1 the next, and so on. Let's loop!
* Loop through the elements (a `for of` will do it, no need for `i`!), and if any of their `.checked` property is true, that's the one the user has selected. (If you check the HTML file or the DOM, you'll see that one has the `checked` property by default. If you change one, you can watch the DOM change to match.)
* Like input boxes, radio buttons have a `.value` property, which is just the string in the `value` attribute in their tag. (Check `index.html` to see!) In our loop, when we're at the radio button that has the `checked` property set to `true`, grab the `.value` of that particular radio button and save it in a variable outside the loop somewhere. (If you declare the variable in the loop, it will be scoped to the loop and disappear afterwards!)
    * Instead of saving it in a variable outside the loop, we COULD write a helper function that does this looping-through-the-elements code, and have it return the `.value` of the checked item, which you could then store in a variable. Either way!
* Now write some `switch` or `if-else` logic to decide between printing the result of running the user's input through `translate` or `encode`, depending on which item was checked (which should, again, be stored as a string in the contents of your variable!)
* Test that you c an click the "Encode" radio button and get an emoji for each letter, and then try clicking the "Translate" button and hitting submit. Try the text "I heart phone" in your input box--you should get a heart and a phone emoji!
* If that works, extend this logic to include `madlib`, which also just takes in the user's input string and gives you back the result. (Test that one via the text "When I see you face I need a drink". You should get a random face and a random drink!)


##### The Random Feature.

For the case of random we want to do a random emoji from a category if they've typed in a category, otherwise we'll do a random emoji from the whole list. `randomElement` expects an array, so we just need to give it an array of the whole emojis or an array of the categories and we'll have it!

* Call `getCategory` on the user's input, that will give you a filtered-down array
* If that array has 0 items in it, then they didn't type in a valid category, so call `randomElement` with the whole emojis array. This will give you an emoji _object_, so you'll want to add its `symbol` property to the results area.
* If that array has some elements, then we want to do the same thing, but give `randomElement` the smaller, filtered-down categories array.
* Test it by typing in a category like "animal" or "face", and hit submit a few times to make sure it's the only kind of emoji you get. Then try it with a non-category word (or nothing at all)--you should see a random emoji from all categories, if you nailed this one.


##### Search

For search, we'll want to print every single emoji that matches the search criteria.

* Calling `search` on our user's input will return a filtered emojis array where the emoji's name includes their search string. Save that returned array. It's looping time!
* Because there may be multiple results, on each loop we can't just set the results' heading's `innerText`, or we'll overwrite whatever used to be there. Instead, make a new paragraph for each item in our filtered-down array, set its inner text to be that particular emoji's `symbol` property, and then append that paragraph to the results section.
* Try it with something like `corn`, which should give you unicorn and popcorn symbols, or the letter y, which should give you 8 emojis.
* Finally, wrap that in an if/else, because we'll want to simply print out that there were no results if the array has no elements in it at all.


### Stretch Goals

* Change the event listener so that it fires when they type something. You'll want to add it as an event listener on the input box, not the button. But what event? That's up to you to figure out! If you get this one done, you can get rid of the submit button, since it's totally unneeded!
* Let's add some help text for the user to explain these five fabulous functions. But with the twist of only showing the help text when they want it, hiding it otherwise. We'll make a collapsible html element with a toggle to show or hide it.
    * You'll need a class for this that will make an element invisible, giving it the rule to make `display` be `none`. This will take it right off the DOM, so things will move up to take its place when it's no longer there, and move down to accommodate its space whenever we remove that rule.
    * Now make a `ul` somewhere near the top of our page. Inside the `ul`, make an `li` for each of our functions, explaining what it does. Give the `ul` the class we just defined, and it should disappear, moving everything else up.
    * Above that `ul`, make an `a` tag that links nowhere (you could style it differently, maybe as a `button` tag even, but an `a` tag makes it clear it's clickable). Give it an `id` of your choosing.
    * What we're going to do is make it so that when they click that `a`, the `ul` loses that class. That way, it will show the help section. If they click it again, it will gain that class again, making it disappear once more. Let's jump over to our `main.js` and make it happen!
    * Add an event listener function that happens when the `a` tag is clicked.
    * In that function, query your `ul` and save it as a variable.
    * Now check if it has your hide-the-element class from your CSS using the `className` property (you'll have to do a bit of research on this one!). If it does, take it away. If it doesn't, add it.
    * And you're done!