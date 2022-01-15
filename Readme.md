<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Concepts</h1>

## Here I am trying to create the notes related to javascript concepts. Feel free to add more concepts.

</div>

##### 1. What is `bind` method?

##### 2. What is `debouncing`?

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

debouncing(fn, 300);
```
