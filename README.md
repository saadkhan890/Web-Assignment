# Web-Assignment
This is web assignment for the AWAK

## Overview

This project implements a simple and responsive login page using HTML, CSS, and JavaScript. The page includes client-side validation for form fields, integrates with an open login API, and provides user feedback with loading spinners and error messages. 

## Features

- **Client-Side Validation**: Ensures email format and password requirements are met.
- **API Integration**: Sends login credentials to a mock API and handles responses.
- **Responsive Design**: Adapts to various screen sizes and devices.
- **Optional Features**:
  - **Show/Hide Password**: Allows toggling the visibility of the password.
  - **Remember Me**: Checkbox for remembering user credentials.
  - **Loading Spinner**: Indicates when the login request is being processed.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/saadkhan890/Web-Assignment.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Web-Assignmen
   ```

3. **Open `index.html` in Your Browser**:
   Simply open the `index.html` file in a web browser to view and interact with the login page.

## Usage

1. **Enter Email and Password**: Fill in the required fields.
2. **Click 'Login'**: The form will validate the inputs and send a request to the API.
3. **View Feedback**: Check for error messages or a success message based on the API response.
4. **Optional**: Use the "Show/Hide Password" button to toggle password visibility and the "Remember Me" checkbox to save credentials.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and layout.
- **JavaScript**: Form validation, API integration, and user interactions.

## API

The page integrates with the following mock API for login:

```sh
curl -X POST https://jsonplaceholder.typicode.com/posts \
-H "Content-Type: application/json" \
-d '{
  "username": "user@example.com",
  "password": "yourpassword"
}'
```

