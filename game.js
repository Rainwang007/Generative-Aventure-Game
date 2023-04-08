class Player {
  constructor(name) {
    this.name = name;
    this.hp = 1000;
    this.gold = 0;
    this.weapon = new Weapon("Fist", "Your own two hands.", [5, 8]);
    this.inventory = [new Weapon("Fist", "Your own two hands.", [5, 8])]; //
  }

  // Rest of the Player class implementation...
}
let player;
class Place {
  constructor(description) {
    this.description = description;
    this.monster = null;
    this.npc = null;
    this.weapon = null;
  }
}

class Weapon {
  constructor(name, backgroundStory, attackPointRange) {
    this.name = name;
    this.backgroundStory = backgroundStory;
    this.attackPointRange = attackPointRange;
  }
}

class Monster {
    constructor(name, hp, attackPointRange, goldDrop) {
      this.name = name;
      this.hp = hp;
      this.attackPointRange = attackPointRange;
      this.goldDrop = goldDrop;
      this.dialogue = '';
    }
    
    
    // async generateDialogue() {
    //   try {
    //     const response = await fetch('/api/openai', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ monsterName: this.name }),
    //     });
    //     const dialogue = await response.text();
    //     this.dialogue = dialogue;
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // }
    
  }

//   const talkButton = document.getElementById('talk-button');
// const monsterDialogue = document.getElementById('monster-dialogue');

// talkButton.addEventListener('click', async () => {
//   const randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
//   await randomMonster.generateDialogue();
//   monsterDialogue.innerText = `${randomMonster.name}: ${randomMonster.dialogue}`;
// });

class NPC {
  constructor(name, monster, bountyValue) {
    this.name = name;
    this.monster = monster;
    this.bountyValue = bountyValue;
    this.dialogue = '';
  }

  // Rest of the NPC class implementation...



