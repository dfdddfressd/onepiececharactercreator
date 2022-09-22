var nameButton = document.getElementById("nameButton");
nameButton.onclick = nameCode;
var getFruit = document.getElementById("getFruit");
getFruit.onclick = fruitCode;
var getRole = document.getElementById("getRole");
getRole.onclick = roleCode;
var getHaki = document.getElementById("getHaki");
getHaki.onclick = hakiCode;


var outputName = document.getElementById("name")
var fruitDescription = document.getElementById("fruitDescription");
var outputFruit = document.getElementById("outputFruit");
var outputRole = document.getElementById("outputRole");
var roleDescription = document.getElementById("roleDescription");
var outputHaki = document.getElementById("outputHaki");
var hakiDescription = document.getElementById("hakiDescription");


function nameCode() {
  var nameInput = document.getElementById("nameInput").value;
  if (nameInput.length < 1) {
  	outputName.setAttribute('style', 'color: red');
    outputName.innerHTML = "Please enter a name!!";
  }
  if (nameInput.length >= 1) {
  	outputName.setAttribute('style', 'color: white');
    var o = Math.ceil(Math.random() * 10);
    if (o == 1) {
      outputName.innerHTML = "'Dragon Slayer' " + nameInput;
    } else if (o == 2) {
      outputName.innerHTML = "'Heavenly Retribution' " + nameInput;
    } else if (o == 3) {
      outputName.innerHTML = "'Warrior of the Realm' " + nameInput;
    } else if (o == 4) {
      outputName.innerHTML = "'The Silence' " + nameInput;
    } else if (o == 5) {
      outputName.innerHTML = "'New Emperor' " + nameInput;
    } else if (o == 6) {
      outputName.innerHTML = "'The Strongest One Alive' " + nameInput;
    } else if (o == 7) {
      outputName.innerHTML = "'Crash Carcass' " + nameInput;
    } else if (o == 8) {
      outputName.innerHTML = "'Free Walker' " + nameInput;
    } else if (o == 9) {
      outputName.innerHTML = "'Giganto Iris' " + nameInput;
    } else if (o == 10) {
      outputName.innerHTML = "'Captain' " + nameInput;
    }
  }


}

function roleCode() {

  var roleList = Math.ceil(Math.random() * 3);
console.log(roleList);
  if (roleList == 1) {
    outputRole.innerHTML = "Your role is a <b>Pirate!</b>";
    roleDescription.innerHTML = "You are a pirate, sailing the sea looking for treasure. Try and make yourself known to the world, and become one of the greats! Watch out for the marines!";
  } else if (roleList == 2) {
    outputRole.innerHTML = "Your role is a <b>Marine!</b>";
    roleDescription.innerHTML = "You are a marine, the embodiment of justice and peace across the seas. Train hard, catch pirates, and maybe you'll one day be the top admiral in the Navy!";
  } else if (roleList == 3) {
    outputRole.innerHTML = "Your role is a <b>Revolutionary Army Soldier</b>";
    roleDescription.innerHTML = "You are a soldier of the Revolutionary Army, a party not affiliated with the pirates or marines. You work in the shadows to help bring peace to the world, using any means necessary. Your only goal is to topple the World Government, and destroy injustice.";
  }

}

