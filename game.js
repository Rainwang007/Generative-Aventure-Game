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
    constructor(name, backgroundStory, bountyGoldValue) {
      this.name = name;
      this.backgroundStory = backgroundStory;
      this.bountyGoldValue = bountyGoldValue;
    }
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
  