  // async generateDialogue() {
  //   try {
  //     const response = await fetch('/api/openai-npc', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ npcName: this.name, monsterName: this.monsterName }),
  //     });
  //     const dialogue = await response.text();
  //     this.dialogue = dialogue;
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  // Rest of the NPC class implementation...
}

  const monsters = [
    new Monster("Arktikus", 53, [13, 21], 37),
    new Monster("Brimstone", 89, [7, 19], 18),
    new Monster("Cataclysm", 61, [4, 14], 31),
    new Monster("Deimos", 76, [9, 19], 27),
    new Monster("Echidna", 42, [11, 23], 42),
    new Monster("Fafnir", 94, [5, 15], 10),
    new Monster("Gorgon", 71, [10, 20], 25),
    new Monster("Hydra", 57, [12, 22], 38),
    new Monster("Ifrit", 81, [6, 16], 17),
    new Monster("Jotunn", 63, [3, 13], 29),
    new Monster("Kraken", 98, [8, 18], 13),
    new Monster("Leviathan", 67, [15, 25], 34),
    new Monster("Manticore", 49, [12, 22], 43),
    new Monster("Nemean", 88, [7, 17], 20),
    new Monster("Ogre", 72, [10, 20], 26),
    new Monster("Phoenix", 59, [14, 24], 39),
    new Monster("Quetzalcoatl", 84, [6, 16], 16),
    new Monster("Roc", 65, [11, 21], 32),
    new Monster("Sphinx", 44, [9, 19], 46),
    new Monster("Thunderbird", 91, [5, 15], 11),
    new Monster("Unicorn", 73, [8, 18], 24),
    new Monster("Vampire", 58, [14, 24], 40),
    new Monster("Wyvern", 83, [6, 16], 18),
    new Monster("Xorn", 66, [11, 21], 33),
    new Monster("Yeti", 47, [10, 20], 44),
    new Monster("Zombie", 90, [5, 15], 12),
    new Monster("Aboleth", 70, [8, 18], 28),
    new Monster("Behemoth", 56, [12, 22], 36),
    new Monster("Cerberus", 82, [6, 16], 19),
    new Monster("Dragon", 64, [13, 23], 30),
    new Monster("Efreeti", 45, [9, 19], 45),
    new Monster("Frost Giant", 92, [4, 14], 9),
    new Monster("Gargoyle", 74, [10, 20], 23),
    new Monster("Harpy", 60, [12, 22], 35),
    new Monster("Invisible Stalker", 87, [7, 17], 21),
    new Monster("Jinn", 68, [9, 19], 30),
    new Monster("Kobold", 93, [5, 15], 8),
    new Monster("Lich", 55, [13, 23], 41),
    new Monster("Minotaur", 80, [7, 17], 22),
    new Monster("Naga", 62, [11, 21], 33),
    new Monster("Orc", 97, [3, 13], 14),
    new Monster("Pegasus", 77, [8, 18], 26),
    new Monster("Quaggoth", 51, [14, 24], 37),
    new Monster("Rakshasa", 86, [6, 16], 15),
    new Monster("Salamander", 69, [10, 20], 29),
    new Monster("Troll", 48, [12, 22], 43),
    new Monster("Umber Hulk", 85, [7, 17], 19),
    new Monster("Vargouille", 75, [10, 20], 24),
    new Monster("Wraith", 54, [13, 23], 40),
    new Monster("Xorn", 79, [8, 18], 27),
    new Monster("Yeti", 50, [11, 21], 38),
    new Monster("Zombie", 95, [4, 14], 12)
    ];
  
    const weapons = [
      new Weapon("Fist", "Your own two hands.", [5, 8]),
      new Weapon("Short Sword", "A simple but reliable weapon.", [10, 15]),
      new Weapon("Long Sword", "A longer blade for more reach.", [15, 20]),
      new Weapon("Mace", "A blunt weapon for crushing blows.", [12, 18]),
      new Weapon("Axe", "A heavy weapon for chopping and hacking.", [18, 24]),
      new Weapon("Bow", "A ranged weapon for attacking from a distance.", [8, 13]),
      new Weapon("Crossbow", "A more powerful ranged weapon, but slower to reload.", [15, 20]),
      new Weapon("Dagger", "A small blade for quick and precise attacks.", [5, 10]),
      new Weapon("Spear", "A long polearm for thrusting attacks.", [12, 18]),
      new Weapon("Warhammer", "A massive weapon for devastating blows.", [20, 25]),
      new Weapon("Whip", "A flexible weapon for tripping and disarming opponents.", [7, 12]),
      new Weapon("Staff", "A versatile weapon for blocking and striking.", [8, 15])
    ];

  
 
  function getRandomMonster() {
    return monsters[Math.floor(Math.random() * monsters.length)];
  }
   
  // Store 5 different NPCs with API generated data
  const NPCs = [
    new NPC("Elias", getRandomMonster(), 500),
    new NPC("Cynthia", getRandomMonster(), 300),
    new NPC("Thorn", getRandomMonster(), 800),
    new NPC("Adira", getRandomMonster(), 1000),
    new NPC("Drogath", getRandomMonster(), 1500)
  ];
  


  
  const places = [
    new Place("You find yourself in a dense forest, surrounded by towering trees and tangled underbrush."),
    new Place("The path leads you to a narrow canyon, where sheer walls of stone loom high overhead."),
    new Place("A rocky beach stretches out before you, with waves crashing against the shore and seabirds wheeling overhead."),
    new Place("You step into a dark and musty cave, filled with strange sounds and shadows lurking in the corners."),
    new Place("You come upon a grassy meadow, dotted with wildflowers and a babbling brook running through it."),
    new Place("The trail winds through a desolate wasteland, with nothing but barren rock and sand stretching to the horizon."),
    new Place("A narrow bridge spans a deep chasm, the rushing river below a dizzying sight."),
    new Place("You reach the edge of a misty swamp, where murky water and twisted trees conceal unknown dangers."),
    new Place("A sprawling ruin lies before you, the crumbling stones telling of ancient civilizations long gone."),
    new Place("You climb a steep mountain trail, the air thin and cold and the view from the top breathtaking."),
    new Place("The trail leads to a bustling city, full of people and noise and commerce."),
    new Place("You reach a wide and shallow river, with a ford crossing and a host of obstacles in the water."),
    new Place("A dense fog obscures everything around you, and the only sound is your own footsteps echoing eerily."),
    new Place("The trail passes through a massive cavern, lit by glowing fungi and full of bizarre and wondrous creatures."),
    new Place("You find yourself on a wide and open plain, with nothing but grass and sky in all directions."),
    new Place("A narrow path leads into a dense and forbidding forest, where danger lurks around every corner."),
    new Place("You reach the edge of a vast desert, with shimmering heat and dunes stretching out to infinity."),
    new Place("The trail winds through a fertile valley, with orchards and fields and a slow-moving river."),
    new Place("You step into a cool and tranquil grove, filled with shade and the sound of a gentle breeze."),
    new Place("A series of ancient and overgrown ruins stretches out before you, hinting at secrets and treasures long forgotten."),
    new Place("The trail leads to a bustling port, filled with ships and sailors and merchants from all over the world."),
    new Place("You come upon a frozen wasteland, with snow and ice and frigid winds chilling you to the bone."),
    new Place("A massive and forbidding fortress looms in the distance, promising danger and adventure."),
    new Place("The trail leads to a sprawling and chaotic bazaar, where anything can be bought or sold."),
    new Place("You find yourself in a dense and twisting labyrinth, where danger and treasure are both hidden around every corner."),
    new Place("A peaceful and idyllic village lies before you, with smiling faces and the scent of baking bread."),
    new Place("The trail winds through a narrow and winding canyon, with sheer cliffs and treacherous footing."),
    new Place("You come upon a shallow and gentle river, with a verdant landscape and a warm and pleasant climate."),
    new Place("A massive and ancient tree stands before you, its roots twisting and winding around the forest floor. It's said that the spirits of the forest dwell within its bark and branches."),
    new Place("A winding river cuts through the landscape, its waters teeming with fish and other aquatic creatures. The sound of rushing water fills the air, and the surrounding flora seems to thrive on its life-giving properties."),
    new Place("A towering mountain looms ahead, its snow-capped peak piercing the clouds above. The air grows colder as you approach, and the terrain becomes more treacherous."),
    new Place("A vast desert stretches out before you, its endless sands shifting in the wind. The heat is oppressive, and you can see mirages shimmering on the horizon."),
    new Place("A network of underground caves and tunnels sprawls out beneath your feet. The darkness is absolute, and strange noises echo through the caverns."),
    new Place("An abandoned ruin lies before you, its crumbling walls and faded frescoes hinting at a once-great civilization. What secrets might still be hidden within its halls?"),
    new Place("A bustling city teems with life around you, its streets packed with people from all walks of life. The air is thick with the scents of cooking food and burning fuel."),
    new Place("A peaceful meadow stretches out before you, its grasses swaying gently in the breeze. The chirping of birds and buzzing of insects provides a soothing soundtrack."),
    new Place("A dark and foreboding forest looms ahead, its gnarled trees and twisted vines forming an impenetrable barrier. What dangers might lurk within its depths?"),
    new Place("A sparkling ocean stretches out before you, its waves crashing against the shore. The sun glints off the surface of the water, and a salty breeze blows in from the horizon."),
    new Place("A mysterious island lies just offshore, shrouded in fog and mystery. What secrets might it hold, and what dangers might be lurking in its shadows?"),
    new Place("A scorched wasteland stretches out before you, its blackened earth and twisted metal hinting at some great disaster. The air is thick with ash and the stench of burning."),
    new Place("An icy tundra stretches out before you, its frozen landscape glittering in the sunlight. The bitter cold seeps into your bones, and you can hear the howling of distant wolves."),
    new Place("A massive fortress looms ahead, its walls towering high above you. The air is tense with the anticipation of battle, and you can hear the clanking of armor and the shouting of orders."),
    new Place("A vibrant jungle surrounds you, its lush vegetation teeming with life. The air is thick with the sounds of birds and insects, and you can see monkeys swinging through the trees."),
    new Place("A grand palace rises up before you, its golden domes and soaring arches a testament to its opulence. What riches might lie within its walls?"),
    new Place("A massive volcano towers above you, its rumbling belly a constant reminder of its power. The air is thick with ash and the stench of sulfur, and the ground trembles beneath your feet."),
    new Place("A ruined castle stands before you, its walls crumbling and its once-grand halls now choked with weeds and rubble. What secrets might still be hidden within its chambers?"),
    new Place("A vast expanse of rolling hills stretches out before you, their grasses waving gently in the wind. The sky above is wide and open, and you can feel the freedom of the open road."),
    new Place("You stand at the entrance to a dark, ominous cave. Its mouth yawns wide, beckoning you inside."),
    new Place("A shimmering, crystalline lake lies before you, its waters still and clear as glass. You can see fish swimming lazily beneath the surface, and birds flitting about in the trees that surround it."),
    new Place("A dense and tangled thicket of bushes and brambles blocks your way. It looks like it would take some serious effort to push your way through."),
    new Place("You find yourself at the edge of a tranquil marsh, with towering cattails swaying gently in the breeze and the croaking of frogs echoing through the air."),
    new Place("You reach a mysterious circle of ancient standing stones, their weathered surfaces etched with runes and symbols. The atmosphere is heavy with the weight of ages."),
    new Place("A lush oasis appears before you, nestled within the barren desert landscape. The shade of palm trees and the sound of a trickling spring provide a welcome respite."),
    new Place("You enter an eerily quiet ghost town, with boarded-up buildings and empty streets. The wind whistles through the abandoned structures, and you wonder what happened here."),
    new Place("A massive, intricately carved temple looms before you, shrouded in vines and moss. The air is thick with the scent of incense, and you can hear the distant sound of chanting."),
  ];



