# stuCamp Backend

## Getting started

### Installing Dependencies

Nodejs 16.18.0
Follow instructions to install the latest version of nodejs for your platform in the [nodejs docs](https://nodejs.org/en/docs/)

### NPM Dependencies

Once you have your virtual environment setup and running, install dependencies by naviging to the /backend directory and running:
`npm install`

This will install all of the required packages we selected within the package.json.

#### Key Dependencies

[Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications

[Mongoose](https://mongoosejs.com/docs/guide.html) provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

### Running the server

From within the ./backend directory
You can either run it as development or prodcution mode. Each time you open a new terminal session, run:

```
`npm run start:dev` for development mode
`npm run start:prod` for production mode
```

### API Reference

#### Getting Started

Base URL: Currently this application is only hosted locally. The backend is hosted at http://127.0.0.1:3000/api/v1
Authentication: This version does not require authentication or API keys.

#### Error Handling

Errors are returned as JSON in the following format:

```
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

400 - bad request
404 - resource not found
401 - unauthorized
500 - internal server error

#### API Endpoints

#### Hostel Resources

GET /hostels
General: Returns a list of hostels.

Sample: curl http://127.0.0.1:3000/hostels

```
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
General: Returns a list of hostels.

Sample: curl http://127.0.0.1:3000/hostels/6370066e0bc496358dba995d

```
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

POST /hostels
General: Returns a list of hostels.

Sample: curl -d '{"name": "unique mansion hostel": "type": "single-room"}' http://127.0.0.1:3000/hostels/6370066e0bc496358dba995d -H 'Content-Type: application/json' -X POST

```
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
General: Returns a list of hostels.

Sample: curl -d '{"name": "unique mansion hostel"}' http://127.0.0.1:3000/hostels/6370066e0bc496358dba995d -H 'Content-Type: application/json' -X PUT

```
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
General: Returns a list of hostels.

Sample: curl -X DELETE http://127.0.0.1:3000/hostels/6370066e0bc496358dba995d

```
{
    "status": "success",
    "data": null
}
```
