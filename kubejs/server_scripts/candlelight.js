onEvent('recipes', event => {
	
	
	event.remove({output: 'candlelight:cooking_pan'})
	event.shaped('candlelight:cooking_pan', [
		' CC',
		' CC',
		'S  '
	], {
		S: 'minecraft:stick', C: 'minecraft:copper_ingot'
	})
	
	
})