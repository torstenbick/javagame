import words from "./1-8-java-words";


function buttonClick() {
    //get the id of the button that was clicked
    const id = this.id;
    //get the element with the id of the button that was clicked
    const element = document.getElementById(id);
    // choses a random word for the word.ts file
    const word = randomWord();

    return word;

}

function randomWord() {
    // chooses a random word from the word.ts file
    const random = Math.floor(Math.random() * words.length);
    const ranword = words[random];
    return ranword;
}