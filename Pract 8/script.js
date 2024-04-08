import { speak as speakHello } from './library/SpeakHello.js';
import { speak as speakGoodbye, speakAdd as speakAddGoodbye } from './library/SpeakGoodBye.js';

var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    if (names[i][0].toLowerCase() === 'j') {
        speakGoodbye(names[i]);
    } else {
        speakHello(names[i]);
    }
}

var additionalSelection = function(name) {
    if (name.charAt(name.length - 1).toLowerCase() === 'a') {
        console.log(name + " ends with 'a'");
    }
};

names.forEach(function(name) {
    additionalSelection(name);
});
