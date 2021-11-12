const leadSinger = (artist) => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger("Chris Martin");



const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();




const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger("Chris Martin");