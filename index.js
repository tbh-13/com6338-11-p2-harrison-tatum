const textElement = document.getElementById("text");
const buttonChoicesElement = document.getElementById("button-choices");

// the interactive story scenes
const storyData = {
    scene1: {
        text: "You're a lone wanderer on a journey searching for the fabled dreamland; a place where any wish comes true. For someone who has everything to lose, this journey means all that and more.",
        options: [
            { text: "Continue your journey", nextScene: "scene2" }
        ]
    },
    scene2: {
        text: `You've been wandering for days, over rolling green hills and treacherous mountains capped with snow. Through forests barren of leaves and rushing rivers with fish glistening below the surface. 

        You pause in a field that seems to be empty for miles to take a breath. You're tired, 
        but you know you must keep moving forward. A place that will fulfill all your wildest 
        dreams awaits just a few weeks' hike away. 

        You close your eyes to steel yourself and, at the moment you open them, a spark of 
        light catches the corner of your eye. You turn to face the source of this strange light…
        It's peeking through the leaves of a tree. A tree connected to the largest and lushest
        forest you have ever seen… and one that was not there just a moment before. 
        
        You:`,
        options: [
            { text: "Walk toward the suspicious forest", nextScene: "scene3" },
            { text: "Turn and run in the other direction", nextScene: "runAwayEnding" }
        ]
    },
    scene3: {
        text: `You reach the entrance of the forest. The gleaming light has flickered away as though it had been caught, but you do not see anyone or anything as you continue to walk in.

        The forest is lush with life. The floor is covered in a layer of soft, vibrant green moss, making you feel as though you were walking on a cloud. Everywhere around you are flowers of every kind; some blue, some with every color of the rainbow, others with petals as large as your head. 
        
        Remembering your long trek and days without food, your stomach begins to rumble. Just as if it heard you, the forest begins to rumble and a branch pops out displaying a mysterious, but delicious, looking fruit. 

        Do you:`,
        options: [
            { text: "Eat the fruit", nextScene: "fruitEnding" },
            { text: "Pass on the fruit and keep walking", nextScene: "scene4" }
        ]
    },
    scene4: {
        text: `Still hungry, but determined, you continue down the forest path. You halt when you notice a sudden fork in the road, and pause even further when you see the two creatures guarding each path.
        
        Neither speak, but seem to be looking at you for a decision.
        
        The creature guarding the left fork seems to be a sort of anamorphic frog creature, though instead of frog legs and arms, there sat in their place the arms and legs of a rabbit. Its small top hat sat crooked between its enormous eyes and it seemed to be holding some sort of wooden staff with a green crystal affixed on top.
        
        The creature to the right was unmistakably a small red fox, but with huge beady eyes that seemed to be all pupils. At first glance, it almost looked as though the fox was blind, but it was hard to tell since you felt it staring directly at you with intensity. The fox was positioned on its back legs, standing up to show the large crystal covered necklace hanging from its neck.
        
        It seems that you must make a decision: Which route will you take?`,
        options: [
            { text: "The frog creature's route.", nextScene: "frogEnding" },
            { text: "The fox creature's route.", nextScene: "foxEnding" }
        ]
    },
    runAwayEnding: {
        text: "You ran away, but eventually found your way to a small village where you remained. You never found the magical dreamland. GAME OVER.",
        options: [
            { text: "Try Again", nextScene: "scene1" }
        ]
    },
    fruitEnding: {
        text: "The fruit is the most delicious thing you've ever tasted. Almost instantly after your first bite, your eyes grow heavy and you fall into a deep sleep...becoming part of the forest's mossy floor forever. GAME OVER.",
        options: [
            { text: "Try Again", nextScene: "scene1" }
        ]
    },
    frogEnding: {
        text: "You walk up to the frog creature and nod your head to confirm your decision. At once, the frog creature taps its staff three times. Everything goes black and you awake back in the empty field with no forest to be seen. You wait there, wasting away, but the forest never reappears. GAME OVER.",
        options: [
            { text: "Play Again", nextScene: "scene1" }
        ]
    },
    foxEnding: {
        text: "You walk up to the fox and nod your head to confirm your decision. The fox bows in return and begins to lead you down the almost pitch-black path. After what feels like forever, a beam of light begins to shine at the end of the path. You reach the end and sink to your knees…You’ve made it to the dreamland.",
        options: [
            { text: "The End.", nextScene: "scene1" }
        ]
    }
};
// render scene
function renderScene(sceneKey) {
    const scene = storyData[sceneKey];
    textElement.innerText = scene.text;
    // clear prev choices
    buttonChoicesElement.innerHTML = "";
    // create new choice buttons
    scene.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = option.text;
        button.onclick = () => renderScene(option.nextScene);
        buttonChoicesElement.appendChild(button);
    });
}

// start game
renderScene("scene1");