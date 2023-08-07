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
	
	
	event.remove({output: 'wizards:wand_fire'})
	event.shaped(
	  Item.of('wizards:wand_fire'), 
	  [
	    '  P',
		' N ',
		'G  '
	  ], 
	  {
		P: 'minecraft:gunpowder',
		N: 'wizards:wand_novice',
		G: 'minecraft:gold_ingot'
	  }
	)
	
	
	event.remove({output: 'wizards:staff_fire'})
	event.shaped(
	  Item.of('wizards:staff_fire'), 
	  [
	    ' NB',
		' FN',
		'G  '
	  ], 
	  {
		N: 'minecraft:nether_brick',
		F: 'wizards:wand_fire',
		B: 'minecraft:blaze_powder',
		G: 'minecraft:gold_ingot'
	  }
	)
	
	
	event.remove({output: 'wizards:staff_ruby_fire'})
	event.shaped(
	  Item.of('wizards:staff_ruby_fire'), 
	  [
	    ' RB',
		' FR',
		'C  '
	  ], 
	  {
		R: 'betternether:nether_ruby',
		F: 'wizards:staff_fire',
		B: 'minecraft:blaze_powder',
		C: 'betternether:cincinnasite_ingot'
	  }
	)
	
	
	event.remove({output: 'wizards:wand_arcane'})
	event.shaped(
	  Item.of('wizards:wand_arcane'), 
	  [
	    '  A',
		' N ',
		'G  '
	  ], 
	  {
		A: '#spectrum:gemstone_shards',
		N: 'wizards:wand_novice',
		G: 'minecraft:gold_ingot'
	  }
	)
	
	
	event.remove({output: 'wizards:staff_arcane'})
	event.shaped(
	  Item.of('wizards:staff_arcane'), 
	  [
	    ' AE',
		' WA',
		'G  '
	  ], 
	  {
		A: '#spectrum:gemstone_shards',
		W: 'wizards:wand_arcane',
		E: 'minecraft:ender_pearl',
		G: 'minecraft:gold_ingot'
	  }
	)
	
	
	event.remove({output: 'wizards:staff_crystal_arcane'})
	event.shaped(
	  Item.of('wizards:staff_crystal_arcane'), 
	  [
	    ' CE',
		' SC',
		'A  '
	  ], 
	  {
		C: 'betterend:crystal_shards',
		S: 'wizards:staff_arcane',
		E: 'minecraft:ender_pearl',
		A: 'betterend:aeternium_ingot'
	  }
	)
	
	
	event.remove({output: 'wizards:wand_frost'})
	event.shaped(
	  Item.of('wizards:wand_frost'), 
	  [
	    '  S',
		' N ',
		'I  '
	  ], 
	  {
		S: 'minecraft:snowball',
		N: 'wizards:wand_novice',
		I: 'minecraft:iron_ingot'
	  }
	)
	
	
	event.remove({output: 'wizards:staff_frost'})
	event.shaped(
	  Item.of('wizards:staff_frost'), 
	  [
	    ' SP',
		' FS',
		'I  '
	  ], 
	  {
		S: 'minecraft:snowball',
		F: 'wizards:wand_frost',
		P: 'minecraft:prismarine_crystals',
		I: 'minecraft:iron_ingot'
	  }
	)
	
	
	event.remove({output: 'wizards:staff_smaragdant_frost'})
	event.shaped(
	  Item.of('wizards:staff_smaragdant_frost'), 
	  [
	    ' SP',
		' FS',
		'A  '
	  ], 
	  {
		S: 'betterend:smaragdant_crystal_shard',
		F: 'wizards:staff_frost',
		P: 'minecraft:prismarine_crystals',
		A: 'betterend:aeternium_ingot'
	  }
	)
	
	
})