const celcius = parseFloat(process.argv[2]);

const far = (9 / 5) * celcius + 32;

console.log(`The farenheight of ${celcius} is : ${far.toFixed(2)}`);
