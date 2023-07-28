ServerEvents.recipes(event => {


	event.remove({output: 'ironchests:iron_chest_upgrade'})
	event.shaped(
	  Item.of('ironchests:iron_chest_upgrade'), 
	  [
	    'III',
		'ICI',
		'III'
	  ], 
	  {
		I: 'minecraft:iron_ingot',
		C: 'ironchests:copper_chest_upgrade'
	  }
	)
	
	
	event.remove({output: 'ironchests:gold_chest_upgrade'})
	event.shaped(
	  Item.of('ironchests:gold_chest_upgrade'), 
	  [
	    'GGG',
		'GIG',
		'GGG'
	  ], 
	  {
		G: 'minecraft:gold_ingot',
		I: 'ironchests:iron_chest_upgrade'
	  }
	)
	
	
	event.remove({output: 'ironchests:diamond_chest_upgrade'})
	event.shaped(
	  Item.of('ironchests:diamond_chest_upgrade'), 
	  [
	    'DDD',
		'EGE',
		'DDD'
	  ], 
	  {
		D: 'minecraft:diamond',
		E: 'minecraft:emerald',
		G: 'ironchests:gold_chest_upgrade'
	  }
	)
	
	
	event.remove({output: 'ironchests:crystal_chest_upgrade'})
	event.shaped(
	  Item.of('ironchests:crystal_chest_upgrade'), 
	  [
	    'GAG',
		'ADA',
		'GAG'
	  ], 
	  {
		A: 'minecraft:amethyst_shard',
		G: '#c:glass_blocks',
		D: 'ironchests:diamond_chest_upgrade'
	  }
	)
	
	
	event.remove({output: 'ironchests:obsidian_chest_upgrade'})
	event.shaped(
	  Item.of('ironchests:obsidian_chest_upgrade'), 
	  [
	    'OOO',
		'ODO',
		'OOO'
	  ], 
	  {
		O: 'minecraft:obsidian',
		D: 'ironchests:diamond_chest_upgrade'
	  }
	)
	
	
	event.remove({output: 'ironchests:copper_barrel'})
	event.shaped(
	  Item.of('ironchests:copper_barrel'), 
	  [
	    'CCC',
		'CBC',
		'CCC'
	  ], 
	  {
		C: 'minecraft:copper_ingot',
		B: 'minecraft:barrel'
	  }
	)
	
	
	event.remove({output: 'ironchests:iron_barrel'})
	event.shaped(
	  Item.of('ironchests:iron_barrel'), 
	  [
	    'III',
		'ICI',
		'III'
	  ], 
	  {
		I: 'minecraft:iron_ingot',
		C: 'ironchests:copper_barrel'
	  }
	)
	
	
	event.remove({output: 'ironchests:gold_barrel'})
	event.shaped(
	  Item.of('ironchests:gold_barrel'), 
	  [
	    'GGG',
		'GIG',
		'GGG'
	  ], 
	  {
		G: 'minecraft:gold_ingot',
		I: 'ironchests:iron_barrel'
	  }
	)
	
	
	event.remove({output: 'ironchests:diamond_barrel'})
	event.shaped(
	  Item.of('ironchests:diamond_barrel'), 
	  [
	    'DDD',
		'EGE',
		'DDD'
	  ], 
	  {
		D: 'minecraft:diamond',
		E: 'minecraft:emerald',
		G: 'ironchests:gold_barrel' 
	  }
	)
	
	
	event.remove({output: 'ironchests:diamond_barrel'})
	event.shaped(
	  Item.of('ironchests:diamond_barrel'), 
	  [
	    'DDD',
		'EGE',
		'DDD'
	  ], 
	  {
		D: 'minecraft:diamond',
		E: 'minecraft:emerald',
		G: 'ironchests:gold_barrel' 
	  }
	)
	
	
	event.remove({output: 'ironchests:crystal_barrel'})
	event.shaped(
	  Item.of('ironchests:crystal_barrel'), 
	  [
	    'GAG',
		'ADA',
		'GAG'
	  ], 
	  {
		A: 'minecraft:amethyst_shard',
		G: '#c:glass_blocks',
		D: 'ironchests:diamond_barrel'
	  }
	)
	
	
	event.remove({output: 'ironchests:crystal_barrel'})
	event.shaped(
	  Item.of('ironchests:crystal_barrel'), 
	  [
	    'GAG',
		'ADA',
		'GAG'
	  ], 
	  {
		A: 'minecraft:amethyst_shard',
		G: '#c:glass_blocks',
		D: 'ironchests:diamond_barrel'
	  }
	)
	
	
	event.remove({output: 'ironchests:obsidian_barrel'})
	event.shaped(
	  Item.of('ironchests:obsidian_barrel'), 
	  [
	    'OOO',
		'ODO',
		'OOO'
	  ], 
	  {
		O: 'minecraft:obsidian',
		D: 'ironchests:diamond_barrel'
	  }
	)
	
	
	event.smithing(
	  'ironchests:netherite_barrel',
	  'minecraft:netherite_ingot',
	  'ironchests:diamond_barrel'
	)
	
	
	event.remove({output: 'ironchests:diamond_chest'})
	event.shaped(
	  Item.of('ironchests:diamond_chest'), 
	  [
	    'DDD',
		'EGE',
		'DDD'
	  ], 
	  {
		D: 'minecraft:diamond',
		E: 'minecraft:emerald',
		G: 'ironchests:gold_chest' 
	  }
	)
	
	
	event.remove({output: 'ironchests:crystal_chest'})
	event.shaped(
	  Item.of('ironchests:crystal_chest'), 
	  [
	    'GAG',
		'ADA',
		'GAG'
	  ], 
	  {
		A: 'minecraft:amethyst_shard',
		G: '#c:glass_blocks',
		D: 'ironchests:diamond_chest'
	  }
	)
	
	
})