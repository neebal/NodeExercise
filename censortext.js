/*** censortext.js ***/
/* Node.js module code that implements a simple censor function and exports it for other modules using the package */



/* Array censoredWords stores the standard words that are not allowed to be printed */
var censoredWords = ["sad","bad","mad"];

/* Array customCensoredWords stores user defined words that are not allowed to be printed */
var customCensoredWords = [];

/* function censor() removes the censored words, both standard and user defined from the input string */
function censor(inStr) {
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx],"****");
	}
	return inStr;
}

/* function addCensoredWord() adds a user defined word to be censored into the customCensoredWord array */
function addCensoredWord(word){
	customCensoredWord.push(word);
}

/* function getCensoredWords() prints the standard and user defined censored words */
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}

/* exports the functions censor(), addCensoredWord(), getCensoredWords(). exports.censor is hence required for Node.js applications using this module to access the censor() function as well as the other two functions */

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
