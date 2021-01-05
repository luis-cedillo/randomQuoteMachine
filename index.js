$(document).ready(function(){
  
  function generate() {
    
    var quotes = ["Moral indignation is jealousy with a halo.", "Glory is fleeting, but obscurity is forever.", "If a man does his best, what else is there?", "Not everything that can be counted counts, and not everything that counts can be counted.", "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.", "We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further.", "We may encounter many defeats, but we must not be defeated.", "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.", "Money is not the only answer, but it makes a difference.", "Don't gain the world and lose your soul, wisdom is better than silver or gold.", "None but ourselves can free our mind.", "Is it a crime, to fight, for what is mine?", "I'm a reflection of the community."]; // An array that holds the quotes. 
    
    var authors = ["H.G. Wells", "Napolean Bonaparte", "General George S. Patton", "Albert Einstein", "Albert Einstein", "Richard Dawkins", "Maya Angelou", "Barack Obama", "Barack Obama", "Bob Marley", "Bob Marley", "Tupac Shakur", "Tupac Shakur"]; // An array that holds the authors of the quotes. 
    
    var randomNumber = Math.floor(Math.random() * quotes.length); // Creates a random number between the length of the array and saves the value. 
    
// The random number is passed to the corresponding quote and author. 
    var randomQuote = quotes[randomNumber]; //This chooses the random quote.
    
    var randomAuthor = authors[randomNumber]; // This chooses the random author.
    
    $('.saying').text(randomQuote); 
// This pulls the quote into the screen. 
    $('.author').text(randomAuthor); // This pulls the author into the screen.
    $('#tweetQuote').attr('href','https://twitter.com/share?text=' + randomQuote +" - " + randomAuthor)
  }
  
  $(".quoteButton").on("click", function(){ generate();               });
});