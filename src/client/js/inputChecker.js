function validateInput(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let input = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;


    if(!(input.test(inputText))) {
        alert("Please enter a URL!")
        return false
    } else {
        return true
    }
}

export { validateInput }