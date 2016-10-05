var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
var warTurf = $("#turfwar");

function getWikiIntro(title, processor) {
  console.log("hello")
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
        $("#game-output").text(processed);
      }                
    }
  })
}
onNewValue("leadervalue",function(leaderoutput){warTurf.html(leaderoutput)}) 


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
    var isBob = str.indexOf("bob");
    var isWorking = str.indexOf("working");
    var CalculateFunction = str.indexOf("/calculate")
    var GoogleFunction = str.indexOf("/google")
    var ClaimFunction = str.indexOf("/say")
    if (ClaimFunction > -1) {
      var thisvalue = str.split("/say")[1]
      storeValue("leadervalue", thisvalue);
    }
    if (GoogleFunction > -1) {
      var title = str.split("/google")[1];
      getWikiIntro(title, function(text) {

        gameOutput.html(text)

      })

    }
    if (CalculateFunction > -1) {
      var nS = str.split("/calculate")[1];
      var isAdd = nS.indexOf("+");
      var isTimes = nS.indexOf("x");
      var isMinus = nS.indexOf("-");
      var isDivide = nS.indexOf("/");
      var isFactorial = nS.indexOf("!");
      if (isFactorial > -1) {
        var facNumber = nS.split("!")[0]
        
      }
      if (isTimes > -1) {
        var timesSplit = nS.split("x");
        var oneNumber = parseFloat(timesSplit[0]);
        var twoNumber = parseFloat(timesSplit[1]);
        var multiply = (oneNumber * twoNumber);        
        console.log(multiply);
        var multiplyFinal = String(multiply);        
        gameOutput.html(multiplyFinal)
      }
      if (isMinus > -1) {        
        var minusSplit = nS.split("-");
        var fNumber = parseInt(minusSplit[0]);
        var sNumber = parseInt(minusSplit[1]);
        var subtract = (fNumber - sNumber);
        var subtractFinal = String(subtract);
        console.log("3")
        gameOutput.html(subtractFinal)
      }
      if (isAdd > -1) {         
        var plusSplit = nS.split("+");
        var firstNumber = parseFloat(plusSplit[0]);
        var secondNumber = parseFloat(plusSplit[1]);
        var add = (firstNumber + secondNumber);
        var addFinal = String(add);
        console.log("3")
        gameOutput.html(addFinal)
      }
      if (isDivide > -1) {         
        var divideSplit = nS.split("/");
        var firstoneNumber = parseFloat(divideSplit[0]);
        var secondtwoNumber = parseFloat(divideSplit[1]);
        var divide = (firstoneNumber / secondtwoNumber);
        var divideFinal = String(divide);
        console.log("3")
        gameOutput.html(divideFinal)
      }
    }
    if (isWorking > -1) {
      gameOutput.html("yes")
    }
    if (isBob > -1) {
      gameOutput.html("that is my name, don't wear it out")
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

  else {gameOutput.html("That doesnt make any sense  idiot, type 'help' for a list of things that do make sense");
       }
}

var responses = ["Bot Bob!", "Bob", "My name is Bob","my name is henry vaugn bransten duex mobile chow meinington of wells, but you can call me Bob!","Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky, just kidding... its bob","Just ask ur mum!!!"]

var inc = 0
function counter() {
  inc = inc + 1;
} 



