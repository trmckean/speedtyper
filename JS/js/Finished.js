var Finished = function(game) {};

Finished.prototype = {
    init: function(elapsed_time, wpm) {
        alert("It took you " + elapsed_time + " seconds to type the phrase correctly!\n" +
            "You typed the phrase with a WPM of: " + wpm);
    },
    create: function() {}

};