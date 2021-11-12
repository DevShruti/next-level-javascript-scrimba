function addressMaker(address) {
    const {city , state} = address
    const newAddress = {
        city , // not city: address.city,
         state, // state: address.state,
         country: 'United States'
    };
    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});