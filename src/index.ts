// String Manipulation:

// 1. capitalize(string): Capitalizes the first letter of a string.

export const capitalize = (string: string) => {
    return string.slice(0, 1).toUpperCase().concat(string.slice(1, string.length));
}

// 2. truncate(string, maxLength): Truncates a string to a specified maximum length.
export const truncate = (string: string, maxLength: number) => {
    return string.slice(0, maxLength);
}

// 3. isEmpty(string): Checks if a string is empty or contains only whitespace.
export const isEmpty = (string: string) => {
    return string.trim().length === 0;
}

// Array Operations:

// 1. shuffle(array): Shuffles the elements of an array.
export const shuffle = <T>(array: T[]) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array.slice(0, randomIndex).sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }).concat(array.slice(randomIndex, array.length).sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }));
}

// 2. chunk(array, size): Splits an array into smaller chunks of a specified size.
export const chunk = <T>(array: T[], size: number) => {
    let arrayOfChunks = [];
    let i: number = 0;
    while (i < array.length) {
        let chunk = [];
        while (i + 1 % size !== 0) {
            chunk.push(array[i]);
        }
        arrayOfChunks.push(chunk);
    }
    return arrayOfChunks;
}

// 3. unique(array): Removes duplicate elements from an array.
export const unique = <T>(array: T[]) => {
    let uniqueArray: T[] = [];
    array.map((el) => {
        if (!uniqueArray.includes(el)) uniqueArray.push(el);
    });
    return uniqueArray;
}

// Number Operations:

// 1. clamp(number, min, max): Restricts a number to be within a specified range.

// clamp(5, 0, 10) => 5
// clamp(-5, 0, 10) => 0
// clamp(15, 0, 10) => 10

export const clamp = (number: number, min: number, max: number) => {
    return Math.min(Math.max(min, number), max);
}

// 2. isPrime(number): Checks if a number is prime.

export const isPrime = (number: number) => {
    if (number <= 1) return false;
    if (number === 2 || number === 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i <= Math.sqrt(number); i++) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}

// Date/Time Formatting:

// 1. formatDate(date, format): Formats a Date object into a string according to a specified format.

export const formatDate = (date: Date, format: string) => {
    let year: String = date.getFullYear().toString();
    let month: String = date.getMonth().toString().padStart(2, "0");
    let day: String = date.getDate().toString().padStart(2, "0");
    let hours: String = date.getHours().toString().padStart(2, "0");
    let minutes: String = date.getMinutes().toString().padStart(2, "0");
    let seconds: String = date.getSeconds().toString().padStart(2, "0");
    switch (format) {
        case "YYYY-MM-DD HH:mm:ss":
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
        case "DD-MM-YY HH:mm:ss":
            return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
        case "MM-DD-YYYY HH:mm:ss":
            return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`
        case "YY-MM-DD HH:mm:ss":
            return `${year.slice(2, 4)}-${month}-${day} ${hours}:${minutes}:${seconds}`
        case "DD-MM-YY HH:mm:ss":
            return `${day}-${month}-${year.slice(2, 4)} ${hours}:${minutes}:${seconds}`
        case "MM-DD-YY HH:mm:ss":
            return `${month}-${day}-${year.slice(2, 4)} ${hours}:${minutes}:${seconds}`
        default:
            throw new Error("Invalid format");
    }
}

// 2. calculateAge(birthDate): Calculates the age based on a given birth date.

export const calculateAge = (birthDate: Date) => {
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    if (birthDate.getMonth() < currentMonth) {
        return `${currentYear - birthDate.getFullYear() - 1} years, ${currentMonth + 12 - birthDate.getMonth()}`;
    }
    return `${currentYear - birthDate.getFullYear()} years, ${currentMonth - birthDate.getMonth()}`
}

// Validation Functions:

// 1. isValidEmail(email): Validates an email address.

export const isValidEmail = (email: string) => {
    // The email address must not contain any whitespace characters.
    if (email.includes(" ")) return false;
    // The email address must contain an "@" symbol.
    if (email.includes("@")) {
        let atIndex = email.indexOf("@");
        // The "@" symbol must not be the first or last character in the email address.
        if (atIndex === 0 && atIndex === email.length - 1) return false;
        let strAfterAt = email.slice(atIndex, email.length);
        if (!strAfterAt.includes(".")) {
            return false
        } else {
            // The email address must contain at least one "." symbol after the "@" symbol.
            let dotInd = strAfterAt.indexOf(".");
            // The "." symbol must not be the first or last character after the "@" symbol.
            if (dotInd === 0 || dotInd === email.length - 1) return false;
            else return true;
        }
    }
    return false;
}

// 2. isValidURL(url): Validates a URL.

export const isValidURL = (url: string) => {
    // Regular expression pattern for validating URLs
    let pattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;
    // Check if the input string matches the pattern
    return pattern.test(url);
}

// 3. isInteger(value): Checks if a value is an integer.

export const isInteger = <T>(value: T) => {
    if (typeof value !== "number") return false;
    return value % 1 === 0;
}
