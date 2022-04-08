# Monsters-API
An API built using PostgreSQL, Node.js and Express.js

In order to use this api, you need to have PostgreSQL, Node.js and NPM installed on your pc.

###########################################################################################################

There are 3 packages that need to be installed as dependancies in order for the API to work.
Those are as follows:

1.body-parser
2.express
3.pg

Use npm i body-parser express pg --save to install these dependancies.

You also need to install nodemon as a devDependancy.

Use npm i nodemon --save-dev to install the dependancy.

###########################################################################################################

Inside the bin folder, you need to create two files:

1.configuredb.sh
2.www

Within the configuredb.sh file, the code setup is as follows:

#!/bin/bash

export PGPASSWORD="your psql user password"

database="monsters"

echo "Configuring database: $database"

dropdb  -U "your psql username"  -p "your psql port" monsters
createdb  -U "your psql username"  -p "your psql port" monsters 


psql  -U "your psql username"  -p "your psql port monsters" < ./bin/sql/monsters.sql

echo "$database configured"

-Note: Do not pass your psql username and port number as strings. This is for illustrative purposes only.
                        
###########################################################################################################

Within the www file,  the code setup is as follows:
                                                                                    
#!/usr/bin/env node

const app = require("../app");
const port = "your port number for localhost";

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

-Note: Do not pass your port number as strings. This is for illustrative purposes only.

###########################################################################################################
  
Make sure you have created a database called monsters in PostgreSQL under the username that you will use in the abovementioned configuration files.

To run the server, use npm run dev.
To test endpoints, use Postman.


