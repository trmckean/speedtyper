var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create/*, update: update*/});

var word = "abcdef ghijkl mnop qrst uvwxyz";
var correct = [];
var bmd;
var aKey;


function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
}


function create() {

    var text = game.add.text(game.world.centerX, 100, "Please enter the following phrase as fast as you can!");
    text.anchor.setTo(0.5, 0.5);

    /*
    words = game.add.text(game.world.centerX, game.world.centerY, "abcdef ghijk lmnop qrstuv wxyz");
    words.anchor.setTo(0.5, 0.5);
    */

    //  Here we'll create a simple array where each letter of the word to enter represents one element:

    for (var i = 0; i < word.length; i++)
    {
        correct[word[i]] = false;
    }


    //  This is our BitmapData onto which we'll draw the word being entered
    bmd = game.make.bitmapData(1920, 1080);
    bmd.context.font = '64px Arial';
    bmd.context.fillStyle = '#ffffff';
    bmd.context.fillText(word, 64, 64);
    bmd.addToWorld();

    //  Capture all key presses
    game.input.keyboard.addCallbacks(this, null, null, keyPress);


}
/*
function update() {
    bmd.cls();

    var x = 64;
}

*/
/*
function keyboardInput() {
    aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);

}


function sleep(milliseconds) {
    var currentTime = new Date().getTime();

    while(currentTime + milliseconds >= new Date().getTime()) {

    }
}
*/
function keyPress(char) {

    //  Clear the BMD
    bmd.cls();

    //  Set the x value we'll start drawing the text from
    var x = 64;

    for(var i = 0; i < word.length; i++) {

        currentLetter = word.charAt(i);

        if (char === currentLetter) {
            bmd.context.fillStyle = '#00ff00'
        }
        else {
            bmd.context.fillStyle = '#ffffff';
        }

        bmd.context.fillText(currentLetter, x, 64);

        x += bmd.context.measureText(currentLetter).width;
    }
}

    //  Loop through each letter of the word being entered and check them against the key that was pressed
    /*
    for (var i = 0; i < word.length; i++)
    {
        var letter = word.charAt(i);

        //  If they pressed one of the letters in the word, flag it as correct
        if (char === letter)
        {
            correct[letter] = true;
        }

        //  Now draw the word, letter by letter, changing colour as required
        if (correct[letter])
        {
            bmd.context.fillStyle = '#00ff00';
        }
        else
        {
            bmd.context.fillStyle = '#ffffff';
        }

        bmd.context.fillText(letter, x, 64);

        x += bmd.context.measureText(letter).width;
    }

}
*/
