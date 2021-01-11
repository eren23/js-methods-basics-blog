const fellas = [
  {
    name: "John Doe",
    born: "1996",
    placeOfBirth: "Elazig",
    gender: "male",
    expertise: "software",
    salary: "100000",
  },
  {
    name: "Taylor Man",
    born: "1983",
    placeOfBirth: "Bursa",
    gender: "male",
    expertise: "architecture",
    salary: "60000",
  },
  {
    name: "Brian Daylord",
    born: "1995",
    placeOfBirth: "Elazig",
    gender: "male",
    expertise: "software",
    salary: "120000",
  },
  {
    name: "Princess Tol",
    born: "1999",
    placeOfBirth: "Bursa",
    gender: "female",
    expertise: "medicine",
    salary: "300000",
  },
  {
    name: "Aegean Life",
    born: "1994",
    placeOfBirth: "Istanbul",
    gender: "female",
    expertise: "data",
    salary: "120000",
  },
];

//@@@@@@@@@@-MAP-@@@@@@@@@@

const allExpertises = fellas.map((f) => f.expertise);
uniqExpertises = [...new Set(allExpertises)];
// console.log(uniqExpertises);

const allBirthdates = fellas.map((f) => f.born);
// console.log(allBirthdates);

const smallerFeatures = fellas.map((f) => ({
  name: f.name,
  expertise: f.expertise,
}));
// console.log(smallerFeatures);

//@@@@@@@@@@-SOME-@@@@@@@@@@

const isFemaleExists = fellas.some((f) => f.gender === "female");
// console.log(isFemaleExists);

const isDoctorExists = fellas.some((f) => f.expertise === "medicine");
// console.log(isDoctorExists);

const isBillGatesExists = fellas.some((f) => f.salary > 10000000);
// console.log(isBillGatesExists);

//@@@@@@@@@@-FILTER-@@@@@@@@@@

const bigEarners = fellas.filter((f) => f.salary > 100000);
// console.log(bigEarners);

const olderFellas = fellas.filter((f) => f.born < 1995);
// console.log(olderFellas);

const ladies = fellas.filter((f) => f.gender === "female");
// console.log(ladies);

//@@@@@@@@@@-SORT-@@@@@@@@@@

const olderToYounger = fellas.sort((a, b) => a.born - b.born);
// console.log(olderToYounger);

const youngerToOlder = fellas.sort((b, a) => a.born - b.born);
// console.log(youngerToOlder);

const sortByExpertise = fellas.sort((a, b) => {
  if (a.expertise < b.expertise) return -1;
  return 1;
});
// console.log(sortByExpertise);