let remainingPlaces = [...places]; // Create a copy of the places array

function generatePlacesButtons() {
  const placeButtonsContainer = document.getElementById("place-buttons-container");
  placeButtonsContainer.innerHTML = "";

  // Check if there are not enough places left
  if (remainingPlaces.length < 5) {
    win(); // Call the win() function
    return; // Exit the function early
  }

  const uniquePlaces = [];

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * remainingPlaces.length);
    uniquePlaces.push(remainingPlaces[randomIndex]);
    remainingPlaces.splice(randomIndex, 1); // Remove the selected place from the remaining places
  }

  uniquePlaces.forEach((place) => {
    const button = document.createElement("button");
    button.classList.add("place-button");
    button.innerText = place.description;
    button.addEventListener("click", () => {
      visitPlace(place);
    });
    placeButtonsContainer.appendChild(button);
  });
}


// Place visits



function startGame() {
  // Clear initial-text and input box
  const initialText = document.getElementById("initial-text");
  initialText.innerHTML = "";
  const playerNameInput = document.getElementById("player-name-input");

  // Create a new player and update the stats box
  const playerName = playerNameInput.value;
  player = new Player(playerName); // Assign the player variable
    const statsBox = document.getElementById("stats-box");
    statsBox.innerHTML = `
  <div>Name: ${player.name}</div>
  <div id="player-hp">HP: ${player.hp}</div>
  <div>
    <button id="weapons-button">Weapons</button>
    <span>: <span id="player-weapon">${player.weapon.name}</span></span>
  </div>
  <div id="player-gold">Gold: ${player.gold}</div>
`;

  statsBox.classList.remove("hidden");
  const weaponsBox = document.createElement("div");
  weaponsBox.id = "weapons-box";
  weaponsBox.classList.add("hidden");
  statsBox.appendChild(weaponsBox);
  

  // a function to update the weapons box content:
  const weaponsButton = document.getElementById("weapons-button");
  weaponsButton.addEventListener("click", () => {
    const weaponsBox = document.getElementById("weapons-box");
    weaponsBox.classList.toggle("hidden");
  });
  
  

  // Add hover event listener for displaying the weapon description
  const playerWeapon = document.getElementById("player-weapon");
  playerWeapon.addEventListener("mouseover", () => {
    playerWeapon.setAttribute("title", player.weapon.backgroundStory);
  });

  // Hide the start-game-container
  const startGameContainer = document.getElementById("start-game-container");
  startGameContainer.classList.add("hidden");

  // Clear the player name input value
 playerNameInput.value = "";

   // Show the Start Journey button
   const startJourneyContainer = document.getElementById("start-journey-container");
   startJourneyContainer.classList.remove("hidden");
}
// Start game
  
