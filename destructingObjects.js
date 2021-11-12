const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
  console.log( player.address.city );
  console.log( player.name );

  const { name, club, address: {city} } = player; //destructuring


player.name // instead of this
name        // use this

player.club  // instead of this
club         // use this

console.log(`${name} plays for ${club}`);

console.log(`${name} lives in ${city}`);