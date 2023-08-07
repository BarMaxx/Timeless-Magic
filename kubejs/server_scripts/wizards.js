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
	
	
	event.remove({output: 'wizards:fire_robe_head'})
	event.shaped(
	  Item.of('wizards:fire_robe_head'), 
	  [
	    '  R',
		'BRB',
		'RFR'
	  ], 
	  {
		R: 'minecraft:red_wool',
		F: 'runes:fire_stone',
		B: 'minecraft:blaze_powder'
	  }
	)
	
	
	event.remove({output: 'wizards:fire_robe_chest'})
	event.shaped(
	  Item.of('wizards:fire_robe_chest'), 
	  [
	    'B B',
		'RFR',
		'RRR'
	  ], 
	  {
		R: 'minecraft:red_wool',
		F: 'runes:fire_stone',
		B: 'minecraft:blaze_powder'
	  }
	)
	
	
	event.remove({output: 'wizards:fire_robe_legs'})
	event.shaped(
	  Item.of('wizards:fire_robe_legs'), 
	  [
	    'BFB',
		'R R',
		'R R'
	  ], 
	  {
		R: 'minecraft:red_wool',
		F: 'runes:fire_stone',
		B: 'minecraft:blaze_powder'
	  }
	)
	
	
	event.remove({output: 'wizards:fire_robe_feet'})
	event.shaped(
	  Item.of('wizards:fire_robe_feet'), 
	  [
	    'BFB',
		'R R',
		'   '
	  ], 
	  {
		R: 'minecraft:red_wool',
		F: 'runes:fire_stone',
		B: 'minecraft:blaze_powder'
	  }
	)
	
	
	event.remove({output: 'wizards:arcane_robe_head'})
	event.shaped(
	  Item.of('wizards:arcane_robe_head'), 
	  [
	    '  P',
		'EPE',
		'PAP'
	  ], 
	  {
		P: 'minecraft:purple_wool',
		A: 'runes:arcane_stone',
		E: 'minecraft:ender_pearl'
	  }
	)
	
	
	event.remove({output: 'wizards:arcane_robe_chest'})
	event.shaped(
	  Item.of('wizards:arcane_robe_chest'), 
	  [
	    'E E',
		'PAP',
		'PPP'
	  ], 
	  {
		P: 'minecraft:purple_wool',
		A: 'runes:arcane_stone',
		E: 'minecraft:ender_pearl'
	  }
	)
	
	
	event.remove({output: 'wizards:arcane_robe_legs'})
	event.shaped(
	  Item.of('wizards:arcane_robe_legs'), 
	  [
	    'EAE',
		'P P',
		'P P'
	  ], 
	  {
		P: 'minecraft:purple_wool',
		A: 'runes:arcane_stone',
		E: 'minecraft:ender_pearl'
	  }
	)
	
	
	event.remove({output: 'wizards:arcane_robe_feet'})
	event.shaped(
	  Item.of('wizards:arcane_robe_feet'), 
	  [
	    'EAE',
		'P P',
		'   '
	  ], 
	  {
		P: 'minecraft:purple_wool',
		A: 'runes:arcane_stone',
		E: 'minecraft:ender_pearl'
	  }
	)
	
	
	event.remove({output: 'wizards:frost_robe_head'})
	event.shaped(
	  Item.of('wizards:frost_robe_head'), 
	  [
	    '  L',
		'PLP',
		'LFL'
	  ], 
	  {
		L: 'minecraft:light_blue_wool',
		F: 'runes:frost_stone',
		P: 'minecraft:prismarine_shard'
	  }
	)
	
	
	event.remove({output: 'wizards:frost_robe_chest'})
	event.shaped(
	  Item.of('wizards:frost_robe_chest'), 
	  [
	    'P P',
		'LFL',
		'LLL'
	  ], 
	  {
		L: 'minecraft:light_blue_wool',
		F: 'runes:frost_stone',
		P: 'minecraft:prismarine_shard'
	  }
	)
	
	
	event.remove({output: 'wizards:frost_robe_legs'})
	event.shaped(
	  Item.of('wizards:frost_robe_legs'), 
	  [
	    'PFP',
		'L L',
		'L L'
	  ], 
	  {
		L: 'minecraft:light_blue_wool',
		F: 'runes:frost_stone',
		P: 'minecraft:prismarine_shard'
	  }
	)
	
	
	event.remove({output: 'wizards:frost_robe_feet'})
	event.shaped(
	  Item.of('wizards:frost_robe_feet'), 
	  [
	    'PFP',
		'L L',
		'   '
	  ], 
	  {
		L: 'minecraft:light_blue_wool',
		F: 'runes:frost_stone',
		P: 'minecraft:prismarine_shard'
	  }
	)
	
	
})