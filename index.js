  var qlist = ["What is my age? ",
    "What is my favourite song? ",
    "What do I like more \n A)Ice-cream \n B)chocolates? ",
    "Name my hometown. ",
    "Who is my favourite fictional character? "
  ];

  var alist = ["19",
    "Faded",
    "B",
    "Baghpat",
    "John Wick"
  ];

  var score = 0;

  function qnaFunction(listedquestion , listedanswer) {

    var readlineSync = require("readline-sync");
    var answerOfUser = readlineSync.question(listedquestion);

    if ( answerOfUser === listedanswer) {
      score = score + 2;
      console.log();
      console.log("you are right!");
    }
    else{
      score--;
      console.log();
      console.log("you are wrong!");
    }
    console.log("current score: "+score);
    console.log();
  }

  for(var i = 0; i < qlist.length; i++ ){
    qnaFunction(qlist[i] , alist[i]);
     if (i === 0 ){
       console.log("HINT - Keep the 1st letter of the word capital and the rest small.");
     }
     console.log();
  }
  console.log();
  console.log("final score: "+score);

  var highScores = ["Ankur-7",
  "Prashant-6", 
  "Dhriti-6"];

  console.log();
  console.log("High Scores -- ");
  console.log();

  for(var j = 0 ; j < highScores.length; j++){
    console.log(highScores[j]);
  }

  console.log();
 
  if (score > 7 ) {
  console.log("Congrats! You have beaten the High Score. Send me a ss to update your score as new High Score.");
  