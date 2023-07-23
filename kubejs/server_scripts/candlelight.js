ServerEvents.recipes(event => {


	event.remove({output: 'candlelight:cooking_pan'})
	event.shaped(
	  Item.of('candlelight:cooking_pan'), 
	  [
	    ' CC',
		' CC',
		'S  '
	  ], 
	  {
		S: 'minecraft:stick',
		C: 'minecraft:copper_ingot'
	  }
	)
	
	
})