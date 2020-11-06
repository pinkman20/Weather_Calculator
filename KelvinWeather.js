// Value of temp measured in kelvin's
const kelvin = 293;

// Temperature measured in celsius degrees -> converting

let celsius =  kelvin - 283;

// Converting temperature to fahrenheit degrees and rounding decimal number

let fahrenheit = Math.floor(celsius * (9/5) + 32);


console.log(`The temperature in kelvin is : ${kelvin}, which converted in Celsius is equal to ${celsius} degrees. 
And from Celsius degree it is possible to get fahrenheit: ${fahrenheit} `)

const typeOfDay = () => {
    if (celsius >= 19 && celsius < 30) {
        return console.log('It is a warm day!')
    } else if (celsius < 19 && celsius >= 10 ) {
        return console.log('Its mildly cold day. Better get a jacket!')

    }else if (celsius < 10 && celsius > 0) {
        return console.log('Its REALLY cold !')
    } else if (celsius <= 0) {
        return console.log('Error - computer froze')
    }
};
typeOfDay();