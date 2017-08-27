// Import fs package
var fs = require('fs');

// ClozeCard function for creating the cloze flash card
function ClozeCard(text,cloze){

	// Ensure users get the result of a new call, even if they forget.
	if (!(this instanceof ClozeCard)) {
	return new ClozeCard(text, cloze);
	};
	// Otherwise, create the cloze and full text for the card
	this.cloze = cloze;
	this.fullText = text;
	// Create method to generate partial text
	this.generateText = function() {
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
	// Run the above method to get the partial text
	this.partial = this.generateText();
	// Add cloze, full, and partial text to clozeCard.txt file only if there is no error
	if(this.partial !== "Error! Cloze text does not appear in full text!") {
		fs.appendFile("clozeCard.txt", this.cloze + ',' + this.fullText + ',' + this.partial + ',', function(error){
			if (error) {
				return console.log(error);
			};
		});
		console.log("Cloze Card has been created successfully!");
	} else {
		console.log(this.partial);
	};
};

// Export the ClozeCard function as a module
module.exports = ClozeCard ;






