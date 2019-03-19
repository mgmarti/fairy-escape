$( document ).ready(function() {
    
    //Variables
    var wins = 0;
    var losses = 0;
    var toEscape = Math.floor(Math.random() * 101) + 19;
    var pointsCounter = 0;
    var iron = Math.floor(Math.random() * 12) + 1;
    var silver = Math.floor(Math.random() * 12) + 1;
    var sugar = Math.floor(Math.random() * 12) + 1;
    var salt = Math.floor(Math.random() * 12) + 1;

    //Score board text
    $('#fairy-points').text("Fairy points: " + toEscape);
    $('#user-points').text("Your score: ");
    $('#wins').text("Wins: ");
    $('#losses').text("Losses: ");
    
    //Game Reset
    var resetGame = function() {
        toEscape = Math.floor(Math.random() * 101) + 19;
        pointsCounter = 0;
        iron = Math.floor(Math.random() * 12) + 1;
        silver = Math.floor(Math.random() * 12) + 1;
        sugar = Math.floor(Math.random() * 12) + 1;
        salt = Math.floor(Math.random() * 12) + 1;
        $('#user-points').text("Your score: ");
        $('#fairy-points').text("Fairy points: " + toEscape);

    };
    
    //Score Checker
    var scoreCheck = function() {
       if(toEscape === pointsCounter) {
           alert('You\'ve escaped!')
           wins++;
           $("#wins").text("Wins: " + wins);
           resetGame();
       }else if (pointsCounter > toEscape) {
            alert('You lose! Try again.')
            losses++;
            $("#losses").text("Losses: "+ losses);
            resetGame();
           }
       };

       //Values
       $('#iron').on('click', function() {
        pointsCounter+=iron;
        $('#user-points').text("Your score: " + pointsCounter);
        scoreCheck();
       });

       $('#silver').on('click', function() {
        pointsCounter+=silver;
        $('#user-points').text("Your score: " + pointsCounter);
        scoreCheck();
       });

       $('#sugar').on('click', function() {
        pointsCounter+=sugar;
        $('#user-points').text("Your score: " + pointsCounter);
        scoreCheck();
       });

       $('#salt').on('click', function() {
        pointsCounter+=salt;
        $('#user-points').text("Your score: " + pointsCounter);
        scoreCheck();
       });
});


    




