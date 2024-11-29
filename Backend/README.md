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

