# Cohort Catchup ;)

Cohort Catchup is an app for our 2018 Coder Academy class, to easily keep contact during our internship placements. With it you can see where your fellow cohort are learning, and see what places are near to them to catch up with them for coffee or drinks.

Cohort Catchup is a small classwork project created to learn web-app infrastructure using a NodeJS and Express backend connected to a Vanilla JS frontend. This is a small scope project, with big dreams.

## Planned Structure (Backend)

```
/backend

-|
 -- controllers/peopleController.js
 |
 -- models/Person.js
 |
 -- db/connection.js
 |
 -- routes/peopleRoutes.js
 |
 -- index.js
```

#### controllers/

Controllers will have all logic for displaying People, as well as Searching (if implemented)

#### models/

Models will live here, namely the People model, which has information about the cohort (students):

- firstName:string
- lastName:string
- bio:text
- company:string
- address:string

#### db/

Since the DB is actually mongoDB, this will be mostly where we store our `connection.js`, to interface with the mongodb database and connect in. 

#### routes/

We decided to break out our routes to a separate directory for ease of access. Each model will have it's own route file.

The route file will require in the controller methods, and then run the relevant controller methods. 

#### index.js

Our main server file.
- require Express 
- require the connection.js (the connected mongoose object) and use that to interface with the models
- require 