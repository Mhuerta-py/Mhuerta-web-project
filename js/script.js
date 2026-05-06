document.addEventListener("DOMContentLoaded", function() {

const form = document.getElementById("dinoForm");
const messageBox = document.getElementById("messageBox");

form.addEventListener("submit", function(event) {
event.preventDefault();

const name = document.getElementById("name").value;
const dino = document.getElementById("dino").value;

let message = "";

if (dino === "Raptor") {
message = name + ", you picked Raptors. Good choice. A lot of raptors likely had feathers, not just scales, and they are one of the main reasons scientists believe many dinosaurs were more bird-like than we used to think. They were fast, smart, and built for hunting.";
} 
else if (dino === "T-Rex") {
message = name + ", you picked T-Rex. Fun fact: T-Rex had forward-facing eyes like modern predators, which gave it strong depth perception. If a T-Rex was looking straight at you, it was actually focused on you, not just randomly staring.";
} 
else if (dino === "Brachiosaurus") {
message = name + ", you picked Brachiosaurus. This dinosaur had longer front legs than back legs, which gave it a tilted posture and helped it reach high vegetation, kind of like a giant giraffe.";
} 
else if (dino === "Stegosaurus") {
message = name + ", you picked Stegosaurus. Its tail spikes, called a thagomizer, could seriously injure predators. Some fossils even show damage that matches those spikes.";
} 
else if (dino === "Triceratops") {
message = name + ", you picked Triceratops. Its three horns and large frill were likely used for defense and display, and possibly even fighting other triceratops.";
}

messageBox.innerHTML = "<p>" + message + "</p>";
});

});