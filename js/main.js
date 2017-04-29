var quote = document.getElementById("quote"); 
var person = document.getElementById("person");
var twitter = document.getElementById("twitter");
var newQuote = document.getElementById("newQuote");
var newUrl = "https://www.dropbox.com/s/jqros6ckfx7zzju/black-sails-quotes.json?dl=0";

//when the button is pressed, it tweets it, with a hashtag 
tweetButton.addEventListener("click", function(){
	var str = quote.textContent + " " + person.textContent;
	str = "https://twitter.com/intent/tweet?text="+str+" &hashtags=quotes";
	window.open(str);
});	

//when the button is pressed, it displays new quote
newQuoteButton.addEventListener("click", function(){
	$.getJSON(newUrl, function(data){
		console.log(data);
		var randomNum = Math.floor(Math.random() * data.length);		
		quote.textContent = data[randomNum].quote;
		person.textContent = '-'+data[randomNum].person;
		switch (data[randomNum].cover) {
			case 0:
				cover = "../img/bs-season-1.jpg";
				break;
			case 1: 
				cover.src = "../img/bs-season-2.jpg";
				break;
			case 2: 
				cover.src = "../img/bs-season-3.jpg";
				break;
			case 3: 
				cover.src = "../img/bs-season-4.png";
				break;
		}
	});
});