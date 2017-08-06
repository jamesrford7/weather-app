# weather-app
## Requirements
NodeJS >= 6.0.0

## To Setup
```npm install```

## To Run
```npm start```

Then navigate to http://localhost:8080 on your browser

## To Test
```npm test```

## Technical Details
* This is a ReactJS application that is packaged and served by WebPack with Babel's assistance
* Tests were implemented TDD style in the Jest testing framework, with the help of Enzyme to mount React components for testing
* API fetching is performed by the Fetch API

## What I would have improved
* Visual design came at the very end and I'd have liked some more time to implement a proper Sass-based solution that is built in the WebPack pipeline and doesn't live in the index.html in the ghastly way it does now. This app isn't going to win any beauty competitions.
* There are still test gaps in some components, i.e. the test will pass if they detect child components being present, but fail to notice if the props aren't correctly propogated.
* Although the app only reads from an API, a React application with state, like this one, should be using a sensible framework like Redux to keep things consistent, rather than the Fetch logic in the main component.
* The dto utility file, while heavily under test, reeks of code-smells and brittleness. I've tried to break things out to illustrate intention of the functions, but I'd refactor this if I had the chance.
* I'd have liked to make the dropdown populate from the API, rather than config, although I'd imagine an horrifically log drop-down would be the result! So I've kept it to some of our major cities, should keep enough people happy :D
* The API fetching is not under test. This is bad.
