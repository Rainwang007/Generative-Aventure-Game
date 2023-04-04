class Monster {
    constructor(name, hp, attackPointRange, goldDrop) {
      this.name = name;
      this.hp = hp;
      this.attackPointRange = attackPointRange;
      this.goldDrop = goldDrop;
      this.dialogue = '';
    }
    
    
    async generateDialogue() {
      try {
        const response = await fetch('/api/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: `A monster named ${this.name} says something` }),
        });
        const dialogue = await response.json();
        this.dialogue = dialogue.generated_text;
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
  }

  const talkButton = document.getElementById('talk-button');
const monsterDialogue = document.getElementById('monster-dialogue');

talkButton.addEventListener('click', async () => {
  const randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
  await randomMonster.generateDialogue();
  monsterDialogue.innerText = `${randomMonster.name}: ${randomMonster.dialogue}`;
});

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
  
//   class Weapon {
//     constructor(name, backgroundStory, attackPointRange) {
//       this.name = name;
//       this.backgroundStory = backgroundStory;
//       this.attackPointRange = attackPointRange;
//     }
//   }
  
  
//   // Store 12 different weapons with API generated data

//     const weapons = [
//       new Weapon("Fist", "Your own two hands.", [5, 8]),
//       new Weapon("Short Sword", "A simple but reliable weapon.", [10, 15]),
//       new Weapon("Long Sword", "A longer blade for more reach.", [15, 20]),
//       new Weapon("Mace", "A blunt weapon for crushing blows.", [12, 18]),
//       new Weapon("Axe", "A heavy weapon for chopping and hacking.", [18, 24]),
//       new Weapon("Bow", "A ranged weapon for attacking from a distance.", [8, 13]),
//       new Weapon("Crossbow", "A more powerful ranged weapon, but slower to reload.", [15, 20]),
//       new Weapon("Dagger", "A small blade for quick and precise attacks.", [5, 10]),
//       new Weapon("Spear", "A long polearm for thrusting attacks.", [12, 18]),
//       new Weapon("Warhammer", "A massive weapon for devastating blows.", [20, 25]),
//       new Weapon("Whip", "A flexible weapon for tripping and disarming opponents.", [7, 12]),
//       new Weapon("Staff", "A versatile weapon for blocking and striking.", [8, 15])
//     ];

//   class NPC {
//     constructor(name, monsterName, bountyValue) {
//       this.name = name;
//       this.monsterName = monsterName;
//       this.bountyValue = bountyValue;
//       this.dialogue = '';
//     }
  
//     async generateDialogue() {
//       const prompt = `Generate dialogue for an NPC named ${this.name} who is associated with a monster named ${this.monsterName}.`;
//       const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${openai.apiKey}`,
//         },
//         body: JSON.stringify({
//           prompt,
//           max_tokens: 1024,
//           n: 1,
//           stop: '\n',
//           temperature: 0.5,
//         }),
//       });
//       const result = await response.json();
//       const dialogue = result.choices[0].text.trim();
//       this.dialogue = dialogue;
//     }
  
//     // Rest of the NPC class implementation...
//   }
  
  
//   // Store 5 different NPCs with API generated data
//   const NPCs = [
//     new NPC("Elias", "Elias was once a brave adventurer like you, but was defeated by the fearsome dragon Gorgath. He offers a bounty for Gorgath's head.", 500),
//     new NPC("Cynthia", "Cynthia's village has been terrorized by the giant spider Arachne for too long. She seeks a hero to slay the beast and restore peace to her home.", 300),
//     new NPC("Thorn", "Thorn is a skilled thief and assassin who has been hired by a group of merchants to eliminate the bandit leader Rurik. He offers a share of the loot as a reward.", 800),
//     new NPC("Adira", "Adira is a powerful mage seeking rare and exotic ingredients for a potion that will grant her eternal youth. She offers a bounty for any that can bring her the necessary ingredients.", 1000),
//     new NPC("Drogath", "Drogath is an orc warlord who seeks to expand his territory. He offers a bounty for the heads of the leaders of neighboring kingdoms.", 1500)
//   ];
//   // Make API calls to generate the data for each NPC and populate the array

//   class Place {
//     constructor(description) {
//       this.description = description;
//       this.monster = null;
//       this.npc = null;
//       this.weapon = null;
//     }
//   }
  
//   const places = [
//     new Place("You find yourself in a dense forest, surrounded by towering trees and tangled underbrush."),
//     new Place("The path leads you to a narrow canyon, where sheer walls of stone loom high overhead."),
//     new Place("A rocky beach stretches out before you, with waves crashing against the shore and seabirds wheeling overhead."),
//     new Place("You step into a dark and musty cave, filled with strange sounds and shadows lurking in the corners."),
//     new Place("You come upon a grassy meadow, dotted with wildflowers and a babbling brook running through it."),
//     new Place("The trail winds through a desolate wasteland, with nothing but barren rock and sand stretching to the horizon."),
//     new Place("A narrow bridge spans a deep chasm, the rushing river below a dizzying sight."),
//     new Place("You reach the edge of a misty swamp, where murky water and twisted trees conceal unknown dangers."),
//     new Place("A sprawling ruin lies before you, the crumbling stones telling of ancient civilizations long gone."),
//     new Place("You climb a steep mountain trail, the air thin and cold and the view from the top breathtaking."),
//     new Place("The trail leads to a bustling city, full of people and noise and commerce."),
//     new Place("You reach a wide and shallow river, with a ford crossing and a host of obstacles in the water."),
//     new Place("A dense fog obscures everything around you, and the only sound is your own footsteps echoing eerily."),
//     new Place("The trail passes through a massive cavern, lit by glowing fungi and full of bizarre and wondrous creatures."),
//     new Place("You find yourself on a wide and open plain, with nothing but grass and sky in all directions."),
//     new Place("A narrow path leads into a dense and forbidding forest, where danger lurks around every corner."),
//     new Place("You reach the edge of a vast desert, with shimmering heat and dunes stretching out to infinity."),
//     new Place("The trail winds through a fertile valley, with orchards and fields and a slow-moving river."),
//     new Place("You step into a cool and tranquil grove, filled with shade and the sound of a gentle breeze."),
//     new Place("A series of ancient and overgrown ruins stretches out before you, hinting at secrets and treasures long forgotten."),
//     new Place("The trail leads to a bustling port, filled with ships and sailors and merchants from all over the world."),
//     new Place("You come upon a frozen wasteland, with snow and ice and frigid winds chilling you to the bone."),
//     new Place("A massive and forbidding fortress looms in the distance, promising danger and adventure."),
//     new Place("The trail leads to a sprawling and chaotic bazaar, where anything can be bought or sold."),
//     new Place("You find yourself in a dense and twisting labyrinth, where danger and treasure are both hidden around every corner."),
//     new Place("A peaceful and idyllic village lies before you, with smiling faces and the scent of baking bread."),
//     new Place("The trail winds through a narrow and winding canyon, with sheer cliffs and treacherous footing."),
//     new Place("You come upon a shallow and gentle river, with a verdant landscape and a warm and pleasant climate."),
//     new Place("A massive and ancient tree stands before you, its roots twisting and winding around the forest floor. It's said that the spirits of the forest dwell within its bark and branches."),
//     new Place("A winding river cuts through the landscape, its waters teeming with fish and other aquatic creatures. The sound of rushing water fills the air, and the surrounding flora seems to thrive on its life-giving properties."),
//     new Place("A towering mountain looms ahead, its snow-capped peak piercing the clouds above. The air grows colder as you approach, and the terrain becomes more treacherous."),
//     new Place("A vast desert stretches out before you, its endless sands shifting in the wind. The heat is oppressive, and you can see mirages shimmering on the horizon."),
//     new Place("A network of underground caves and tunnels sprawls out beneath your feet. The darkness is absolute, and strange noises echo through the caverns."),
//     new Place("An abandoned ruin lies before you, its crumbling walls and faded frescoes hinting at a once-great civilization. What secrets might still be hidden within its halls?"),
//     new Place("A bustling city teems with life around you, its streets packed with people from all walks of life. The air is thick with the scents of cooking food and burning fuel."),
//     new Place("A peaceful meadow stretches out before you, its grasses swaying gently in the breeze. The chirping of birds and buzzing of insects provides a soothing soundtrack."),
//     new Place("A dark and foreboding forest looms ahead, its gnarled trees and twisted vines forming an impenetrable barrier. What dangers might lurk within its depths?"),
//     new Place("A sparkling ocean stretches out before you, its waves crashing against the shore. The sun glints off the surface of the water, and a salty breeze blows in from the horizon."),
//     new Place("A mysterious island lies just offshore, shrouded in fog and mystery. What secrets might it hold, and what dangers might be lurking in its shadows?"),
//     new Place("A scorched wasteland stretches out before you, its blackened earth and twisted metal hinting at some great disaster. The air is thick with ash and the stench of burning."),
//     new Place("An icy tundra stretches out before you, its frozen landscape glittering in the sunlight. The bitter cold seeps into your bones, and you can hear the howling of distant wolves."),
//     new Place("A massive fortress looms ahead, its walls towering high above you. The air is tense with the anticipation of battle, and you can hear the clanking of armor and the shouting of orders."),
//     new Place("A vibrant jungle surrounds you, its lush vegetation teeming with life. The air is thick with the sounds of birds and insects, and you can see monkeys swinging through the trees."),
//     new Place("A grand palace rises up before you, its golden domes and soaring arches a testament to its opulence. What riches might lie within its walls?"),
//     new Place("A massive volcano towers above you, its rumbling belly a constant reminder of its power. The air is thick with ash and the stench of sulfur, and the ground trembles beneath your feet."),
//     new Place("A ruined castle stands before you, its walls crumbling and its once-grand halls now choked with weeds and rubble. What secrets might still be hidden within its chambers?"),
//     new Place("A vast expanse of rolling hills stretches out before you, their grasses waving gently in the wind. The sky above is wide and open, and you can feel the freedom of the open road."),
//     new Place("You stand at the entrance to a dark, ominous cave. Its mouth yawns wide, beckoning you inside."),
//     new Place("A shimmering, crystalline lake lies before you, its waters still and clear as glass. You can see fish swimming lazily beneath the surface, and birds flitting about in the trees that surround it."),
//     new Place("A dense and tangled thicket of bushes and brambles blocks your way. It looks like it would take some serious effort to push your way through."),
// ]

// class Player {
//     constructor(name) {
//       this.name = name;
//       this.hp = 1000;
//       this.gold = 0;
//       this.weapon = new Weapon("Fist", "Your own two hands.", [5, 8]);
//     }
  
//     // Rest of the Player class implementation...
//   }
  
 
      
// function startGame() {
//     // Clear any existing game data and set up the initial game state
//     clearGame();
//     const playerName = document.getElementById("player-name-input").value;
//     const player = new Player(playerName);
//     const statsBox = document.getElementById("stats-box");
//     statsBox.innerHTML = `
//       <div>Name: ${player.name}</div>
//       <div>HP: ${player.hp}</div>
//       <div>Weapon: ${player.weapon.name}</div>
//       <div>Gold: ${player.gold}</div>
//     `;
  
//     // Print the initial game message
//     printMessage(`
//       Deep forests, steep mountains, mysterious ruins... in this vast world, every corner hides countless treasures and dangers. For brave adventurers, these unknown territories are full of temptations and challenges.
  
//       Our protagonist, a young adventurer, is such a brave explorer. They have always dreamed of embarking on a grand adventure, exploring uncharted territories, and discovering treasures beyond their wildest dreams. And finally, the day has come for them to set out on their journey.
//     `);
  
//     // Show the list of available places for the player to visit
//     const placeButtonsContainer = document.getElementById("place-buttons-container");
//     placeButtonsContainer.innerHTML = "";
//     for (let i = 0; i < places.length; i++) {
//       const place = places[i];
//       const button = document.createElement("button");
//       button.classList.add("place-button");
//       button.innerText = place.description;
//       button.addEventListener("click", () => {
//         visitPlace(player, place);
//       });
//       placeButtonsContainer.appendChild(button);
//     }
//   }

  
