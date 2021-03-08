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

		var container = $("<div>")
			this.tags.forEach(function(tag){
				container.addClass(tag);
				$("body").prepend("<button>" + tag + "</button>")

			})
		container.css("background", this.color)

		var quoteString = "";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";

		container.html(quoteString)
		$("body"). prepend(container)
	}
}

var quotes = [
 new Quote('"work smarter not harder. Don\'t waste your time."',"- Veetance",["Advice", "Truth"],"#4287f5"),
 new Quote('"Grip fast knowledge"', '- Loral in\'t school', ["mottos", "primary schools"],"#eb4034")
]

quotes.forEach( function (quote){
	quote.display();
});










