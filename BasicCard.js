function BasicCard(front, back){

	// Ensure users get the result of a new call, even if they forget.
	if (!(this instanceof BasicCard)) {
	return new BasicCard(front, back);
	}
	// Otherwise, proceed as usual
	this.front = front;
	this.back = back;
};

var firstPresident = new BasicCard(
	"Who was the first president of the United States?",
	"George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);