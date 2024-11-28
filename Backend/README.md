
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
```