function visitPlace(place) {
  // Clear out the place visit boxes
  const placeButtonsContainer = document.getElementById("place-buttons-container");
  placeButtonsContainer.innerHTML = "";

  // Display the place description and the name of the stored NPC or monster
  const entity = place.monster ? place.monster : place.npc;
  const entityType = place.monster ? "monster" : "NPC";
  const placeDescription = document.createElement("p");
  placeDescription.innerText = `${place.description} Here you meet ${entityType}: ${entity.name}`;
  placeButtonsContainer.appendChild(placeDescription);
  if (entityType === "monster") {
    meetMonster(place);
  } else {
    // If the entityType is an NPC, call meetNPC function
    meetNPC(place);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const startGameButton = document.getElementById("start-game-button");
  startGameButton.addEventListener("click", startGame);
});
// Click start game
// Add an event listener to the Start Journey button
const startJourneyButton = document.getElementById("start-journey-button");
startJourneyButton.addEventListener("click", () => {
  // Hide the Start Journey button
  const startJourneyContainer = document.getElementById("start-journey-container");
  startJourneyContainer.classList.add("hidden");

  // Generate place buttons
  generatePlacesButtons();
});

function distributeEntities() {
  // Create a temporary array containing indices of all places
  const availablePlaces = Array.from({ length: places.length }, (_, i) => i);

  // Shuffle the available places array
  availablePlaces.sort(() => Math.random() - 0.5);

  // Assign each monster to a place
  monsters.forEach((monster, index) => {
    const placeIndex = availablePlaces[index];
    if (places[placeIndex]) {
      places[placeIndex].monster = monster;
    }
  });

  // Assign each NPC to a place
  NPCs.forEach((npc, index) => {
    const placeIndex = availablePlaces[index + monsters.length];
    if (places[placeIndex]) {
      places[placeIndex].npc = npc;
    }
  });

  // Assign each weapon to a place
  weapons.forEach((weapon) => {
    const randomPlaceIndex = Math.floor(Math.random() * places.length);
    if (places[randomPlaceIndex].weapon) {
      // If the place already has a weapon, find another place
      for (const place of places) {
        if (!place.weapon) {
          place.weapon = weapon;
          break;
        }
      }
    } else {
      places[randomPlaceIndex].weapon = weapon;
    }
  });

  places.sort(() => Math.random() - 0.5);
  // shuffle places
}


