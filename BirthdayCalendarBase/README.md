# Test Task - Birthday Planner 
## Description
Use the provided project to implement a birthday calendar.
This birthday calendar should have the following functionalities:

- overview of birthdays
- add new person
- modify person
- delete person

A person entity consists of the following attributes: `first name`, `last name`, `birthday`, `relationship` (one of the following values: family, friend, acquaintance).

As a backend a simple API using [json-server](https://github.com/typicode/json-server) is included. (see API section for more information)

For this implementation the following base libraries must be used:

- react 16
- mobx 3
- react-widgets
- react-bootstrap

Additional libraries can be used, as long as they work well in combination with the listed base libraries and are not a replacement for them. (for example: mobx is used for state management, so redux or any other state management library must not be used; react-bootstrap is the chosen UI library, so no other is allowed)

The implementation should not take longer then three hours. (our test implementation took two hours)
We review the project after the following criteria:

- functionality
- quality of user interface and user experience
- code quality (structure, integration of  base libraries, overall quality)

After we have reviewed the submissions we‘d like to have short skype interviews (30min) with the individual candidates that submitted the most promising projects about the implementation.

Thanks for your interest! We really appreciate your effort and look forward for your submission!

## Setup the project
### API

The API server can be found in the server folder.

1. Go to the server folder and run `yarn` to install the required dependencies.
2. To create and seed the test database, inside the server folder, please execute the command **`yarn run seed`**
3. Afterwards the API server can be started with **`yarn start`** (execute inside the server folder). By default it listens on port 3004 (can be changed in server.js) and it provides a REST endpoint called `persons`.
4. To test the API send a `GET` request to `localhost:3004/persons`, which the API should respond with a json formatted list of all available persons.

`POST`, `PUT`, `DELETE` requests are handled accordingly. (if required, see [documentation](https://github.com/typicode/json-server) for more information)

### React application
1. Go to the project‘s root folder and run `yarn` to install the required dependencies
2. Start the application by executung `yarn start`