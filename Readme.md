<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Concepts</h1>

## Here I am trying to create the notes related to javascript concepts. Feel free to add more concepts.

#### All the points are taken from the online resources ( Ex - GeeksForGeek, FreeCodeCamp, W3School, StackOverflow)

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

##### 2. What is `call` method?

With the `call()` method, we can write a method that can be used on different objects. See the below example -

> const fullNameMsg = logFullName.call(this, args1, args2,args3);
>
> function logFullName(this, args1,args2,args3){}

- Example 1 without arguments

```javascript
function logFullName() {
  console.log(`My name is ${this.fName} ${this.lName}`);
}

const fullName = {
  fName: "Dev",
  lName: "Stack",
};

// const fullNameMsg = logFullName.call(this, args1, args2); (here this is the fullName)
const fullNameMsg = logFullName.call(fullName);
// It will console log My name is Dev Stack
```

- Example 2 with extra arguments

```javascript
const person = {
  fullName: function (location) {
    console.log(`My name is ${this.fName} ${this.lName} from ${location}`);
  },
};
const person1 = {
  fName: "Dev",
  lName: "Stack",
};

person.fullName.call(person1, "India");
// This will return "Dev Stack from India":
```

##### 3. What is `apply` method?

`apply` method have same uses like `call`, the difference b/w `call` and `apply` is the way we pass arguments.

> const fullNameMsg = logFullName.apply(this, args1, args2,args3);
>
> function logFullName(this, [args1,args2,args3]){}

- Ex with arguments

```javascript
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
// It will log `My name is Dev Stack from XYZ ,India`
```

##### 4. What is `bind` method?

`Bind` creates a new function that will force the `this` inside the function to be the parameter passed to bind().

Here's an example that shows how to use `bind` to pass a member method around that has the correct `this`:

```javascript
var myButton = {
  content: "OK",
  click() {
    console.log(this.content + " clicked");
  },
};

myButton.click();
// log `OK clicked`
var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the globalThis
// log `undefined clicked`

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton
// log `Ok clicked`
```

##### 5. What is `Currying`?

##### 6. How `this` keyword work in javascript?

In JavaScript, the `this` keyword allows us to:

- Reuse functions in different execution contexts. It means, a function once defined can be invoked for different objects using the this keyword.
- Identifying the object in the current execution context when we invoke a method.

Different way to use the `this` keyword -

1. Let's understand implicit binding of `this` keyword with help of code

```javascript
const introduction = {
  fName: "Balram",
  lName: "Rathore",
  logFullName: function () {
    console.log(`My full name is ${this.fName} ${this.lName}.`);
  },
};

introduction.logFullName();
// It will log My full name is Balram Rathore.
```

Here `this` is bound with the introduction object. Similarly if we take a complex example with below code.

```javascript
const addLogFullName = (object) => {
  object.logFullName = function () {
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

2. Let's understand explicit binding of `this` keyword with help of code

##### 7. What is `debouncing`?

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

##### 8. What is `Generator`?

##### 9. What is `Throttling`?
