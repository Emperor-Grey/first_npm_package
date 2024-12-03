# **hw_print_package** 🚀

A simple and customizable Node.js utility function to print messages and optionally log the function itself. Perfect for testing or creating lightweight debugging tools. 💻🔧

## **Installation** 📦

To install the package, run:

```bash
npm install hw_print_package
```

---

## **Usage** 🛠️

### Importing the Package 🎉

You can use the package by importing it into your project:

```javascript
const testing = require('hw_print_package');
```

---

### **Basic Usage** 📝

By default, the function logs itself and returns the message `'hello world'` 🌍:

```javascript
const result = testing();
console.log(result); // Output: 'hello world'
```

---

### **Customization** ✨

Want to change the message? No problem! You can provide a custom message instead of the default `'hello world'` 🗣️:

```javascript
function testing(customMessage) {
  console.log(testing);
  return customMessage || 'hello world'; // Custom message if provided
}

module.exports = testing;
```

---

## **Function Documentation** 📚

### `testing()` 💡

#### Description:

The `testing()` function logs the function definition itself (`console.log(testing)`) and returns either a custom message or the default message `'hello world'`. It's a fun and simple tool to play around with logging and testing. 🎮

#### Parameters:

- `customMessage` (optional): A string to return instead of the default `'hello world'`. If not provided, it defaults to `'hello world'`.

#### Example:

```javascript
const result = testing('Custom message');
console.log(result); // Output: "Custom message"
```

---

## **License** 🛡️

ISC License

---

## **Author** 🖋️

King Grey 💥

---

## **Changelog** 🔄

### v2.0.0

- Refactored the function to support custom messages. 🎉
- Added detailed function documentation. 📝
- Improved logging for better debugging and fun! 🎮

---

✨ Thanks for using **hw_print_package**! Have fun testing and coding! 🚀

```

```
