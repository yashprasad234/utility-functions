# @magloo/utility-functions

@magloo/utility-functions is a collection of JavaScript utility functions designed to simplify common programming tasks. It provides a set of functions for string manipulation, array operations, number handling, date/time formatting, and data validation.

## Installation

You can install @magloo/utility-functions via npm:

```bash
npm install @magloo/utility-functions
```

## Usage

To use @magloo/utility-functions in your JavaScript project, simply import the desired functions:

Copy code

```javascript
// Import the isInteger function
const { isInteger } = require("@magloo/utility-functions");

// Check if a value is an integer
console.log(isInteger(5)); // Output: true
console.log(isInteger(-10)); // Output: true
console.log(isInteger(3.14)); // Output: false
```

## Available Functions

- capitalize(string): Capitalizes the first letter of a string.
- truncate(string, maxLength): Truncates a string to a specified maximum length.
- isEmpty(string): Checks if a string is empty or contains only whitespace.
- shuffle(array): Shuffles the elements of an array.
- chunk(array, size): Splits an array into smaller chunks of a specified size.
- unique(array): Removes duplicate elements from an array.
- clamp(number, min, max): Restricts a number to be within a specified range.
- isPrime(number): Checks if a number is prime.
- formatDate(date, format): Formats a Date object into a string according to a specified format.
- calculateAge(birthDate): Calculates the age based on a given birth date.
- isValidEmail(email): Validates an email address.
- isValidURL(url): Validates a URL.
- isInteger(value): Checks if a value is an integer.

## Contributing

Contributions are welcome! If you have suggestions for new features or improvements, feel free to open an issue or submit a pull request on GitHub: https://github.com/yashprasad234/utility-functions.

License

This project is licensed under the MIT License - see the LICENSE file for details.
