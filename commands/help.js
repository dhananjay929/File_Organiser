function helpFn(){
    console.log(`List of all the Commands:
     node main.js tree "directoryPath"
     node main.js organise "directoryPath"
     node main.js help
                                         
    `);
}
module.exports = {
    helpKey: helpFn
}
