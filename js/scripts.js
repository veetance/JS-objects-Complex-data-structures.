// quote += " - Veetance " //concactination//

// var quotes = [
// '"work smarter not harder. Don\'t waste your time." - Veetance', 
// '"Grip fast knowledge" - Loral in\'t school'
// ];

function Quote( quoteT, authorT, tagsT, imageT) {
	this.quote = quoteT;
	this.author= authorT;
	this.tags= tagsT;
	this.image= imageT;  //blue
	
	this.display = function() {

		var container = $("<div>")
			this.tags.forEach(function(tag){
				container.addClass(tag);
			})

		container.css("background-image", this.image)

		var quoteString = "";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";

		container.html(quoteString)
		$(".quotes").prepend(container)
	}
}

var quotes = [
 new Quote('"Flower for you."', "- Veetance", ["All","Blue", "3D"],"url(images/Flower.jpg)"),
 new Quote('"Dissolve in Aqua"', "- Veetance", [ "All","Red", "Generative", "3D"],"url(images/1.png)"),

 new Quote('"galaxy"', "- Veetance", ["All", "Generative"],"url(images/Macro.png)")
 


]


//global tag list
var tagList = []

quotes.forEach( function (quote){
	quote.display();
	quote.tags.forEach(function(tag){
		//check to see if tag has been added to taglist 
		if(!tagList.includes(tag)) {
		//if it isnt added, add it
		tagList.push(tag);
		// and also make a button for it.
		$(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>");
		}

	})

});

console.log(tagList)

$(".filter").on("click", function() {
	var tag = $(this).attr("id");
	console.log(tag)
	
	$("div > div").not("." + tag).hide();
	$("." + tag).fadeIn();

	$(".filter").removeClass("active")
	$(this).addClass("active")

	

})










