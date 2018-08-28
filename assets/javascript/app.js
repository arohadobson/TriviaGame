// Institute Variables

var time = 20;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var arrayFinder = 0;


var question01 = {
	question: "What player led the NFL with 27 rushing touchdowns in 2003?",
	answers: ["Marshall Faulk", "Priest Holmes", "Jamal Lewis", "Ahman Green"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Priest Holmes",
	image: "assets/images/Priest\ Holmes.jpg"
};
var question02 = {
	question: "Which NFL team has played in both the AFC and NFC Championship Games",
	answers: ["Seahawks", "49ers", "Jaguars", "Cardinals"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Seahawks",
	image: "assets/images/i.png"
};
var question03 = {
	question: "What team drafted Brett Favre?",
	answers: ["Raiders", "Vikings", "Packers", "Falcons"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Falcons",
	image: "assets/images/FavreFalcons.jpg"
};
var question04 = {
	question: "Who is the only Super Bowl MVP to have played on the losing team?",
	answers: ["Len Dawson", "Randy White", "Chuck Howley", "Larry Csonka"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Chuck Howley",
	image: "assets/images/HowleyChuckPose.jpg"
};
var question05 = {
	question: "Who was the first openly gay player drafted by an NFL team?",
	answers: ["Michael Sam", "Ray McDonald", "Dave Kopay", "Jerry Smith"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Michael Sam",
	image: "assets/images/michaelSam.jpg"
};
var question06 = {
	question: "Who was the first player drafted in the first NFL draft in 1936?",
	answers: ["Sammy Baugh", "Don Hutson", "Bart Starr", "Jay Berwanger"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Jay Berwanger",
	image: "assets/images/jayBerwanger.jpg"
};
var question07 = {
	question: "What team won 3 Super Bowls in the 1990s?",
	answers: ["49ers", "Cowboys", "Patriots", "Broncos"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Cowboys",
	image: "assets/images/DAL.png"
};
var question08 = {
	question: "Which NFL team features a helmet logo on only one side of their helmet?",
	answers: ["Patriots", "Cowboys", "Steelers", "Dolphins"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Steelers",
	image: "assets/images/Steelers.jpg"
};
var question09 = {
	question: "What is the oldest NFL franchise in continuous operation with the same name in the same location?",
	answers: ["Cleveland Browns", "Arizona Cardinals", "Green Bay Packers", "Chicago Bears"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Green Bay Packers",
	image: "assets/images/GBP.png"
};
var question10 = {
	question: "In 1993, what NFL team made off-season trades for Joe Montana and Marcus Allen?",
	answers: ["Kansas City Chiefs", "Denver Broncos", "Oakland Raiders", "San Francisco 49ers"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Kansas City Chiefs",
	image: "assets/images/KCC.png"
};


var questionsArray = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];

// Functions

	function start () {
		$(".content-div").empty();
		var startButton = $("<button>");
		startButton.text("Start");
		startButton.addClass("start btn btn-default answerBtn");
		$(".content-div").append(startButton);
	};

	function run() {
      intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
      time--;
      $(".timer-div").html("Time Remaining: " + time + " Seconds");
      if (time == 0) {
        if (arrayFinder < questionsArray.length-1) {
        	setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
        	solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      	else if (arrayFinder < questionsArray.length) {
      		setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      };
    };

    function stop() {
      clearInterval(intervalId);
    };

	function questionWrite (obj) {
		time = 20;
		$(".timer-div").empty();
		$(".timer-div").html("Time Remaining: " + time + " Seconds");
		$(".question-div").empty();
		$(".content-div").empty();
		run ();
		$(".question-div").html(obj.question);
		for (var i = 0; i < obj.answers.length; i++) {
			var answerButton = $("<button>");
			answerButton.addClass("answer btn btn-default answerBtn");
			answerButton.text(obj.answers[i]);
			answerButton.attr("value", obj.values[i]);
			$(".content-div").append(answerButton);
			$(".content-div").append("<br>");
		};
	};

	function solutionWrite (obj) {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".content-div").html("The correct answer was " + obj.correct + "<br>");
		var characterImage = $("<img>");
		characterImage.attr("height", "250");
		characterImage.attr("src", obj.image);
		characterImage.addClass("character")
		$(".content-div").append(characterImage);
		arrayFinder++;
	};

	function startWrite () {
		questionWrite(question01);
	};

	function answerSelect () {
		stop();
		if ($(this).attr("value") == "correct") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Correct!");
			correct++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
		else if ($(this).attr("value") == "incorrect") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Incorrect!");
			incorrect++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
	};

	function endWrite () {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".question-div").html("Here's how you did!");
		$(".content-div").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>" + "<p> Unanswered: " + unanswered + "</p>");
		var resetButton = $("<button>");
		resetButton.addClass("reset btn btn-default answerBtn");
		resetButton.text("Start Over?");
		$(".content-div").append(resetButton);
	}

	function resetClick () {
		arrayFinder = 0;
		incorrect = 0;
		correct = 0;
		unanswered = 0;
		startWrite();
	}

	$(document).on("click", ".start", startWrite);

	$(document).on("click", ".answer", answerSelect);

	$(document).on("click", ".reset", resetClick);
// Running Code

start();