/**
 * drinks.js
 * Curated cocktail menu for "The Bar".
 * Easy to edit, add, or customize anytime!
 */

window.COCKTAIL_MENU = {
  barName: "The Bar",
  subtitle: "Artisanal Libations & Timeless Classics",

  cocktails: [
    {
      id: "old-fashioned",
      name: "Old Fashioned",
      subtitle: "The Timeless Cornerstone",
      baseSpirit: "Bourbon",
      image: "images/old-fashioned.jpg",
      flavorProfile: ["Spirit-Forward", "Rich", "Aromatic"],
      glassware: "Rocks Glass",
      ice: "Large Clear Cube / Sphere",
      garnish: "Expressed Orange Peel & Luxardo Cherry",
      technique: "Stirred",
      description: "The forefather of all craft cocktails. Bold bourbon whiskey gently softened with rich cane sugar, aromatic bitters, and bright citrus oils.",
      specs: [
        { name: "Bourbon or Rye Whiskey", amountOz: "2.0 oz", amountMl: "60 ml" },
        { name: "Demerara Syrup (or 1 Sugar Cube)", amountOz: "0.25 oz", amountMl: "7.5 ml" },
        { name: "Angostura Bitters", amountOz: "2 dashes", amountMl: "2 dashes" },
        { name: "Orange Bitters", amountOz: "1 dash", amountMl: "1 dash" }
      ],
      instructions: "Combine whiskey, demerara syrup, and bitters in a mixing glass with plenty of ice. Stir smoothly for 30 seconds until cold and properly diluted. Strain over a single large clear rock in a chilled rocks glass. Express fresh orange oils over the glass and insert the peel.",
      featured: true
    },
    {
      id: "manhattan",
      name: "Manhattan",
      subtitle: "The Crown Jewel of New York",
      baseSpirit: "Rye",
      image: "images/manhattan.jpg",
      flavorProfile: ["Spirit-Forward", "Rich", "Herbal"],
      glassware: "Coupe / Nick & Nora",
      ice: "Served Up (Chilled Stemware)",
      garnish: "Brandied Luxardo Cherry",
      technique: "Stirred",
      description: "Born at New York's Manhattan Club in the 1870s. Spicy American rye whiskey tamed by lush, botanical sweet Italian vermouth and aromatic bitters.",
      specs: [
        { name: "Rye Whiskey", amountOz: "2.0 oz", amountMl: "60 ml" },
        { name: "Sweet Vermouth", amountOz: "1.0 oz", amountMl: "30 ml" },
        { name: "Angostura Bitters", amountOz: "2 dashes", amountMl: "2 dashes" }
      ],
      instructions: "Add rye, sweet vermouth, and Angostura bitters into a mixing glass. Add plenty of ice and stir smoothly for 30 seconds until ice-cold. Strain into a chilled Nick & Nora or coupe glass. Garnish with a brandied cherry.",
      featured: true
    },
    {
      id: "rob-roy",
      name: "Rob Roy",
      subtitle: "The Scotch Manhattan",
      baseSpirit: "Scotch",
      image: "images/rob-roy.jpg",
      flavorProfile: ["Spirit-Forward", "Rich", "Smoky"],
      glassware: "Nick & Nora / Coupe",
      ice: "Served Up",
      garnish: "Brandied Cherry or Lemon Twist",
      technique: "Stirred",
      description: "Created in 1894 at the Waldorf Astoria in honor of the operetta Rob Roy. The smoky malt depth of blended Scotch whisky marries rich sweet vermouth.",
      specs: [
        { name: "Blended Scotch Whisky", amountOz: "2.0 oz", amountMl: "60 ml" },
        { name: "Sweet Vermouth", amountOz: "1.0 oz", amountMl: "30 ml" },
        { name: "Angostura Bitters", amountOz: "2 dashes", amountMl: "2 dashes" },
        { name: "Peychaud's or Orange Bitters", amountOz: "1 dash", amountMl: "1 dash" }
      ],
      instructions: "Add Scotch, sweet vermouth, and bitters to a mixing glass filled with ice. Stir gracefully for 30 seconds. Strain into a chilled coupe or Nick & Nora glass. Garnish with a cocktail cherry.",
      featured: true
    },
    {
      id: "whiskey-sour",
      name: "Whiskey Sour",
      subtitle: "Velvet Froth & Citrus Balance",
      baseSpirit: "Bourbon",
      image: "images/whiskey-sour.jpg",
      flavorProfile: ["Citrus", "Velvety", "Balanced"],
      glassware: "Coupe or Rocks Glass",
      ice: "Served Up (or Over Large Rock)",
      garnish: "Angostura Bitters Drops & Brandied Cherry",
      technique: "Dry Shake + Wet Shake",
      description: "One of the greatest cocktail templates in history. Bold bourbon whiskey softened with freshly squeezed lemon juice, simple syrup, and a silky egg white froth.",
      specs: [
        { name: "Bourbon Whiskey", amountOz: "2.0 oz", amountMl: "60 ml" },
        { name: "Fresh Lemon Juice", amountOz: "0.75 oz", amountMl: "22.5 ml" },
        { name: "Simple Syrup", amountOz: "0.75 oz", amountMl: "22.5 ml" },
        { name: "Egg White (Optional / Boston Style)", amountOz: "0.5 oz (1 white)", amountMl: "15 ml" },
        { name: "Angostura Bitters", amountOz: "3 drops (garnish)", amountMl: "3 drops" }
      ],
      instructions: "Combine bourbon, fresh lemon, simple syrup, and egg white in a shaker without ice. Perform a 'dry shake' for 10 seconds to whip the froth. Add ice cubes and shake vigorously for 12 seconds until cold. Double strain into a chilled coupe glass. Dot foam with 3 drops of Angostura bitters.",
      featured: true
    },
    {
      id: "whiskey-highball",
      name: "Whiskey Highball",
      subtitle: "Tokyo Style Carbonated Perfection",
      baseSpirit: "Bourbon",
      image: "images/whiskey-highball.jpg",
      flavorProfile: ["Crisp", "Effervescent", "Refreshing"],
      glassware: "Highball / Collins Glass",
      ice: "Clear Column or Solid Ice Cubes",
      garnish: "Expressed Lemon Peel",
      technique: "Built in Glass",
      description: "Elevated Tokyo style. Quality whiskey poured over pristine columnar ice and paired with ultra-effervescent club soda for the ultimate refreshing highball.",
      specs: [
        { name: "Whiskey (Japanese / Scotch / Bourbon)", amountOz: "2.0 oz", amountMl: "60 ml" },
        { name: "Chilled Sparkling Club Soda", amountOz: "4.0 oz", amountMl: "120 ml" },
        { name: "Fresh Lemon Twist (Expressed)", amountOz: "1 twist", amountMl: "1 twist" }
      ],
      instructions: "Fill a cold highball glass to the brim with clear ice cubes. Pour 2 oz of chilled whiskey over the ice and stir gently to chill the glass. Slowly pour ice-cold club soda down the side or bar spoon. Give precisely one gentle fold from the bottom. Express lemon peel oils over the surface.",
      featured: true
    },
    {
      id: "sparkling-whiskey-sour",
      name: "Sparkling Whiskey Sour",
      subtitle: "The Effervescent Ward 8 Spin",
      baseSpirit: "Bourbon",
      image: "images/sparkling-whiskey-sour.jpg",
      flavorProfile: ["Citrus", "Effervescent", "Balanced"],
      glassware: "Collins / Highball Glass",
      ice: "Crisp Cubed Ice",
      garnish: "Lemon Wheel & Maraschino Cherry",
      technique: "Shaken & Topped with Soda",
      description: "A bright, lengthened twist on the classic sour. Bourbon, freshly squeezed lemon juice, and simple syrup shaken until frosty, then topped with high-carbonation sparkling soda water.",
      specs: [
        { name: "Bourbon Whiskey", amountOz: "2.0 oz", amountMl: "60 ml" },
        { name: "Fresh Lemon Juice", amountOz: "0.75 oz", amountMl: "22.5 ml" },
        { name: "Simple Syrup", amountOz: "0.75 oz", amountMl: "22.5 ml" },
        { name: "Chilled Sparkling Club Soda", amountOz: "2.0 oz (to top)", amountMl: "60 ml (to top)" },
        { name: "Angostura Bitters", amountOz: "1 dash", amountMl: "1 dash" }
      ],
      instructions: "Combine bourbon, fresh lemon juice, simple syrup, and bitters in a cocktail shaker filled with ice. Shake hard for 10 seconds. Strain into a tall Collins glass filled with fresh ice cubes. Top gently with chilled sparkling club soda and lift once with a bar spoon. Garnish with a lemon wheel and cherry.",
      featured: true
    },
    {
      id: "negroni",
      name: "Negroni",
      subtitle: "Milanese Aperitivo Perfection",
      baseSpirit: "Gin",
      image: "images/negroni.jpg",
      flavorProfile: ["Bitter & Herbal", "Spirit-Forward", "Citrus"],
      glassware: "Rocks Glass",
      ice: "Large Clear Ice Block / Sphere",
      garnish: "Expressed Orange Wheel or Peel",
      technique: "Stirred",
      description: "Created in Florence in 1919 for Count Camillo Negroni. A flawless holy trinity of crisp botanical gin, vibrant bitter Campari, and rich Italian sweet vermouth.",
      specs: [
        { name: "London Dry Gin", amountOz: "1.0 oz", amountMl: "30 ml" },
        { name: "Campari", amountOz: "1.0 oz", amountMl: "30 ml" },
        { name: "Sweet Vermouth", amountOz: "1.0 oz", amountMl: "30 ml" }
      ],
      instructions: "Combine equal parts gin, Campari, and sweet vermouth in a mixing glass with plenty of ice. Stir smoothly for 30–35 revolutions until thoroughly chilled. Strain over a single large ice rock in an Old Fashioned glass. Express fresh orange oils over the glass and insert the peel.",
      featured: true
    },
    {
      id: "gimlet",
      name: "The Gimlet",
      subtitle: "Crisp Botanical & Tart Lime",
      baseSpirit: "Gin",
      image: "images/gimlet.jpg",
      flavorProfile: ["Citrus", "Crisp", "Tart"],
      glassware: "Coupe",
      ice: "Served Up (or Over Rock)",
      garnish: "Lime Wheel or Twist",
      technique: "Shaken",
      description: "Originally created in the 19th-century British Royal Navy. Crisp, botanical London Dry gin perfectly balanced with sharp fresh lime juice and cane sweetness.",
      specs: [
        { name: "London Dry Gin", amountOz: "2.0 oz", amountMl: "60 ml" },
        { name: "Fresh Lime Juice", amountOz: "0.75 oz", amountMl: "22.5 ml" },
        { name: "Simple Syrup", amountOz: "0.75 oz", amountMl: "22.5 ml" }
      ],
      instructions: "Add gin, freshly squeezed lime juice, and simple syrup into a cocktail shaker with ice. Shake vigorously for 12 seconds until frosty and cold. Double strain into a chilled coupe glass. Garnish with a floating lime wheel.",
      featured: true
    },
    {
      id: "gin-and-tonic",
      name: "Spanish Gin & Tonic",
      subtitle: "High Effervescence & Aromatic Botanicals",
      baseSpirit: "Gin",
      image: "images/gin-and-tonic.jpg",
      flavorProfile: ["Crisp", "Effervescent", "Herbal"],
      glassware: "Copa de Balón / Highball",
      ice: "Packed With Fresh Hard Ice",
      garnish: "Lime Wheel or Fresh Herb Sprig",
      technique: "Built in Glass",
      description: "Elevated Spanish style. Premium London Dry gin paired with crisp chilled tonic water over high-clarity ice, releasing lively botanical effervescence.",
      specs: [
        { name: "London Dry Gin", amountOz: "2.0 oz", amountMl: "60 ml" },
        { name: "Chilled Tonic Water", amountOz: "4.0 oz", amountMl: "120 ml" },
        { name: "Fresh Lime Wedge", amountOz: "1 wedge (squeeze)", amountMl: "1 wedge" }
      ],
      instructions: "Fill a Copa balloon glass or tall highball with plenty of solid ice cubes. Pour in 2 oz gin. Gently tilt the glass and pour tonic water down a bar spoon to preserve effervescence. Give one gentle lift with the spoon. Squeeze and drop a fresh lime wheel into the glass.",
      featured: true
    },
    {
      id: "tom-collins",
      name: "Tom Collins",
      subtitle: "The Timeless London Sparkler",
      baseSpirit: "Gin",
      image: "images/tom-collins.jpg",
      flavorProfile: ["Citrus", "Crisp", "Effervescent"],
      glassware: "Collins Glass",
      ice: "Full Column or Cubed Ice",
      garnish: "Lemon Wheel & Brandied Cherry",
      technique: "Shaken & Topped with Club Soda",
      description: "First memorialized in 1876 by Jerry Thomas. Crisp botanical gin, freshly squeezed lemon juice, and simple syrup charged with cold sparkling club soda. The archetype of refreshing fizzy highballs.",
      specs: [
        { name: "London Dry Gin (or Old Tom Gin)", amountOz: "2.0 oz", amountMl: "60 ml" },
        { name: "Fresh Lemon Juice", amountOz: "1.0 oz", amountMl: "30 ml" },
        { name: "Simple Syrup", amountOz: "0.5 oz", amountMl: "15 ml" },
        { name: "Chilled Sparkling Club Soda", amountOz: "3.0 oz (to top)", amountMl: "90 ml (to top)" }
      ],
      instructions: "Add gin, fresh lemon juice, and simple syrup into a shaker with ice. Shake for 10 seconds until ice-cold. Strain into a chilled Collins glass packed with fresh ice cubes. Top with sparkling club soda. Stir gently from the bottom just once. Garnish with a lemon wheel and cherry.",
      featured: true
    },
    {
      id: "classic-dry-martini",
      name: "Classic Dry Martini",
      subtitle: "The King of Cocktails",
      baseSpirit: "Gin",
      image: "images/classic-dry-martini.jpg",
      flavorProfile: ["Spirit-Forward", "Crisp", "Botanical"],
      glassware: "Coupe / Martini Glass",
      ice: "Served Up (Ice Cold)",
      garnish: "Expressed Lemon Twist (or Castlevetrano Olive)",
      technique: "Stirred",
      description: "The definitive icon of craft cocktail culture. Crisp, botanical London Dry gin married with dry French vermouth, stirred ice-cold to silky, crystalline perfection.",
      specs: [
        { name: "London Dry Gin", amountOz: "2.5 oz", amountMl: "75 ml" },
        { name: "Dry French Vermouth", amountOz: "0.5 oz", amountMl: "15 ml" },
        { name: "Orange Bitters (Optional)", amountOz: "1 dash", amountMl: "1 dash" }
      ],
      instructions: "Combine gin, dry vermouth, and optional dash of orange bitters in a mixing glass filled with solid, cold ice. Stir smoothly and deliberately for 35 to 40 revolutions until ice-cold. Strain into a pre-chilled coupe or martini glass. Express oils from a fresh lemon twist over the surface and drop it in.",
      featured: true
    }
  ]
};
