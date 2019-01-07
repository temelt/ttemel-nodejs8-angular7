# Node-Express-PostgreSQL-Angular6
Boilerplate for Nodejs-Sequelize-Angular6

### Features: ###
- NodeJs
- Express
- PostgreSQL
- Sequelize
- Angular 6 with angular cli

### Pre-requisite ###

Node.js - 8.9+
Angular-CLI - 1.7.3+

### Angular Server ###

Go to angular directory
* $ cd src/client

To install dependencies, please run
* $ npm install

You can configure api url which needed on angular services by editing the environment.ts it can under the directory
* src/client/src/environments

To run angular in development mode
* $ ng serve
 then your angular app developemnt mode is exposed in http://localhost:4200

To take production build
* $ npm run build
 then your production files are placed in "public" folder
 Note: This public folder is marked as static files in express configuration to serve files.

### Node Server ###
To install dependencies
* $ npm install

Then start the node server
* $ npm start

Front End URL : http://localhost:8000/
API URL : http://localhost:8000/api/
