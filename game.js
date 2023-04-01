import openai from 'openai';

openai.apiKey = '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';


class Monster {
    constructor(name, hp, attackPointRange, goldDrop) {
      this.name = name;
      this.hp = hp;
      this.attackPointRange = attackPointRange;
      this.goldDrop = goldDrop;
      this.dialogue = '';
    }
    
    
    async generateDialogue() {
      const prompt = `Generate dialogue for a monster named ${this.name}.`;
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openai.apiKey}`,
        },
        body: JSON.stringify({
          prompt,
          max_tokens: 1024,
          n: 1,
          stop: '\n',
          temperature: 0.5,
        }),
      });
      const result = await response.json();
      const dialogue = result.choices[0].text.trim();
      this.dialogue = dialogue;
    }
  
    // Rest of the Monster class implementation...
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
  
  class Weapon {
    constructor(name, backgroundStory, attackPointRange) {
      this.name = name;
      this.backgroundStory = backgroundStory;
      this.attackPointRange = attackPointRange;
    }
  }
  
  
  // Store 12 different weapons with API generated data
  const weapons = [
    new Weapon('Fist', 'The basic weapon of every adventurer, relying on their own physical strength.', {min: 5, max: 8}),
    // Make API calls to generate data for the other 11 weapons and add them to the array
  ];

  class NPC {
    constructor(name, monsterName, bountyValue) {
      this.name = name;
      this.monsterName = monsterName;
      this.bountyValue = bountyValue;
      this.dialogue = '';
    }
  
    async generateDialogue() {
      const prompt = `Generate dialogue for an NPC named ${this.name} who is associated with a monster named ${this.monsterName}.`;
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openai.apiKey}`,
        },
        body: JSON.stringify({
          prompt,
          max_tokens: 1024,
          n: 1,
          stop: '\n',
          temperature: 0.5,
        }),
      });
      const result = await response.json();
      const dialogue = result.choices[0].text.trim();
      this.dialogue = dialogue;
    }
  
    // Rest of the NPC class implementation...
  }
  
  
  // Store 5 different NPCs with API generated data
  const npcs = [];
  // Make API calls to generate the data for each NPC and populate the array

  class Place {
    constructor(description, monster, npc, weapon) {
      this.description = description;
      this.monster = monster;
      this.npc = npc;
      this.weapon = weapon;
    }
  }
  
  // Store 55 different places with API generated data
  const places = [];
  // Make API calls to generate the data for each place and populate the array
  