// Call the distributeEntities function after defining the arrays
distributeEntities();

function meetNPC(place) {
  const placeButtonsContainer = document.getElementById("place-buttons-container");

  // Clear all existing contents, but the stats box and the title
  placeButtonsContainer.innerHTML = "";

  // Display the place description and the NPC's name
  const placeDescription = document.createElement("p");
  placeDescription.innerText = `${place.description} Here you meet a person, ${place.npc.name}.`;
  placeButtonsContainer.appendChild(placeDescription);

  // Display the NPC's dialogue
  const npcDialogue = document.createElement("p");
  npcDialogue.innerText = `NPC Dialogue: ${place.npc.dialogue}`;
  placeButtonsContainer.appendChild(npcDialogue);

  // Display the input box and "Chat" button
  const chatInput = document.createElement("input");
  chatInput.type = "text";
  chatInput.placeholder = "Type your message here...";
  placeButtonsContainer.appendChild(chatInput);

  const chatButton = document.createElement("button");
  chatButton.innerText = "Chat";
  chatButton.addEventListener("click", () => {
    // Add the logic for chatting with the NPC here
  });
  placeButtonsContainer.appendChild(chatButton);

   // Add a "Pay to heal" button
   const healButton = document.createElement("button");
   healButton.innerText = "Pay to heal";
   healButton.addEventListener("click", () => {
     heal();
   });
   placeButtonsContainer.appendChild(healButton);
 
  // Display the "Leave" button
  const leaveButton = document.createElement("button");
  leaveButton.innerText = "Leave";
  leaveButton.addEventListener("click", () => {
    generatePlacesButtons()

  });
  placeButtonsContainer.appendChild(leaveButton);
}


