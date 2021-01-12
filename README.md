# Marketplace APP

This is a React App project of Marketplace application.\
App is created `using create-rect-app`.\
App's test json data is located in public folder so axios can fetch data.\
Example of JSON data is shown below.

## UI

Application's UI is done with React and Sass.
In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## JSON data example 

### products.json
```
[
    {
        "userID": "694e6d73-e772-42fd-9b55-314c2720dddc",
        "guid": "ee8b3bc0-783c-4075-b1b1-7fc4568ac93d",
        "category": "5252e720-e930-48d4-b186-d1443d021366",
        "name": "Enim ut tellus",
        "description": "Enim ut tellus",
        "price": "90 €",
        "location":"Tampere, Finland",
        "date": "1.1.2020",
        "image": "",
        "showPhoneNumber": true
    }
]
```

### categories.json
```
[
    {
        "id": "5252e720-e930-48d4-b186-d1443d021366",
        "categoryName": "Lorem ipsum"
    }
]
```

### users.json
```
[
    {
        "id": "694e6d73-e772-42fd-9b55-314c2720dddc",
        "username": "First Person",
        "password": "PasswordFirst",
        "email": "test.person@gmail.com",
        "phone": "7769429607"
    }
]
```