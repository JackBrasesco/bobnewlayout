var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
function getWikiIntro(title, processor) {
  $.ajax({
    method: "GET",
    url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=max&explaintext&exintro&titles=" + title,    
    dataType: "jsonp",
    jsonp: "callback",
    success: function(res) {
      var pages = res.query && res.query.pages
      if (pages) {
        var pageKeys = Object.keys(pages);
        var text = pages[pageKeys[0]].extract;          
        var processed = processor(text);
        $(".text-display").text(processed);
      }                
    }
  })
}
gameInput.keydown(function(keydownEvent) {
  // the key code for enter is 13
console.log(gameOutput)
  if (keydownEvent.keyCode == 13) {  
    parseText(gameInput.val()); 
    gameInput.val();
    var str = gameInput.val().toLowerCase();
    var isColor = str.indexOf("color");
    var isName = str.indexOf("name");
    var isFuck = str.indexOf("fuck");
    var isHi = str.indexOf("hi");
    var isAge = str.indexOf("old");
    var isGood = str.indexOf("good");
    var isHow = str.indexOf("how are");
    var isBye = str.indexOf("bye");
    var CalculateFunction = str.indexOf("/calculate")
    if (CalculateFunction > -1) {
      var nS = str.split("/calculate")[1];
      var isAdd = nS.indexOf("+");
      var isTimes = nS.indexOf("x")
      if (isTimes > -1); {
        console.log("2")
        var timesSplit = nS.split("x");
        var oneNumber = parseFloat(timesSplit[0]);
        var twoNumber = parseFloat(timesSplit[1]);
        var multiply = (oneNumber * twoNumber);
        var multiplyFinal = String(multiply);
        console.log("3")
        gameOutput.html(multiplyFinal)
      }
      if (isAdd > -1); {
      console.log("2")
        var plusSplit = nS.split("+");
        var firstNumber = parseFloat(plusSplit[0]);
        var secondNumber = parseFloat(plusSplit[1]);
      var add = (firstNumber + secondNumber);
        var addFinal = String(add);
        console.log("3")
      gameOutput.html(addFinal)
      }
    }
    if (isBye > -1) {
      gameOutput.html("adios!")
    }
    if (isHow > -1) {
      gameOutput.html("IM NOT GOOD")
    }
    if (isGood > -1) {
      gameOutput.html("That's nice... I'm good too")
    }
    if (isAge > -1) {
      gameOutput.html("I am 13490124930492 years old")
    }
    if (isHi > -1) {
      counter()
      if (inc < 3)
        gameOutput.html("Hi, how are you")
        else gameOutput.html("ur mum said hi last night!!!!!") 
          }
    if (isColor > -1) {
      gameOutput.html("My favorite color is blue")
    }
    else if (isName > -1) {
      var response
      =responses[Math.floor(Math.random()*responses.length)];
      gameOutput.html(response)
    }
    else if (isFuck > -1) {
      gameOutput.html("When and where?")
    }
    else {}
    console.log(isFuck)
    gameInput.val("")
  }  
})



function parseText(text) {  
  if (text === "hello") {
    gameOutput.html("Hi there!");
  }else if(find > 0) {
    gameOutput.html("blue");
  } else if(text === "How much do you weigh") {
    gameOutput.html("3 pounds");
  } else if(text === "help") {
    gameOutput.html("I'm not 'bob the help bot'... help thyself");
  } else if(text === "Hi") { 
    counter()
    if (inc < 3)
      gameOutput.html("Hi, how are you")
      else gameOutput.html("ur mum said hi last night!!!!!") 
        } else if(text === "What's your favorite class?") {
          gameOutput.html("Anything but programming!");
        } else if(text === "what is your name") {
          var response
          =responses[Math.floor(Math.random()*responses.length)];
          gameOutput.html(response);      
        } 

  else {gameOutput.html("What was that? Type 'help' for a list of things you can ask me!");
       }
}

var responses = ["Bot Bob!", "Bob", "My name is Bob","my name is henry vaugn bransten duex mobile chow meinington of wells, but you can call me Bob!","Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky, just kidding... its bob","Just ask ur mum!!!"]

var inc = 0
function counter() {
  inc = inc + 1;
} 



