function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = function() {
		if (text.indexOf(cloze) != -1) {
			var result = text.replace(cloze, "______");
			return result;
		} else {
			return -1;
		}
	}
}

module.exports = ClozeCard;