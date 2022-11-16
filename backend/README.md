# stuCamp Backend

## Getting started

### Installing Dependencies

Nodejs 16.18.0
Follow instructions to install the latest version of nodejs for your platform in the [nodejs docs](https://nodejs.org/en/docs/)

### NPM Dependencies

Once you have your virtual environment setup and running, install dependencies by naviging to the /backend directory and running:

```BASH
`npm install`
```

This will install all of the required packages we selected within the package.json.

### Key Dependencies

[Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications

[Mongoose](https://mongoosejs.com/docs/guide.html) provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

### Running the server

From within the ./backend directory
You can either run it as development or prodcution mode. Each time you open a new terminal session, run:

```BASH
`npm run start:dev`  -  development mode
`npm run start:prod` -  production mode
```

### API Reference

### Getting Started

Base URL: Currently this application is only hosted locally. The backend is hosted at http://127.0.0.1:3000/api/v1

Authentication: Json Web Token (JWT) is used for authentication.

### Error Handling

Errors are returned as JSON in the following format:

```JSON
{
    "status": "fail",
    "error": {
        "statusCode": 404,
        "status": "fail",
        "isOperational": true
    },
    "message": "Hostel was not found",
    "stack": "Error: Hostel was not found\n"
}
```

The API will return four types of errors:

```JSON
400 - bad request
404 - resource not found
401 - unauthorized
500 - internal server error
```

### API Endpoints

### Hostel Resources

GET /hostels
General: Returns a list of hostels.

Sample: curl http://127.0.0.1:3000/hostels

```JSON
{
    "status": "success",
    "results": 5,
    "data": {
        "hostels": [
            {
                "images": [
                    "hostel-2-1.jpg",
                    "hostel-2-2.jpg",
                    "hostel-2-3.jpg"
                ],
                "_id": "6370066e0bc496358dba995b",
                "name": "Learners' garden hostel",
                "type": "self-contain",
                "price": 95000,
                "ratingsAverage": 2.5,
                "roomsAvailable": 12,
                "closeBy": true,
                "summary": "Stable electricity, running water, fenced,  and much more",
                "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "imageCover": "hostel-2-cover.jpg",
                "slug": "learners'-garden-hostel"
            },
            {
                "images": [
                    "hostel-1-1.jpg",
                    "hostel-1-2.jpg",
                    "hostel-1-3.jpg"
                ],
                "_id": "6370066e0bc496358dba995a",
                "name": "King'n'Queen hostel",
                "type": "self-contain",
                "price": 75000,
                "ratingsAverage": 3.5,
                "roomsAvailable": 6,
                "closeBy": true,
                "summary": "Stable electricity, running water, fenced,  and much more",
                "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "imageCover": "hostel-1-cover.jpg",
                "slug": "king'n'queen-hostel"
            },
            {
                "images": [
                    "hostel-3-1.jpg",
                    "hostel-3-2.jpg",
                    "hostel-3-3.jpg"
                ],
                "_id": "6370066e0bc496358dba995c",
                "name": "Arafims hostel",
                "type": "single-room",
                "price": 45000,
                "ratingsAverage": 3.5,
                "roomsAvailable": 10,
                "closeBy": false,
                "summary": "Stable electricity, well-water",
                "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "imageCover": "hostel-3-cover.jpg",
                "slug": "arafims-hostel"
            },
            {
                "images": [
                    "hostel-4-1.jpg",
                    "hostel-4-2.jpg",
                    "hostel-4-3.jpg"
                ],
                "_id": "6370066e0bc496358dba995e",
                "name": "Gulf pearl apartment",
                "type": "apartment",
                "price": 155000,
                "ratingsAverage": 2.5,
                "roomsAvailable": 2,
                "closeBy": true,
                "summary": "Stable electricity, running water, fenced, security and much more",
                "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "imageCover": "hostel-4-cover.jpg",
                "slug": "gulf-pearl-apartment"
            },
            {
                "images": [
                    "hostel-3-1.jpg",
                    "hostel-3-2.jpg",
                    "hostel-3-3.jpg"
                ],
                "_id": "6370066e0bc496358dba995d",
                "name": "Queens hostel",
                "type": "self-contain",
                "price": 45000,
                "ratingsAverage": 3.5,
                "roomsAvailable": 5,
                "closeBy": false,
                "summary": "Stable electricity, well-water",
                "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "imageCover": "hostel-3-cover.jpg",
                "slug": "queens-hostel"
            },
        ]
    }
}
```

GET /hostels/:id
General: Returns a single hostel based on id.

Sample: curl http://127.0.0.1:3000/hostels/6370066e0bc496358dba995d

```JSON
{
    "status": "success",
    "data": {
        "hostel": {
            "images": [
                "hostel-2-1.jpg",
                "hostel-2-2.jpg",
                "hostel-2-3.jpg"
            ],
            "_id": "6370066e0bc496358dba995b",
            "name": "Learners' garden hostel",
            "type": "self-contain",
            "price": 95000,
            "ratingsAverage": 4.5,
            "roomsAvailable": 12,
            "closeBy": true,
            "summary": "Stable electricity, running water, fenced,  and much more",
            "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "imageCover": "hostel-2-cover.jpg",
            "slug": "learners'-garden-hostel",
            "__v": 0
        }
    }
}
```

GET /top-5-cheap
General: Returns top 5 cheap hostels.

Sample: curl http://127.0.0.1:3000/hostels/top-5-cheap

```JSON
{
    "status": "success",
    "results": 5,
    "data": {
        "hostels": [
            {
                "_id": "6374a699719ad05f690e3148",
                "name": "Rubiks hostel",
                "type": "single-room",
                "ratingsAverage": 4.5,
                "price": 45000
            },
            {
                "_id": "6374a699719ad05f690e3146",
                "name": "Pyramid hostel",
                "type": "self-contain",
                "ratingsAverage": 4.5,
                "price": 45000
            },
            {
                "_id": "6374a699719ad05f690e3144",
                "name": "Queens hostel",
                "type": "self-contain",
                "ratingsAverage": 3.5,
                "price": 45000
            },
            {
                "_id": "6374a699719ad05f690e3143",
                "name": "Arafims hostel",
                "type": "single-room",
                "ratingsAverage": 2.5,
                "price": 45000
            },
            {
                "_id": "6374a699719ad05f690e314a",
                "name": "Kikelomo hostel",
                "type": "single-room",
                "ratingsAverage": 3.5,
                "price": 55000
            }
        ]
    }
}
```

POST /hostels
General: Returns a new hostel.

Sample: curl -d '{"name": "unique mansion hostel": "type": "single-room"}' http://127.0.0.1:3000/hostels -H 'Content-Type: application/json' -X POST

```JSON
{
    "status": "success",
    "data": {
        "hostel": {
            "_id": "6370066e0bc496358dba995b",
            "name": "unique mansion hostel",
            "type": "single-room",
            "price": 95000,
            "roomsAvailable": 12,
            "closeBy": true,
            "summary": "Stable electricity, running water, fenced,  and much more",
            "slug": "unique-mansion-hostel",
            "__v": 0
        }
    }
}
```

PUT /hostels/:id
General: Returns updated hostel.

Sample: curl -d '{"name": "unique mansion hostel"}' http://127.0.0.1:3000/hostels/6370066e0bc496358dba995d -H 'Content-Type: application/json' -X PUT

```JSON
{
    "status": "success",
    "data": {
        "hostel": {
            "_id": "6370066e0bc496358dba995b",
            "name": "unique mansion hostel",
            "type": "self-contain",
            "price": 95000,
            "roomsAvailable": 12,
            "closeBy": true,
            "summary": "Stable electricity, running water, fenced,  and much more",
            "slug": "unique-mansion-hostel",
            "__v": 0
        }
    }
}
```

DELETE /hostels/:id
General: Returns null

Sample: curl -X DELETE http://127.0.0.1:3000/hostels/6370066e0bc496358dba995d

```JSON
{
    "status": "success",
    "data": null
}
```

### User Resources

POST /singup
General: Returns a new user created.

Sample: curl -d {"name": "Ben Ken", "email": "benken@gmail.io"} http://127.0.0.1:3000/users/signup -H "Content-Type: application/json" -X POST

```JSON
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6CJ9.eyJpZCI6IjYzNzQ3Z2ODU3OTAyNywzU1MDI3fQ.vill0T-ThQbuA6z5EX1Qg7W8iMqLs",
    "data": {
        "user": {
            "_id": "63747ed2bd9b1e1ab9b89065",
            "name": "Ben Ken",
            "email": "benken@gmail.io",
            "password": "$2a$12$Be87Dhpw8ROwUDwEhH/uUOc6h/vXFiyA8WTo6dIzygxNr9I4TNw9e",
        }
    }
}
```

POST /login
General: Returns JWT token.

Sample: curl -d {"email": "benken@gmail.io": "password": "ben123"} http://127.0.0.1:3000/users/login -H "Content-Type: application/json" -X POST

```JSON
{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6CJ9.eyJpZCI6IjYzNzQ3Z2ODU3OTAyNywzU1MDI3fQ.vill0T-ThQbuA6z5EX1Qg7W8iMqLs",
}
```

GET /users
General: Returns all users.

Sample: curl http://127.0.0.1:3000/users/

```JSON
{
    "status": "success",
    "results": 2,
    "data": {
        "users": [
            {
                "_id": "6373e971b75c8472c80037f1",
                "name": "Abeeb Raheem",
                "email": "abcdeeef@gmail.com",
                "__v": 0
            },
            {
                "_id": "63747ed2bd9b1e1ab9b89065",
                "name": "Ken Ben",
                "email": "kenben@gmail.io",
                "__v": 0
            }
        ]
    }
}
```