function heal() {
  const goldDiv = document.querySelector("#stats-box div:nth-child(4)");
  const currentGold = parseInt(goldDiv.innerText.match(/\d+/)[0]);
  const exchangeRate = Math.random() * (2 - 0.5) + 0.5;

  const hpDiv = document.getElementById("player-hp");
  const currentHp = parseInt(hpDiv.innerText.match(/\d+/)[0]);
  const healedHp = Math.floor(currentGold * exchangeRate);

  // Update HP in the stats box
  player.hp=currentHp + healedHp;
  hpDiv.innerText = `HP: ${currentHp + healedHp}`;

  // Set the Gold value in the player object and the stats box to 0
  player.gold = 0;
  goldDiv.innerText = "Gold: 0";
}


function meetMonster(place) {
  const placeButtonsContainer = document.getElementById("place-buttons-container");

  // Display the monster's dialogue and HP
  const monsterDialogue = document.createElement("p");
  monsterDialogue.innerText = `Monster Dialogue: ${place.monster.dialogue}`;
  placeButtonsContainer.appendChild(monsterDialogue);

  const monsterHP = document.createElement("p");
  monsterHP.innerText = `Monster HP: ${place.monster.hp}`;
  placeButtonsContainer.appendChild(monsterHP);

  // Display the "Attack" button
  const attackButton = document.createElement("button");
  attackButton.innerText = "Attack";
  attackButton.addEventListener("click", () => {
    attackButton.remove(); 
    fight(player, place);
  });
  placeButtonsContainer.appendChild(attackButton);

  // Create the fight info container
  const fightInfoContainer = document.createElement("div");
  fightInfoContainer.setAttribute("id", "fight-info-container");
  placeButtonsContainer.appendChild(fightInfoContainer);



async function fight(player, place) {
  let attacker = player;
  let defender = place.monster;

  while (player.hp > 0 && place.monster.hp > 0) {
    const attackPointsRange = attacker === player ? attacker.weapon.attackPointRange : attacker.attackPointRange;
const minAttackPoints = attackPointsRange[0];
const maxAttackPoints = attackPointsRange[1];
const attackPoints = Math.floor(Math.random() * (maxAttackPoints - minAttackPoints + 1) + minAttackPoints);
defender.hp -= attackPoints;

    // Display damage dealt and remaining HP
    const damageInfo = `${attacker === player ? "Player" : "Monster"} dealt ${attackPoints} damage.`;
    const remainingHP = attacker === player ? `Player's remaining HP: ${player.hp}` : "";
    const fightInfoText = document.createTextNode(damageInfo + " " + remainingHP);
    fightInfoContainer.appendChild(fightInfoText);
    fightInfoContainer.appendChild(document.createElement("br"));

    // Swap attacker and defender
    [attacker, defender] = [defender, attacker];

    // Add a delay between each turn
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  // Display the fight outcome
  if (player.hp <= 0) {
    fightInfoContainer.appendChild(document.createTextNode("Player has been defeated."));
    gameOver(); // Call the gameOver() function
    return;
  } else {
    fightInfoContainer.appendChild(document.createTextNode("Monster has been defeated."));
    monsterPlaceClear(place); // Call the monsterPlaceClear() function
  }

  // Update player's remaining HP in the stats box
  const playerHP = document.getElementById("player-hp");
  playerHP.innerText = player.hp;
}
}


function gameOver() {
  // Clear everything on the page
  document.body.innerHTML = "";

  // Display "GAME OVER"
  const gameOverText = document.createElement("h1");
  gameOverText.innerText = "GAME OVER";
  document.body.appendChild(gameOverText);

  // Create and display the "Restart" button
  const restartButton = document.createElement("button");
  restartButton.innerText = "Restart";
  restartButton.addEventListener("click", () => {
    location.reload(); // Reset everything by reloading the page
  });
  document.body.appendChild(restartButton);
}

function monsterPlaceClear(place) {
  // Add the monster's goldDrop to the player's gold
  player.gold += place.monster.goldDrop;

  // Update the Gold in the stats box
  const goldDiv = document.querySelector("#stats-box div:nth-child(4)");
  goldDiv.innerText = `Gold: ${player.gold}`;

  // Check if the place has a weapon
  if (place.weapon) {
    player.inventory.push(place.weapon); // Add this line

    // Update the weapons box content
    updateWeaponsBox();
     // Show the message box with the weapon's name
  showMessage(`You have obtained ${place.weapon.name}!`);
  }

  function updateWeaponsBox() {
    const weaponsBox = document.getElementById("weapons-box");
    weaponsBox.innerHTML = "";
    
    player.inventory.forEach((weapon, index) => {
      const weaponButton = document.createElement("button");
      weaponButton.innerText = weapon.name;
      weaponButton.addEventListener("click", () => {
        switchWeapon(player, weapon);
      });
      weaponsBox.appendChild(weaponButton);
    });
  }
  
  // Create an "Adventure Continues" button
  const adventureContinuesButton = document.createElement("button");
  adventureContinuesButton.innerText = "Adventure Continues";
  adventureContinuesButton.classList.add("adventure-continues-button");

  // Add an event listener to the button
  adventureContinuesButton.addEventListener("click", () => {
    generatePlacesButtons();
  });

  // Append the button to the place-buttons-container
  const placeButtonsContainer = document.getElementById("place-buttons-container");
  placeButtonsContainer.appendChild(adventureContinuesButton);

  const meetNPCButton = document.createElement("button");
  meetNPCButton.innerText = "Meet NPC";
  meetNPCButton.classList.add("meet-npc-button");

  // Add an event listener to the button
  meetNPCButton.addEventListener("click", () => {
     // Find an NPC place from the remaining places
  const npcPlaceIndex = remainingPlaces.findIndex(place => place.npc !== null);

  if (npcPlaceIndex !== -1) {
    const npcPlace = remainingPlaces[npcPlaceIndex];
    meetNPC(npcPlace);

    // Remove the visited NPC place from the remaining places
    remainingPlaces.splice(npcPlaceIndex, 1);
  } else {
    // Show the message when there are no more NPC places
    showMessage("There is no other people can help you");
  }
});

  // Append the button to the place-buttons-container
 
  placeButtonsContainer.appendChild(meetNPCButton);

  // Check if there are no more remaining places
  if (remainingPlaces.length === 0) {
    win();
  }
}

function win() {
  const placeButtonsContainer = document.getElementById("place-buttons-container");
  placeButtonsContainer.innerHTML = "";

  // Display big text "YOU WIN!"
  const winText = document.createElement("h1");
  winText.innerText = "YOU WIN!";
  placeButtonsContainer.appendChild(winText);

  // Create and display the "Restart" button
  const restartButton = document.createElement("button");
  restartButton.innerText = "Restart";
  restartButton.addEventListener("click", () => {
    location.reload(); // Reset everything by reloading the page
  });
  placeButtonsContainer.appendChild(restartButton);

}


function switchWeapon(player, newWeapon) {
  // Update the player's weapon
  player.weapon = newWeapon;

  // Update the Weapon in the stats box
  const playerWeapon = document.getElementById("player-weapon");
  playerWeapon.innerText = newWeapon.name;
  playerWeapon.setAttribute("title", newWeapon.backgroundStory);

  // Hide the weapons box
  const weaponsBox = document.getElementById("weapons-box");
  weaponsBox.classList.toggle("hidden"); // Add this line
}

function showMessage(message) {
  const messageBox = document.createElement("div");
  messageBox.setAttribute("id", "message-box");
  messageBox.classList.add("message-box");

  const messageText = document.createElement("p");
  messageText.innerText = message;
  messageBox.appendChild(messageText);

  const closeButton = document.createElement("button");
  closeButton.innerText = "Great";
  closeButton.addEventListener("click", () => {
    messageBox.remove();
  });
  messageBox.appendChild(closeButton);

  document.body.appendChild(messageBox);
}
