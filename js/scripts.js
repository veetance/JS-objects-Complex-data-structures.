// quote += " - Veetance " //concactination//

var quotes = [
'"work smarter not harder. Don\'t waste your time." - Veetance', 
'"Grip fast knowledge" - Loral in\'t school'
];

var quote1 = {
	quote: '"work smarter not harder. Don\'t waste your time."',
	author: "Veetance",
	tags: ["Advice", "Truth"],
	color: "#4287f5", //blue
	
	display: function() {
		var quoteString = "";
		quoteString += "<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
		quoteString += "</div>"
		$("body"). prepend(quoteString)
	}
}

quote1.display();



var quote2 = {
	quote: '"Grip fast knowledge"',
	author: "Loral Int'l school",
	tags: ["Advice", "Truth"],
	color: "#fcba03", //blue
	
	

	display: function() {
		var quoteString = "";
		quoteString += "<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
		quoteString += "</div>"
		$("body"). prepend(quoteString)
	}
}

quote2.display();









console.log(quote1.quote);

// var quoteString = "";
// quotes.forEach(function(quote){

// 	quoteString += "<p>" + quote + "</p>"


// 	console.log(quoteString);

// })

// $("body").html(quoteString)

