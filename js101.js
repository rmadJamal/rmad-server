const myName = "Code Zone";
console.log(myName);

const firstName = "Malek";
const lastName = "Kabaha";
console.log("full name:", firstName + " " + lastName);

const isBig = 11 > 10;
console.log("isBig?:", isBig);
const number = 8;
const isEven = number % 2;

const printMyName = (name) => {
  console.log(name);
};

const printMyNameWithGroupe = (name, group) => {
  printMyName(name);
  console.log(group);
};

printMyNameWithGroupe("Mahmod", "J8");
printMyNameWithGroupe("Noor", "J1");

const sum = (a, b) => {
  return a + b;
};

const s = sum(7 , 3);
console.log("s: ", s );
console.log("s2:" , sum(2 , 3));


