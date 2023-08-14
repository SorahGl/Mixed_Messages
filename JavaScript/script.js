// This is the Tops array
const top = ['blue blouse', 'white blouse', 'pink cardigan', 'yellow sweater', 'tweed blazer', 'green knit sweater']

// This is the Bottoms array
const bottom = ['a black pleated skirt', 'navy pants', 'a white wool skirt', 'grey pants']

// This is the Shoes array
const shoe = ['white sneakers', 'navy heels', 'yellow flats', 'black pumps', 'grey flats', 'brown Mary Janes']



let topIndex = Math.floor(Math.random() * top.length)
let bottomIndex = Math.floor(Math.random() * bottom.length)
let shoeIndex = Math.floor(Math.random() * shoe.length)


/*const randomOutfit = () => */console.log('Your randomly chosen outfit is a ' + top[topIndex] + ' with ' + bottom[bottomIndex] + ' and ' + shoe[shoeIndex] + '.')

//console.log(randomOutfit)