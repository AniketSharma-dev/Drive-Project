
# Drive Project

This project is a simple Node.js/Express application providing user registration and login functionality. It uses **MongoDB** for data storage, **Express.js** for server handling, **EJS** for templating, and **TailwindCSS** along with **Flowbite** for styling the frontend.

## Features

- **User Registration**: Users can create an account with a username, email, and password.
- **User Login**: Existing users can log in with their credentials.
- **Session Management**: Cookies are used for token storage and session persistence.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: EJS for templating, TailwindCSS and Flowbite for styling
- **Authentication**: bcrypt for password hashing, JWT for generating tokens
- **Validation**: express-validator for input validation

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed.
- **MongoDB** running locally or accessible through a URI.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AniketSharma-dev/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the project with the following contents:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server should be running on `http://localhost:3000`.

### Folder Structure

```plaintext
.
├── config/
│   └── db.js          # Database connection logic
├── models/
│   └── user.model.js  # User schema/model definition
├── routes/
│   └── user.routes.js # User-related routes (register, login)
├── views/
│   ├── register.ejs   # Register page template
│   └── login.ejs      # Login page template
└── app.js             # Main server file
```

## API Endpoints

- **GET /user/register**: Displays the registration form.
- **POST /user/register**: Registers a new user with validated input.
- **GET /user/login**: Displays the login form.
- **POST /user/login**: Authenticates a user and sets a session cookie.

## Frontend Pages

- `register.ejs`: Form for creating a new user account.
- `login.ejs`: Form for logging in with existing credentials.

## Example Usage

1. Go to `http://localhost:3000/user/register` to register a new user.
2. After registration, go to `http://localhost:3000/user/login` to log in.

## Dependencies

- **express**: Fast and unopinionated web framework.
- **mongoose**: MongoDB object modeling for Node.js.
- **bcrypt**: Library to hash passwords.
- **jsonwebtoken**: Library to sign and verify JWTs.
- **express-validator**: Middleware for validating user input.
- **cookie-parser**: Parses cookies attached to the client request.

## License

This project is licensed under the MIT License.
