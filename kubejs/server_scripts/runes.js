ServerEvents.recipes(event => {


	event.remove({output: 'runes:crafting_altar'})
	event.shaped(
	  Item.of('runes:crafting_altar'), 
	  [
	    'GRG',
		' A ',
		'AAA'
	  ], 
	  {
		G: 'minecraft:gold_ingot',
		R: 'minecraft:red_carpet',
		A: 'minecraft:polished_andesite'
	  }
	)
	
	
})