<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Concepts</h1>

## Here I am trying to create the notes related to javascript concepts. Feel free to add more concepts.

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

##### 2. What is `bind` method?

##### 3. What is `debouncing`?

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
