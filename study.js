function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = function() {
		if (text.indexOf(cloze) != -1) {
			var result = text.replace(cloze, "");
			return result;
		} else {
			console.log("Cloze is not present in full text");
		}
	}
}

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial());

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.text);