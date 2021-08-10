const data = {
  venues: [
    {
      id: 1,
      name: "Arena of Nîmes",
      city: "Nîmes",
      country: "France",
      image_url:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/09/Arena-in-Nimes-sourced-from-venues-website-2.jpg",
    },
    {
      id: 2,
      name: "Red Rocks Amphitheatre",
      city: "Colorado",
      country: "USA",
      image_url:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/09/RedRocksAmpitheatre_Courtesy-of-Denver-Arts-CREDIT-Stevie-Crecelius.jpg",
    },
    {
      id: 3,
      name: "Dalhalla Amphitheatre",
      city: "Rattvik",
      country: "Sweden",
      image_url:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/09/Dalhalla-amphitheater-sourced-from-flickr-royalty-free.jpg",
    },
  ],
};

// data.venues.forEach((venue) => {
//   const place = `${venue.name} (${venue.city}, ${venue.country})`;
//   console.log(place);
// });

// data.venues[0] = null;

// data.venues.push(null);
// console.log(data.venues);

// data.venues.shift();
// console.log(data.venues);

// data.venues.pop();
// console.log(data.venues);

// const newVenues = [
//   {
//     id: 4,
//     name: "Sydney Opera House",
//     city: "NSW",
//     country: "Australia",
//     image_url:
//       "https://www.bosshunting.com.au/wp-content/uploads/2020/09/sydney-opera-house-2-sourced-from-venue-website.jpg",
//   },
// ];

// const updatedVenues = data.venues.concat(newVenues, [null]);
// console.log(updatedVenues);

// DECLARATIVE CODE (what?) (co?)
// data.venues.forEach((venue) => {
//   console.log(venue.name);
// });

// IMPERATIVE CODE (how?) (jak?)
//        index          condition        post-loop
// for (let index = 0; index < data.venues.length; index++) {
//   //         0           0 < 3                 1
//   //         1           1 < 3                 2
//   //         2           2 < 3                 3
//   //         3           3 < 3
//   console.log(data.venues[index].name);
// }

const venuesNames = data.venues.map((venue) => {
  if (venue.country === "France") {
    return `${venue.name} (FR)`;
  }
  return venue.name;
});

// console.log(venuesNames);

const frenchVenues = data.venues.filter((venue) => {
  return venue.country === "France";
  // return venue.id > 2;
});
// console.log(frenchVenues);

const sumOfNums = [1, 2, 3, 4, 5].reduce((acc, number) => acc + number, 0);

const venuesCountries = data.venues.reduce(
  (acc, venue) => [...acc, venue.name, null],
  []
);

// console.log(sumOfNums);
// console.log(venuesCountries);

const venuesDOM = document.querySelector("#venues");

data.venues.forEach((venue) => {
  const li = document.createElement("li");
  li.innerText = venue.name;
  venuesDOM.appendChild(li);
});