function hakiCode() {
  var hakiList = Math.ceil(Math.random() * 8);

  if (hakiList == 1) {
    outputHaki.innerHTML = "<b>Observation Haki</b>";
    hakiDescription.innerHTML = "You have Observation Haki, which grants you a 6th sense. You can sense people and objects that you cannot see, and detect where they are and where they are coming from. Very useful!";
  } else if (hakiList == 2) {
    outputHaki.innerHTML = "<b>Armament Haki</b>";
    hakiDescription.innerHTML = "You have Armament Haki, which grants you immense protection. You can coat your body with this haki, creating a strong, invisible shield around you. This armor can repel attacks, and even hit Logia Devil Fruits such as the Pika Pika and the Mera Mera, who normally would not be able to be hit.";
  } else if (hakiList == 3) {
    outputHaki.innerHTML = "<b>Conqueror's Haki</b>";
    hakiDescription.innerHTML = "Wow! You have Conqueror's Haki, the best of the three! With this king-like power, you can use your spirit to drive other people into unconsciousness, taking them out without even moving a finger. The better your Conqueror's Haki, the more passion and spirit you have.";
  } else if (hakiList == 4) {
    outputHaki.innerHTML = "<b>Observation and Armament Haki</b>";
    hakiDescription.innerHTML = "You have both Observation and Armament Haki. You earn a 6th sense and the ability to form invisible armor.";
  } else if (hakiList == 5) {
    outputHaki.innerHTML = "<b>Observation and Conqueror's Haki</b>";
    hakiDescription.innerHTML = "You have both Observation and Conqueror's Haki. You earn a 6th sense, and the ability to weaponize your spirit.";
  } else if (hakiList == 6) {
    outputHaki.innerHTML = "<b>Armament and Conqueror's Haki</b>";
    hakiDescription.innerHTML = "You have both Armament and Conqueror's Haki. You earn the ability to form invisible armor, and the ability to weaponize your spirit.";
  } else if (hakiList == 7) {
    outputHaki.innerHTML = "<b>Conqueror's, Observation, and Armament Haki</b>";
    hakiDescription.innerHTML = "WOW! YOU HAVE ALL THREE HAKI TYPES! You have the ability to weaponize your spirit, utilize a 6th sense, and form invisible armor</b>";
  } else if (hakiList == 8) {
    outputHaki.innerHTML = "<b> You have no Haki... Maybe try rolling again?</b>";
    hakiDescription.innerHTML = "";
  }
}

