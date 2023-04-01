# Rainwang007.github.io
GA Project 1

I have made this API key: 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
I plan to make a text adventure game titled <Generative Adventure> empowered by GPT. 
I am working with index.html, game.js, styles.css
Link them and the API together. 


As the framework, create monster classes, and store 50 different types of monsters. Each with attributes of name, HP, attack point range, gold drop when defeat. Make use of the API to link monster to GPT, and speak a line of words when they interact with player.
Create weapon classes, and store 12 different weapons.Each with attributes of name,background story description , attack point range. Include "Fist" in the class, with attack point range 5 to 8. 
Create 5 NPCs, each with attributes of name, background story that links to a previously stored monster, and a bounty gold value to give to player, if the player has defeat the monster or defeat the monster subsequently. Make use of the API to link NPC to GPT and respond to player's input, but must mention their story and a task to defeat the monster with bounty.
Create 55 places, inaccordance to each monster and NPC, with attribute of a 描述性 description but not mentioning the monster or NPC. Place the monsters and the NPCs at each place where reasonable. Place weapons in random places. Player will obtain the weapon when they enter and exit the place. Make use of the GPT API to generate a reasonable text on how player obtained the weapon.

The page is deployed at https://rainwang007.github.io/
Make the page have a large fancy font <Generative Adventure> at top.
The in-game text should apear in the style of letter by letter, as if someone is typing them, but very fast.
Initial text to display: "Deep forests, steep mountains, mysterious ruins... in this vast world, every corner hides countless treasures and dangers. For brave adventurers, these unknown territories are full of temptations and challenges.

Our protagonist, a young adventurer, is such a brave explorer. They have always dreamed of embarking on a grand adventure, exploring uncharted territories, and discovering treasures beyond their wildest dreams. And finally, the day has come for them to set out on their journey."

Below the text, put a box "Enter your name", for player name input. Input to complete with pressing enter or a "Confirm" button beside the box.  Save the name，and make a stats box appear at bottom left corner of the window. Stats box with player name on top, then HP: 1000; then Weapon: Fist; then Gold: 0.  When mouse hover on the weapon, the background story description should appear.

Clear the previous text, print 5 big button box, each direct to a stored place, and the box display the 描述性 description. Player will enter the place by clicking the button.  Player will exit the place by defeating the monster inside, or click "exit" button if it's a NPC place. 

In a monster place, monster will speak a generative line, and player and monster will take turns to attack each other till one's HP become 0 or below. Use GPT API to describe how they attack each other in each turn. If player's HP become 0 or below, print Game Over and reset the page. If monster 's HP become 0 or below,player obtain the gold value, and bounty value if he has met NPC, and exit.
In a NPC's place, NPC will greet the player, and player will have a type box to interact with NPC. And there will be an exit botton. Enable player to use gold to restore HP with NPC, exchange rate should be random. 

Once player exit a place, if there is a weapon, display the new weapon and the existing weapon information in 2 boxes, player should click to choose one.
Then clear previous messages, and print next set of 5 place buttons. Once player exit 11 places, print "Your adventure has been successful!"
And put a "Restart" button, which on click will refresh the page. 

