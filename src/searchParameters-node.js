const prompt = require('prompt');

const userPrompt = () => {
    prompt.start();

    prompt.get(['search_term'], function( err, result){
        return result.search_term;
    })
    
}

// declared global variables to change with userInput - used on searchTwitter-node.js
var searchBy = "";
var desiredFilename = "";

// declared global variable to display tweet results
var finalTweets;

// declared func accepts a search term to reinitialize it globally 
// input: userSearch
// output: none or error message 
function userInput(userSearch) {
    // if user search exists
    if (userSearch){
        // change searchBy to be passed-in arg
        searchBy = userSearch;
        // convert userSearch to be an accepted .txt file format
        desiredFilename = `${userSearch}.txt`; }
    // else print an error message 
    else {
        console.log("An error occurred...")
    }
}

// invoke the function with your intended search term(s)
userInput('star wars');

module.exports = {
    finalTweets,
    desiredFilename,
    searchBy,
    userPrompt
}