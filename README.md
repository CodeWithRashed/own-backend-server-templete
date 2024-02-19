# Chat Application Backend

This backend server provides APIs for a chat application, allowing users to register, login, send messages, retrieve user information, logout, and get sidebar friends.

## APIs

### Register User

- **POST** `/signup`

```javascript
// Expected Data
let user = {
   name: "Jane Doe",
   email: "a@gmail.com",
   password: "###",
   image: "https://abc.com/demo.png"
}

// Expected Output
{
   "status": 201,
   "success": true,
   "message": "User Created Successfully",
   "user": {}
}
```

### Login User

- **POST** `/login`

```javascript
// Expected Data
let user = {
   email: "a@gmail.com",
   password: "###"
}

// Expected Output
{
   "success": true,
   "message": "Login Successful"
}
```

### Get Active User

- **GET** `/api/user`

```javascript
// Expected Output
{
   id: "65d1fe23051c5fa540d54f5e",
   name: "Rashed",
   email: "talk.rashed2@gmail.com",
   image: "https://abc.com/demo.png"
}
```

### Logout

- **POST** `/logout`

```javascript
// Expected Output
{
   "success": true,
   "message": "Logout Successful"
}
```

### Get Sidebar Friends

- **GET** `/api/friends`

```javascript
// Expected Output
[
  {
    _id: "65cfaca19a79edfdc98cb606",
    name: "talk.rashed@gmail.com",
    email: "talk.rashed@gmail.com",
    image: "https://abc.com",
  },
];
```

### Send Message

- **POST** `/api/send/:id`

```javascript
// Note: Replace :id with the ID of the user you want to send the message to

// Expected Input
{ message: string }

// Expected Output
{
   "senderId": "65d1fe23051c5fa540d54f5e",
   "receiverId": "65d1a467ab2840939438872a",
   "message": "Hello From Rashed to User",
   "_id": "65d201d1051c5fa540d54f65",
   "createdAt": "2024-02-18T13:10:41.780Z",
   "updatedAt": "2024-02-18T13:10:41.780Z",
   "__v": 0
}
```

### Send Message

- **GET** `/api/messages/:id`

```javascript
// Note: Replace :id with the ID of the user who you have chat with

// Expected Output
[
  {
    senderId: "65d1fe23051c5fa540d54f5e",
    receiverId: "65d1a467ab2840939438872a",
    message: "Hello From Rashed to User",
    _id: "65d201d1051c5fa540d54f65",
    createdAt: "2024-02-18T13:10:41.780Z",
    updatedAt: "2024-02-18T13:10:41.780Z",
    __v: 0,
  },
];

// Mongoose .populate can be used to revel the user name and image
```

# Contributor:

**Rashed:** Created flowing routes and their functions

- **POST** `/signup`
- **POST** `/login`
- **POST** `/logout`
- **POST** `/api/send/:id`
- **GET** `/api/user`
- **GET** `/api/friends`
- **GET** `/api/messages/:id`
