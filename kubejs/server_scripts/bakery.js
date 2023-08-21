ServerEvents.recipes(event => {


	event.remove({output: 'bakery:small_cooking_pot'})
	event.shaped(
	  Item.of('bakery:small_cooking_pot'), 
	  [
	    '  S',
		'II ',
		'II '
	  ], 
	  {
		S: 'minecraft:stick',
		I: 'minecraft:iron_ingot'
	  }
	)
	
	
})