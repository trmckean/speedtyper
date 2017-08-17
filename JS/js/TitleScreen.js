var TitleScreen = function(game) {};

TitleScreen.prototype = {
    preload: function() {
        this.game.load.image("play", 'img/play.png');
    },

    create: function() {
        var titleText = this.game.add.text(this.world.centerX, this.world.centerY, "Press the button when you are ready to begin!");
        titleText.anchor.setTo(0.5, 0.5);
        var play = this.game.add.button(this.world.centerX, this.world.centerY + 100, "play", this.playGame, this);
        play.anchor.setTo(0.5, 0.5);
        //play.scale.setTo(3, 3);
    },

    playGame: function() {
        this.game.state.start("Main");
    }
};

