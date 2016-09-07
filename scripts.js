alert("I want to write a story, but I need your help.  Can you give me a few words to help me finish things up?")

var questions = 8;
var questionsLeft = " [" + questions + " questions left]"

var properNoun1 = prompt("Give me a Proper Noun, please." + questionsLeft);
var properNoun2 = prompt("Give me another Proper Noun, thank you very much.");
var pluralNoun1 = prompt("I'd like a Plural Noun, if you don't mind.");
var tranportation1 = prompt("You should now type a form of transportation.");
var adjective1 = prompt("Give me an adjective, okay?");
var adjective2 = prompt("I need a second adjective...");
var adjective3 = prompt("If you love me, you'll write another adjective.");
var verbIng1 = prompt("One last thing... I need a verb ending in 'ing.'");

var title = "<h1>The " + properNoun1 + " and the " + properNoun2
title += "!</h1>";

var paragraph01 = "<p>One day long ago, some " + pluralNoun1 + " set out to sea in their " + tranportation1 + ". One of them brought his pet " + properNoun1 + " along for the " + adjective1+ " journey.";

var paragraph02 = "<p>When they were far out at sea, a " + adjective2+ " storm overturned their " + tranportation1 + ". Everyone fell into the sea, and the " + properNoun1 + " was sure that he would drown. Suddenly a " + properNoun2 + " appeared and picked him up."

var paragraph03 = "<p>They soon reached the island and the " + properNoun1 + " came down from the " + properNoun2 + "’s back. The " + properNoun2 + " asked the " + properNoun1 + ", \“Do you know this place?\”";

var paragraph04 = "<p>The " + properNoun1 + " replied, \“Yes, I do. In fact, the " + adjective3 + " king of the island is my best friend. Do you know that I am actually a prince?\”"

var paragraph05 = "<p>Knowing that no one lived on the island, the " + properNoun2 + " said, \“Well, well, so you are a prince! Now you can be a " + adjective3 + " king!\” The " + properNoun1 + " asked, \“How can I be a " + adjective3 + " king?\”";

var paragraph06 = "<p>As the " + properNoun2 + " started " + verbIng1 + " away, he answered, \“That is easy. As you are the only creature on this island, you will naturally be the " + adjective3 + " king!\”"

document.write("Here is the story that we wrote together...")
document.write(title);
document.write(paragraph01);
document.write(paragraph02);
document.write(paragraph03);
document.write(paragraph04);
document.write(paragraph05);
document.write(paragraph06);
