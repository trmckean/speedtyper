var Finished = function(game) {};

Finished.prototype = {
    init: function(elapsed_time) {
        alert("It took you " + elapsed_time + " seconds to type the phrase correctly!");
    },
    create: function() {}

};