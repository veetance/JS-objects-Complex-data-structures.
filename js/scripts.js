// quote += " - Veetance " //concactination//

var quotes = [
'"work smarter not harder. Don\'t waste your time." - Veetance', 
'"Grip fast knowledge" - Loral in\'t school'
];

console.log(quotes);

var quoteString = "";
quotes.forEach(function(quote){

	quoteString += "<p>" + quote + "</p>"


	console.log(quoteString);

})

$("body").html(quoteString)

