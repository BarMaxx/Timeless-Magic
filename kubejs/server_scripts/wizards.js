ServerEvents.recipes(event => {


	event.remove({output: 'wizards:wand_novice'})
	event.shaped(
	  Item.of('wizards:wand_novice'), 
	  [
	    '  C',
		' I ',
		'S  '
	  ], 
	  {
		I: 'minecraft:iron_ingot',
		S: '#forge:rods/wooden',
		C: '#minecraft:coals'
	  }
	)
	
	
})