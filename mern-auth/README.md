# MERN Authentication Project

This project is intentionally broken and contains security vulnerabilities in authentication. Your task is to identify and fix these issues.

## Issues to Fix
### MongoDB Connection Not Established
- **Problem:** The MONGO_URI is stored in .env, but it is not used anywhere in the backend.
- **Issue:** The "MongoDB connected" message is hardcoded, which is misleading because the database connection is not actually happening.

### 1. Password is Stored in Plain Text
- **File:** `routes/userRoutes.js`
- **Issue:** The password is stored directly in the database without hashing, making it a security risk.
- **Where to Fix:** Add password hashing before saving user data.

### 2. JWT Secret is Hardcoded
- **File:** `routes/userRoutes.js`
- **Issue:** The JWT secret is directly written in the code, making it vulnerable to leaks.
- **Where to Fix:** Move the secret to an environment variable.

### 3. Plain Text Password Comparison
- **File:** `routes/userRoutes.js`
- **Issue:** The password is compared in plain text instead of using a hashing function.
- **Where to Fix:** Use a secure password verification method.

### 4. No Input Validation for Username and Password
- **File:** `routes/userRoutes.js`
- **Issue:** User input is not validated, allowing empty values.
- **Where to Fix:** Implement validation before saving user data.

### 5. Generic Error Messages in Authentication
- **File:** `routes/userRoutes.js`
- **Issue:** The login response does not specify if the username or password is incorrect, which can be misleading for users.
- **Where to Fix:** Improve error handling and messages.

## How to Verify Your Fixes
- **Run the backend:** `npm start`
- **Test Registration and Login:** Use Postman or the frontend UI to test authentication.
- **Check Database:** Ensure passwords are stored securely in hashed format.
- **Inspect JWT:** Verify that the JWT secret is coming from the environment variable.
- **Input Validation:** Try submitting empty or invalid data and ensure proper validation messages appear.

Once you've implemented these fixes, your authentication system will be more secure! 🚀

