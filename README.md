# Redux-toolkit Ecommerce App

This assignment is created for a purpose of practicing react routing, redux-toolkit. You can name your components, pages whatever you prefer but follow the best practices please.

## Level 1: Basic Requirements

### 0. Setup redux-toolkit in your app

### 1. Create following routes

- route: / => Page: Home
  - Features
    - create a productSlice
    - List all products from redux-toolkit store (static data)
- route: /contact => Page: Contact
- route: /products/:id => Page: ProductDetails
- route: /register => Page: Register
  - Features
    - create a registartion form
    - userSlice => registerUser => store the user data inside redux-store
    - store the register user info in localstorage
- route: /login => Page: Login
  - Features
    - create a login form
    - userSlice => loginUser => store the user data inside redux-store
    - store the loggedIn user info in localstorage
    - after successful login navigate to UserProfile or AdminProfile Component based on admin status
- route: /dashboard/user/profile => Page: UserProfile => Display the user profile
- route: /dashboard/admin/profile => Page: AdminProfile => Display the Admin profile
- route: /logout => clear the login info from the localstorage

### 2. Handle route not found

### 3. Create a Navbar component to navigate all the routes

### 4. Make sure all the webpages are responsive

## Level 2: Additional Requirements

### 1. Protect routes

- Protect `/dashboard/user/profile` based on loggedIn status from the localstorage
- Protect `/dashboard/admin/profile` based on admin status from the localstorage

### 2. Additional routes only for Admin

- route: /dashboard/admin/products

  - Component: Products
  - Features
    - Display the products from redux-store
    - Delete Product from redux-store
    - Update Product from redux-store

- Deploy your app to Netlify, Vercel, or any preferred hosting service

### Deadline: 01/07/2024 5 PM

Happy coding!
