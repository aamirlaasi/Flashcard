// Import fs package
var fs = require('fs');

// BasicCard function for creating the basic flash card
function BasicCard(front, back){

	// Ensure users get the result of a new call, even if they forget.
	if (!(this instanceof BasicCard)) {
	return new BasicCard(front, back);
	}
	// Otherwise, create front and back of card
	this.front = front;
	this.back = back;
	// Add the card info to the basicCard.txt file
	if (this.front !== "" && this.back !== "") {
		fs.appendFile("basicCard.txt", this.front + ',' + this.back + ',', function(error){
			if (error) {
				return console.log(error);
			};
		});
	console.log("Basic Card has been created successfully!");
	} else {
		console.log("Basic Card was not created. Text was left empty either for the front or back of the card");
	};
};

// Export the BasicCard function as a module
module.exports = BasicCard;