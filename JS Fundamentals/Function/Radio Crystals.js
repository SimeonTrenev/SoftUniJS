function radioCrystals(input) {
    
   
    const cut = (x) => x / 4
    const lap = (x) => x * 0.8
    const grind = (x) => x - 20
    const etch = (x) => x - 2
    const xRay = (x) => x + 1
   
    const print = (operation, thickness) => {
      if (thickness > 0)
        console.log(`${operation} x${thickness}\nTransporting and washing`)
    }
   
    let cuts = 0,
      laps = 0,
      grinds = 0,
      etchs = 0
   
    for (let i = 1; i < input.length; i++) {
      let currentThickness = input[i]
      let targetThickness = input[0]
   
      console.log(`Processing chunk ${currentThickness} microns`)
   
      while (currentThickness / 4 >= targetThickness - 1) {
        currentThickness = Math.floor(cut(currentThickness))
        cuts++
      }
      print('Cut', cuts)
   
      while (currentThickness * 0.8 >= targetThickness - 1) {
        currentThickness = Math.floor(lap(currentThickness))
        laps++;
      }
      print('Lap', laps)
   
      while (currentThickness - 20 >= targetThickness - 1) {
        currentThickness = grind(currentThickness)
        grinds++
      }
      print('Grind', grinds)
   
      while (currentThickness - 2 >= targetThickness - 1) {
        currentThickness = etch(currentThickness)
        etchs++
      }
      print('Etch', etchs)
   
      if (currentThickness === targetThickness - 1) {
        currentThickness = xRay(currentThickness)
        console.log(`X-ray x1`)
        console.log(`Finished crystal ${currentThickness} microns`)
      }
      else
        console.log(`Finished crystal ${currentThickness} microns`)
    }
  }
radioCrystals([1375, 50000])