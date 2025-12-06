# JavaScript Essentials Notes

## 1. Difference Between `var`, `let`, and `const`

-   **var**: function-scoped, hoisted (initialized as `undefined`),
    allows re-declaration & re-assignment.\
-   **let**: block-scoped, hoisted but not initialized, no
    re-declaration, allows re-assignment.\
-   **const**: block-scoped, no re-declaration or re-assignment,
    object/array values can still mutate.

## 2. Difference Between `map()`, `forEach()`, and `filter()`

-   **forEach()**: runs a function for each element; returns
    **undefined**.\
-   **map()**: transforms each element; returns a **new array**.\
-   **filter()**: returns a **new array** of elements that pass a
    condition.

## 3. Arrow Functions in ES6

-   Shorter function syntax\
-   Lexical `this` (does not bind its own `this`)\
-   Example:\

``` js
const add = (a, b) => a + b;
```

## 4. Destructuring Assignment in ES6

Extract values from arrays/objects.

**Array destructuring:**

``` js
const [a, b] = [10, 20];
```

**Object destructuring:**

``` js
const { name, age } = user;
```

## 5. Template Literals in ES6

-   Use backticks `` ` ``\
-   Support interpolation `${expression}`\
-   Allow multi-line strings\
-   Cleaner than string concatenation

Example:

``` js
`Hello ${name}`
```
