var TitleScreen = function(game) {};

TitleScreen.prototype = {
    create: function() {
        var titleText = this.game.add.text(this.world.centerX, this.world.centerY, "Press the button when you are ready to begin!");
        titleText.anchor.setTo(0.5, 0.5);
        this.game.load.image("play", 'play.png');
        play = this.game.add.button(this.world.centerX, this.world.centerY + 100, "play", this.playGame, this);
        play.anchor.setTo(0.5, 0.5);
    },
    playGame: function() {
        this.game.state.start("Main");
    }
};

