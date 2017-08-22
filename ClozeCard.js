function ClozeCard(text,cloze){

	// Ensure users get the result of a new call, even if they forget.
	if (!(this instanceof ClozeCard)) {
	return new ClozeCard(text, cloze);
	}
	// Otherwise, proceed as usual
	this.cloze = cloze;
	this.fullText = text;
	this.partial = "Do your thang";
}

// Create a function to get the partial text 

var firstPresidentCloze = new ClozeCard(
	"Who was the first president of the United States?",
	"George Washington");

console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.fullText);
console.log(firstPresidentCloze.partial);