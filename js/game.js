$(document).ready(function(){

    var startPlay = 0;
    var score = 0;

    //The Start Countdown
    $("#start-line").one("mouseenter", function() {
        $("#counter").show();
        setTimeout(function () {$("#counter_content").text("3");},1000);
        setTimeout(function () {$("#counter_content").text("2");},2000);
        setTimeout(function () {$("#counter_content").text("1");},3000);
        setTimeout(function () {
            $("#counter_content").text("");//Clear all content in div
            $("#counter").hide();
            runTheGame();
        },4000);
    });

    //The player Starts the Game
    function runTheGame(){
        startPlay = 1;
        $('.gamePath').attr('class', 'gamePath path-animation');
    }

    // Reloads the Page.
    $(".stop-animation").click(function(){
        window.location.reload(true)
    });

    //When the player hit Paths or Obstacles and lose the game.
    $(".leftSide, .rightSide, .Obstacles").mouseenter(function () {
        if (startPlay == 1){
            $("#lose-box").show();
            $(".path-animation").css("animation-play-state", "paused");
            var audio = new Audio('sound/error-sound.mp3');
            audio.play();
            document.getElementById('looseFinalScore').innerHTML = score;
        }
        startPlay = 0;
    });

    //When the player wins the game
    $("#finish-line").mouseenter(function () {
        if (startPlay == 1){
            $("#win-box").show();
            var audio = new Audio('sound/win-sound.mp3');
            audio.play();
            document.getElementById('winFinalScore').innerHTML = score;
        }
    });

    $('#p1').mouseenter(function(){
        $('#p1').hide();
        score++;
        displayScore();
    });

    $('#p2').mouseenter(function(){
        $('#p2').hide();
        score++;
        displayScore();
    });

    $('#p3').mouseenter(function(){
        $('#p3').hide();
        score++;
        displayScore();
    });

    $('#p4').mouseenter(function(){
        $('#p4').hide();
        score++;
        displayScore();
    });

    $('#p5').mouseenter(function(){
        $('#p5').hide();
        score++;
        displayScore();
    });

    $('#p6').mouseenter(function(){
        $('#p6').hide();
        score++;
        displayScore();
    });

    $('#p7').mouseenter(function(){
        $('#p7').hide();
        score++;
        displayScore();
    });

    $('#p8').mouseenter(function(){
        $('#p8').hide();
        score++;
        displayScore();
    });

    $('#p9').mouseenter(function(){
        $('#p9').hide();
        score++;
        displayScore();
    });

    $('#p10').mouseenter(function(){
        $('#p10').hide();
        score++;
        displayScore();
    });

    $('#p11').mouseenter(function(){
        $('#p11').hide();
        score++;
        displayScore();
    });
    function displayScore() {
        document.getElementById('scoreCounter').innerHTML = score;
    }
});

