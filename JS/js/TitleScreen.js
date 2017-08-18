/*SpeedTyper is a web app that tests your typing speed.
    Copyright (C) 2017 Tyler McKean

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    */

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

