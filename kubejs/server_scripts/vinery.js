ServerEvents.recipes(event => {


	event.remove({output: 'vinery:wine_bottle'})
	event.shaped(
	  Item.of('vinery:wine_bottle'), 
	  [
	    ' B ',
		' B ',
		' B '
	  ], 
	  {
		B: 'minecraft:glass_bottle'
	  }
	)
	
	
})