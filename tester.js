class Place {
    constructor(description) {
      this.description = description;
      this.monster = null;
      this.npc = null;
      this.weapon = null;
    }
  }
  
  
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
]


console.log(places.length)