function fruitCode() {
  var fruitList = Math.ceil(Math.random() * 14);

  if (fruitList == 1) {
    outputFruit.innerHTML = "<b>Gomu Gomu No Mi</b>";
    fruitDescription.innerHTML = "The Gomu Gomu no Mi, or the Gum Gum Fruit, is a devil fruit that allows the user to have the properties of rubber. The user is immune to physical attacks, as their body will stretch. They are immune to electric attacks, but they are especially weak to slicing and slashing attacks. As a rubber human, you can stretch every part of your body and use them to your advantage.";
  } else if (fruitList == 2) {
    outputFruit.innerHTML = "<b>Bane Bane no Mi</b>";
    fruitDescription.innerHTML = "The Bane Bane no Mi, or the Boing Boing Fruit, is a devil fruit that allows the user to have the properties of a spring. As a spring human, you have springs in your legs, giving you fast movement and unpredictable attacks. You can also jump very high and traverse huge distances. A devil fruit like this would make your days a lot easier.";
  } else if (fruitList == 3) {
    outputFruit.innerHTML = "<b>Suke Suke no Mi</b>";
    fruitDescription.innerHTML = "The Suke Suke no Mi, or the Clear Clear Fruit, is a devil fruit that allows the user to become invisible at will. As a clear human, you can utilize invisability to sneak around without being detected, and even launch surprise attacks. No one will be able to see you! You can also turn anything invisible as long as you're touching it at will, which can make it very easy to sneak objects as well.";
  } else if (fruitList == 4) {
    outputFruit.innerHTML = "<b>Bari Bari no Mi</b>";
    fruitDescription.innerHTML = "The Bari Bari no Mi, or the Barrier Barrier Fruit, is a devil fruit that allows the user to create see=through barriers. As a barrier human, you can form invisible, impenetrable walls at will by simply crossing your fingers. No one can break through the barrier. You can only use a couple of barriers at a time, so use them wisely!";
  } else if (fruitList == 5) {
    outputFruit.innerHTML = "<b>Pika Pika no Mi</b>";
    fruitDescription.innerHTML = "The Pika Pika no Mi, or the Glint Glint Fruit, is a devil fruit that allows the user to become light. As a light human, you can transform into light, travel at lightspeed, and deliver lightning fast attacks. Nothing can hit you or damage you, as you will be pure light. This fruit makes you a living light God!";
  } else if (fruitList == 6) {
    outputFruit.innerHTML = "<b>Yomi Yomi no Mi</b>";
    fruitDescription.innerHTML = "The Yomi Yomi no Mi, or the Revive Revive Fruit, is a devil fruit that allows the user to resurrect and live a second life after they first die. As a revive human, you have the ability to not only come back from the dead, but the ability to control souls. Utilize your own soul by leaving your body to adventure around as a soul, but be careful. You aren't immortal! Bone chilling!";
  } else if (fruitList == 7) {
    outputFruit.innerHTML = "<b>Gasu Gasu no Mi</b>";
    fruitDescription.innerHTML = "The Gasu Gasu no Mi, or the Gas Gas Fruit, is a devil fruit that allows the user to become gas at will. They are immune to attacks, as they can simply turn into gas and avoid them. As a gas human, you have the ability to manipulate air, and even take oxygen from others.";
  } else if (fruitList == 8) {
    outputFruit.innerHTML = "<b>Mochi Mochi no Mi</b>";
    fruitDescription.innerHTML = "The Mochi Mochi no Mi, or the Mochi Mochi Fruit, is a devil fruit that allows the user the properties of mochi. The user can stretch like mochi, create mochi, and even become mochi. Pair this with haki, and you'll be a formidable foe.";
  } else if (fruitList == 9) {
    outputFruit.innerHTML = "<b>Suna Suna no Mi</b>";
    fruitDescription.innerHTML = "The Suna Suna no Mi, or the Sand Sand Fruit, is a devil fruit that allows the user to become a sand human. As a sand human, you have the ability to turn into sand, create sand, and control sand at will. No attacks will be able to hit you, as you can turn into sand. You can also use your sand to absorb any water in any object, including people and plants.";
  } else if (fruitList == 10) {
    outputFruit.innerHTML = "<b>Ito Ito no Mi</b>";
    fruitDescription.innerHTML = "The Ito Ito no Mi, or the String String Fruit, is a devil fruit that allows the user to become a string human. You can create near-indestructible strings, and control them. They aren't any ordinary strings, as they can cut through steel. You can even make string clones, and even sew your own organs together if you become damaged. You'll be a true puppeteer of power.";
  } else if (fruitList == 11) {
    outputFruit.innerHTML = "<b>Bomu Bomu no Mi</b>";
    fruitDescription.innerHTML = "The Bomu Bomu no Mi, or the Bomb Bomb Fruit, is a devil fruit that allows the user to become a bomb human. As a bomb human, you can create a bomb from any object you touch. Ever your tears, sweat, blood, or breath! You won't even take any damage from your own bombs.";
  } else if (fruitList == 12) {
    outputFruit.innerHTML = "<b>Mera Mera no Mi</b>";
    fruitDescription.innerHTML = "The Mera Mera no Mi, or the Flame Flame Fruit, is a devil fruit that allows the user to become a flame human. As a flame human, you can become, control, and create fire. Your fires will not harm you, and you will be a force to reckon with. ";
  } else if (fruitList == 13) {
    outputFruit.innerHTML = "<b>Zushi Zushi no Mi</b>";
    fruitDescription.innerHTML = "The Zushi Zushi no Mi, or the Press Press Fruit, is a devil fruit that allows the user to control gravity around them, making them a gravity human. You can cause things to float up by removing gravity, or cause objects to plummet down by adding gravity. Even moving giant meteors from space is no problem.";

  } else if (fruitList == 14) {
    outputFruit.innerHTML = "<b>Unfortunately, you did not get a Devil Fruit. You can try to roll again for one, if you want.</b>";
    fruitDescription.innerHTML = "";
  }

}
