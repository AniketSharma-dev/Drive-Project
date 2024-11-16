   # Drive Project

This project is a simple Node.js/Express application providing user registration and login functionality, along with file upload and management capabilities. It uses **MongoDB** for data storage, **Express.js** for server handling, **EJS** for templating, and **TailwindCSS** along with **Flowbite** for styling the frontend.

## Features

- **User Registration**: Users can create an account with a username, email, and password.
- **User Login**: Existing users can log in with their credentials.
- **Session Management**: Cookies are used for token storage and session persistence.
- **File Upload**: Users can upload files securely, with validation and storage management.
- **Cloud Storage**: Integrated with Cloudinary for storing and managing files in the cloud.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: EJS for templating, TailwindCSS and Flowbite for styling
- **Authentication**: bcrypt for password hashing, JWT for generating tokens
- **Validation**: express-validator for input validation
- **File Handling**: multer for file uploads, Cloudinary for storage

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed.
- **MongoDB** running locally or accessible through a URI.
- **Cloudinary** account for file storage.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AniketSharma-dev/Drive-Project.git
   cd Drive-Project
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
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
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
│   ├── cloudinary.config.js # Cloudinary configuration for file uploads
│   ├── db.js                # Database connection logic
│   └── multer.config.js     # Multer configuration for file handling
├── models/
│   ├── files.models.js      # Schema for uploaded files
│   └── user.model.js        # User schema/model definition
├── routes/
│   ├── index.routes.js      # Base routes
│   └── user.routes.js       # User-related routes (register, login)
├── views/
│   ├── home.ejs             # Home page template
│   ├── index.ejs            # Landing page template
│   ├── login.ejs            # Login page template
│   └── register.ejs         # Register page template
└── app.js                   # Main server file
```

## API Endpoints

- **GET /user/register**: Displays the registration form.
- **POST /user/register**: Registers a new user with validated input.
- **GET /user/login**: Displays the login form.
- **POST /user/login**: Authenticates a user and sets a session cookie.
- **GET /**: Displays the home page (after login).
- **POST /upload**: Handles file uploads.

## Frontend Pages

- `home.ejs`: Displays user-specific content and file management options.
- `register.ejs`: Form for creating a new user account.
- `login.ejs`: Form for logging in with existing credentials.

## Example Usage

1. Go to `http://localhost:3000/user/register` to register a new user.
2. After registration, go to `http://localhost:3000/user/login` to log in.
3. Access the home page and upload files at `http://localhost:3000/`.

## Dependencies

- **express**: Fast and unopinionated web framework.
- **mongoose**: MongoDB object modeling for Node.js.
- **bcrypt**: Library to hash passwords.
- **jsonwebtoken**: Library to sign and verify JWTs.
- **express-validator**: Middleware for validating user input.
- **cookie-parser**: Parses cookies attached to the client request.
- **multer**: Middleware for handling `multipart/form-data`.
- **cloudinary**: SDK for integrating with Cloudinary.

## License

This project is licensed under the MIT License.
