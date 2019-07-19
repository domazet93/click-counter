
# Click Counter
### A very basic app to demonstrate React TDD

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Challenges

#### 1. Decrement button
  * Create a new button that subtracts 1 from the counter
  * Add functionality that decrements the counter when the new button is clicked.

#### 2. No count below 0
  * Don't let the counter go below zero.
  * if the counter is at 0 and the decrement button is clicked:
    * don't decrement the counter
    * display an error message saying the counter can't go below zero

#### 3. Remove error when increment button is clicked
  * If error is showing and increment button is clicked, clear the error.

## Built With

* [create-react-app](https://github.com/facebook/create-react-app)
* [Enzyme](https://airbnb.io/enzyme/)