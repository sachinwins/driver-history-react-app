Driving History Report
URL: http://driving-history.s3-website-us-east-1.amazonaws.com

In the project directory, you can run below commands to run product locally:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# About Product
## This product is developed to keep track of driving history of people.
## The product will process an .txt input file.
## Each line in the input file will start with a command. There are two possible
commands.(Driver, Trip)

## Driver, which will register a new Driver in the app.
Example:
`Driver Terence`

## Trip, which will record a trip attributed to a driver. 
`Trip Terence 07:15 07:45 17.3` (Command, Driver Name, Start Time, End Time, Distance Travelled)

## Product Requirements
1. Discard any trips that average a speed of less than 5 mph or greater than 100 mph
2. If no trip is attributed to driver then it will display 0 in all paramteres
3. Generate a report containing each driver with total miles driven and average
speed. 
4. Sort the output by most miles driven to least. 
5. Round miles to the nearest integer
6. Round miles per hour to the nearest integer.

## Example Input
Driver John
Driver Tree
Driver Dom
Driver Brian
Driver Sachin
Trip John 07:30 07:45 20.5
Trip Tree 08:30 09:45 50.7
Trip Tree 07:30 07:45 20.8
Trip John 08:58 09:45 80.5
Trip Tree 07:30 07:45 20.3
Trip Brian 08:30 09:45 55.5
Trip Tree 07:30 07:45 20.6
Trip Dom 08:30 09:45 50.8

## Expected Output
Screenshot to be added

## Project Complexity
1. Atomic Design pattern
2. React
3. React Hooks, functional components (As we don't have  a large application to manage the state, we can use hooks instead of Redux)
4. Material UI
5. Styled Components
6. ES6 (let/const, Object & Array Destructuring, Spred Operators, Map for Data Structire, Template Literals, Arrow Function, Class)
7. eslint & hushkey for formatting and linting errors

## use of Map() against Objects/Array
1. Map is a data structure
2. we can manage data in more efficient ways 
3. Many predefined methods are available for Map, which gives us a flexibility to work with different combination.
4. Map() methods - Map.keys(), Map.values(); Map.entries(); Map.size(); Map.has(); Map.delete()

## use of other ES6 features
1. Add synthetic sugar in writing javascript code. 
2. Length of code and so bundle size will be less
3. Take advantage of block level scope using const & let

## Code structure
1. Production build will be generated in "build" folder using `npm run build` which is deployed on AWS S3 bucket
2. "driverHistory.txt" is a sample txt file 
3. "src"  is the core folder of product
### index.js - will render our application by injecting App.js 
### app.js - will work a main container of all child elements/components
### components - 2 react components are created in this  folder
#### FileSelector - this component will render text input field in UI, process uploaded file, get the result by calling services and pass it to App component.
#### DriverHistoryTable - App component will pass result object to this table and this react component will render report as a responsive table in UI
### services - This folder contains supporting file and "Trip.js" class file 
#### Trip.js file is a Class which can be called to create a constructor object of a valid Trip. 
#### getTrips.js - is a Trip helper file to process the input data and get the final result as Map() iterator
#### utils.js - Utils function are declared here to reuse it, to separate from core logic
#### constants.js - Any constants are declared here and import from here to use it, so in future when we want to change of constants , we can do it using a single change at this place only









