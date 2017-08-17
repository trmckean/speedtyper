var Boot = function(game) {
    console.log("%cStarting the game", "color:white; background:red");
};

Boot.prototype = {
    create: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.backgroundColor = '#d3d2e0';
        this.game.state.start("Main");
    }
};