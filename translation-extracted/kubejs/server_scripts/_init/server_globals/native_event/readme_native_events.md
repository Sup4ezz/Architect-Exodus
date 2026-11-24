This is a 99% backport of the 1.21.1 Backport of NativeEvents from KJS which allows the user to call NativeEvents.onEvent without needing to be done in Startup Scripts, this is should be prioritized right after class loading as its an essential system to use.

Using it is the same as it is 1.21.1 
```js
NativeEvents.onEvent("dev.example.package.ClassName", (event) => { 
  // Code
})
```