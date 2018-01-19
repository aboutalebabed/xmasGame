$(document).ready(function(){

    var startPlay = 0;

    //The Start Countdown
    $("#start-line").mouseenter(function() {
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
        }
        startPlay = 0;
    });

    //When the player wins the game
    $("#finish-line").mouseenter(function () {
        if (startPlay == 1){
            $("#win-box").show();
            var audio = new Audio('sound/win-sound.mp3');
            audio.play();
        }
    });
});