const colors = require('colors')

const chosenColor = colors.getRandomColor()

console.log(`Si usa el color ${chosenColor.name}, en su
sitio web debería usar el código ${chosenColor.code}`);

const favouriteColor = colors.getRed()

console.log(`Mi color favorito es el ${favouriteColor.name}
porque su código de color es ${favouriteColor.code}`);