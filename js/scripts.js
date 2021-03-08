// quote += " - Veetance " //concactination//

// var quotes = [
// '"work smarter not harder. Don\'t waste your time." - Veetance', 
// '"Grip fast knowledge" - Loral in\'t school'
// ];

function Quote( quoteT, authorT, tagsT, colorT) {
	this.quote = quoteT;
	this.author= authorT;
	this.tags= tagsT;
	this.color= colorT;  //blue
	
	this.display = function() {
		var quoteString = "";
		quoteString += "<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
		quoteString += "</div>"
		$("body"). prepend(quoteString)
	}
}

var quote1 = new Quote('"work smarter not harder. Don\'t waste your time."',"- Veetance",["Advice", "Truth"],"#4287f5");
var quote2 = new Quote('"Grip fast knowledge"', '- Loral in\'t school', ["mottos", "primary schools"],"#eb4034");

quote1.display();
quote2.display();










