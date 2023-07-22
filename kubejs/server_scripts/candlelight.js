ServerEvents.recipes(event => {
	
	console.log('Hi! I'm a recipes downloader!')


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