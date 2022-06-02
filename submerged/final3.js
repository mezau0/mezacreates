  var db = [{ //this is 0
    "question": " Welcome to Act Three! What route were you on?",
    "question1": " ",
    "question2": " ",
    "answers": [{ 
        "title": "Adam, the human (he/him/his)",
        "response": 1
      },
      {
        "title": "Vari, the explorer (she/her/hers)",
        "response": 1
      },
      {
        "title": "Ula, the jeweler (ey/em/eirs)",
        "response": 1
      }
    ]
  },
  { //this is 1
    "question": " More routes coming soon!",
    "question1": "You can play Act One of Adam's route or Act One of Ula's route. ",
    "question2": "Please click on the first seashell below to go to Act One. ",
    "answers": [{ 
        "title": "More coming soon!",
        "response": 1000
      },
    ]
  },

  ];

var currentLocation = 0;

window.printCurrentLocation = function() {
  document.getElementById("question").innerHTML = db[currentLocation].question;
  document.getElementById("question1").innerHTML = db[currentLocation].question1;
  document.getElementById("question2").innerHTML = db[currentLocation].question2;
  var answers = "";
  for (var i = 0, l = db[currentLocation].answers.length; i < l; i++) {
    answers += "<p><button onclick='setLocation(" + db[currentLocation].answers[i].response + ")'>" + db[currentLocation].answers[i].title + "</button></p>";
  }
  document.getElementById("answers").innerHTML = answers;
}

window.setLocation = function(num) {
  currentLocation = num;
  window.printCurrentLocation();
}

window.printCurrentLocation();