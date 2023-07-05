// Code your solutions in this files);
const names = ["Charlie", "Samip", "Ali"];

function writeCards(arrayNames) {
    const newArray = []
    for (let t = 0; t < arrayNames.length; t++) {
        newArray.push(`Thank you, ${arrayNames[t]}, for the wonderful surprise gift!`);
        debugger;
}
return newArray
}

function countDown(count) {
    while (count >= 0){
        console.log(count--);
    }
}