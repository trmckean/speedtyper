var Finished = function(game) {};

Finished.prototype = {
    init: function(elapsed_time, wpm, errors) {
        alert("It took you " + elapsed_time + " seconds to type the phrase correctly!\n" +
            "You typed the phrase with a WPM of: " + wpm + "\n" +
        "You also typed with " + errors + " errors!");
    },
    create: function() {
        var finishedText = this.game.add.text(this.world.centerX, this.world.centerY, "You win! Play again?");
        finishedText.anchor.setTo(0.5, 0.5);
        play = this.game.add.button(this.world.centerX, this.world.centerY + 100, "play", this.playGame, this);
        play.anchor.setTo(0.5, 0.5);
    },
    playGame: function() {
        this.game.state.start("Main");
    }


};