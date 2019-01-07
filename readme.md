# Node-Express-PostgreSQL-Angular6
Boilerplate for Nodejs-Sequelize-Angular6

### Features: ###
- NodeJs
- ExpressJs
- PostgreSQL
- SequelizeJs
- Logging Support using bunyan & morgan
- Angular 6 with angualr cli
- Bootstrap 4 with scss support

### Pre-requisite ###

Node.js - 8.9+
Angular-CLI - 1.7.3+

### Installation - API Server ###

### Angular Server ###

Go to angualr directory
* $ cd src/client

To install dependencies, please run
* $ npm install

You can configure api url which needed on angular services by editing the environment.ts & environment.prod.ts, it can under the directory
* src/client/src/environments

To run angular in development mode, please run
* $ ng serve
 then your angular app developemnt mode is exposed in http://localhost:4200

To take production build, please run
* $ npm run build
 then your production files are placed in "public" folder
 Note: This public folder is marked as static files in express configuration to serve files.

### Node Server ###
To install dependencies, please run
* $ npm install

Then start the node server, please run
* $ npm start

Front End URL : http://localhost:8000/
API URL : http://localhost:8000/api/