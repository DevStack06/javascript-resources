<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Concepts</h1>

## Here I am trying to create the notes related to javascript concepts. Feel free to add more concepts.

#### All the points are taken from the online resources ( Ex - GeeksForGeek, FreeCodeCamp)

</div>

##### 1. What is `Execution Context` in javascript?

##### <b> Everything in Javascript happens inside the Execution context.</b >

Whenever we run a javascript programme a global Execution context will be created. Execution context consist two part `Memory allocation` and `Code execution`. In Memory allocation part all the variable and function get a memory allocated.

<p>Suppose Let's take example of below code:</p>

```javascript
var firstName = "Balram";
var lastName = "Rathore";
getFullName(fName,lName){
return fName + " " + lName;
}
var fullName = getFullName(firstName,lastName);
```

##### 2. How `this` keyword work in javascript?

In JavaScript, the `this` keyword allows us to:

- Reuse functions in different execution contexts. It means, a function once defined can be invoked for different objects using the this keyword.
- Identifying the object in the current execution context when we invoke a method.

Different way to use the `this` keyword -

1. Let's understand implicit binding of `this` keyword with help of code

```javascript
const introduction = {
  fName: "Balram",
  lName: "Rathore",
  logFullName: () => {
    console.log(`My full name is ${this.fName} ${this.lName}.`);
  },
};

introduction.logFullName();
// It will log My full name is Balram Rathore.
```

Here `this` is bound with the introduction object. if we take a complex object then here is the object.

```javascript
const addLogFullName = (object) => {
  object.logFullName = () => {
    console.log(`My full name is ${this.fName} ${this.lName}.`);
  };
};
const intro1 = {
  fName: "Balram",
  lName: "Rathore",
};
const intro2 = {
  fName: "Dev",
  lName: "Stack",
};
addLogFullName(intro1);
addLogFullName(intro2);
intro1.logFullName();
// It will log `My full name is Balram Rathore`.
intro2.logFullName();
// It will log `My full name is Dev Stack`.
```

##### 3. What is `bind` method?

##### 4. What is `debouncing`?

<p>Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.</p>

Ex-

```javascript
const debouncing = (fn, delay) => {
  let debounceTimer;
  return () => {
    const context = this;
    const args = arguments;
    ClearTimeOut(debounceTimer);
    debounceTimer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

debouncing(() => {
  console.log("do somethiung");
}, 300);
```
