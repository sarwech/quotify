var quoteMessage = [
  "Frankly, my dear, I don't give a damn",
  "I'm gonna make him an offer he can't refuse.",
  "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
  "Toto, I've a feeling we're not in Kansas anymore.",
  "Here's looking at you, kid.",
  "Go ahead, make my day.",
  "All right, Mr. DeMille, I'm ready for my close-up.",
  "May the Force be with you.",
  "Fasten your seatbelts. It's going to be a bumpy night.",
  "You talking to me?",
  "What we've got here is failure to communicate.",
  "I love the smell of napalm in the morning.",
  "Love means never having to say you're sorry.",
  "The stuff that dreams are made of.",
  "E.T. phone home.",
];


$(document).ready(function() {

  function getTime() {
    var days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    var today = new Date();
    var d = today.getDay();
    function getDay() {
      return days[d-1].toUpperCase();
    };
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    $("#time").append(getDay," ",h,":",m);
  }
  
  getTime();
  
//   function getQuote() {
//     $.ajax({
//       url: "http://api.icndb.com/jokes/random",
//       jsonp: "callback",
//       type: "GET",
//       dataType: "jsonp",
//       success: function(data) {
//         $(".quotes").append(data["value"]["joke"]);
//       },
//       xhrFields: {
//         withCredentials: false
//       }
//     });
//   };
  
  function getMovieQuote() {
    var random = Math.floor((Math.random() * quoteMessage.length)) + 1;
    console.log(random);
    $(".quotes").append('"',quoteMessage[random],'"');
  }
  
  getMovieQuote();
  
  $("#getQuote").on("click", function() {
    $(".quotes").html('');
    getMovieQuote();
  });
  
  $("#shareTweet").on("click", function() {          
    var tweet = document.getElementsByClassName("quotes")[0].innerHTML;
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + tweet);
  })

  
});

function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quotes').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('#shareTweet').attr('href', tweetQuote);
}

// load a quote from a json
// add a button which loads new quote on click
// add background image tied to 1 quote
// change quote and image on blick


// $.getJSON("https://www.reddit.com/r/gaming/about.json", function(data) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });