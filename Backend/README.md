# API Documentation

## User Registration Endpoint

### POST `/users/register`

#### Description

Registers a new user in the system.

#### Request Body

The request body should be a JSON object containing the following fields:

- `fullname` (object, required)
  - `firstname` (string, required): User's first name (minimum 3 characters)
  - `lastname` (string, optional): User's last name (minimum 3 characters)
- `email` (string, required): User's email address (must be a valid email)
- `password` (string, required): User's password (minimum 6 characters)



#### Example Request

```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "password123"
}
```

#### Example Response

```json
{
    "user": {
        "id": "12345",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "johndoe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

## User Login Endpoint

### POST `/users/login`

#### Description

Authenticates a user and returns a token.

#### Request Body

The request body should be a JSON object containing the following fields:

- `email` (string, required): User's email address (must be a valid email)
- `password` (string, required): User's password (minimum 6 characters)

#### Example Request

```json
{
    "email": "johndoe@example.com",
    "password": "password123"
}
```

#### Example Response

```json
{
    "user": {
        "id": "12345",
        "email": "johndoe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

## User Profile Endpoint

### GET `/users/profile`

#### Description

Retrieves the profile information of the currently authenticated user.

#### Headers Required

- `Authorization`: Bearer token (required)

#### Example Request

```json
{}
```

#### Example Response

```json
{
    "user": {
        "id": "12345",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "johndoe@example.com"
    }
}
```

## User Logout Endpoint

### POST `/users/logout`

#### Description

Logs out the currently authenticated user.

#### Headers Required

- `Authorization`: Bearer token (required)

#### Example Request

```json
{}
```

#### Example Response

```json
{
    "message": "Successfully logged out"
}
```

## Captain Registration Endpoint

### POST `/captain/register`

#### Description

Registers a new captain (driver) in the system.

#### Request Body

The request body should be a JSON object containing the following fields:

- `fullname` (object, required)
  - `firstname` (string, required): Captain's first name (minimum 3 characters)
  - `lastname` (string, optional): Captain's last name
- `email` (string, required): Captain's email address (must be a valid email)
- `password` (string, required): Captain's password (minimum 6 characters)
- `vehicle` (object, required)
  - `color` (string, required): Vehicle color (minimum 3 characters)
  - `plate` (string, required): Vehicle plate number (minimum 3 characters)
  - `capacity` (number, required): Vehicle passenger capacity
  - `vehicleType` (string, required): Vehicle model/type (minimum 3 characters)

#### Example Request
```json
{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
    },
    "email": "janesmith@example.com",
    "password": "password123",
    "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "Sedan"
    }
}
```

#### Example Response

```json
{
    "captain": {
        "id": "67890",
        "fullname": {
            "firstname": "Jane",
            "lastname": "Smith"
        },
        "email": "janesmith@example.com",
        "vehicle": {
            "color": "Red",
            "plate": "XYZ123",
            "capacity": 4,
            "vehicleType": "Sedan"
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

## Captain Login Endpoint

### POST `/captain/login`

#### Description

Authenticates a captain and returns a token.

#### Request Body

The request body should be a JSON object containing the following fields:

- `email` (string, required): Captain's email address (must be a valid email)
- `password` (string, required): Captain's password (minimum 6 characters)

#### Example Request

```json
{
    "email": "janesmith@example.com",
    "password": "password123"
}
```

#### Example Response

```json
{
    "captain": {
        "id": "67890",
        "email": "janesmith@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

## Captain Profile Endpoint

### GET `/captain/profile`

#### Description

Retrieves the profile information of the currently authenticated captain.

#### Headers Required

- `Authorization`: Bearer token (required)

#### Example Request

```json
{}
```

#### Example Response

```json
{
    "captain": {
        "id": "67890",
        "fullname": {
            "firstname": "Jane",
            "lastname": "Smith"
        },
        "email": "janesmith@example.com",
        "vehicle": {
            "color": "Red",
            "plate": "XYZ123",
            "capacity": 4,
            "vehicleType": "Sedan"
        }
    }
}
```

## Captain Logout Endpoint

### POST `/captain/logout`

#### Description

Logs out the currently authenticated captain.

#### Headers Required

- `Authorization`: Bearer token (required)

#### Example Request

```json
{}
```

#### Example Response

```json
{
    "message": "Successfully logged out"
}
```

