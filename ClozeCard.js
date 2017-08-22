// Export Constructor function
// module.exports = {ClozeCard, generateText}

function ClozeCard(text,cloze){

	// Ensure users get the result of a new call, even if they forget.
	if (!(this instanceof ClozeCard)) {
	return new ClozeCard(text, cloze);
	}
	// Otherwise, proceed as usual
	this.cloze = cloze;
	this.fullText = text;
	this.partial = generateText(text, cloze);
}

// Create a function to get the partial text 
function generateText(text, cloze) {
	// Check if cloze text can be found in full text
	if (text.indexOf(cloze)!== -1) {
		// Create partial text
		var partialText = text.replace(cloze, "...");
	} else {
		// If cloze text is not found then generate error message
		var partialText = "Error! Cloze text does not appear in full text!";
	}
	return partialText;
}

var firstPresidentCloze = new ClozeCard(
	"George Washington was the first president of the United States",
	"George Washington");

var secondPresidentCloze = new ClozeCard(
	"John Adams was the second president of the United States",
	"George Washington");


console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.fullText);
// Show partial text
console.log(firstPresidentCloze.partial);

console.log(secondPresidentCloze.cloze);
console.log(secondPresidentCloze.fullText);
// Show error message
console.log(secondPresidentCloze.partial);






