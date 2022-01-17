const person = {
  fullName: function (city, country) {
    console.log(
      `My name is ${this.fName} ${this.lName} from ${city} ,${country}`
    );
  },
};
const person1 = {
  fName: "Dev",
  lName: "Stack",
};

person.fullName.apply(person1, ["XYZ", "India"]);
