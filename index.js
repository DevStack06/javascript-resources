var name = "globalName";

const obj = {
  name: "myName",
  sayName: function () {
    console.log(this.name);
  },
};

const say = obj.sayName; // we are merely storing the function the value of this isn't magically transferred

say(); // now because this function is executed in global scope this will refer to the global var

const boundSay = obj.sayName.bind(obj); // now the value of this is bound to the obj object

boundSay();
