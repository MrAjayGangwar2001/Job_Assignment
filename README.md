
# 📝 Todo Management Application

This is a full-stack Todo Management application developed as part of the assignment.  
The application allows users to **Sign up, Log in**, and perform **CRUD operations on Todos**.

---

## 🚀 Features

### ✅ User Authentication
- User Signup with validation
- User Login with credential verification
- Login required to access Todo functionality

### ✅ Todo Management
- Create Todo
- View all Todos
- Update Todo (PATCH)
- Delete Todo

---

## 🛠 Tech Stack

### Backend
- Java 25
- Spring Boot 4.0.2
- Spring Data JPA
- MySQL
- Maven
- REST APIs

### Frontend
- React (Vite)
- Bootstrap 5.3
- Axios

---

## 📂 Project Structure

### Backend
 
src/main/java/com/Assesment/CRUD
│
├── Controller
├── Service
├── Repository
├── Model
├── Dto
└── Response


### Frontend


src
├── components
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── TodoList.jsx
│ └── Navbar.jsx
├── api
│ └── api.js
└── App.jsx


---

## ⚙️ Backend Setup

### Prerequisites
- Java 17+
- MySQL
- Maven

### Steps
1. Clone the repository
2. Create MySQL database
   ```sql
   CREATE DATABASE todo;
3. Update application.properties
   ```
   spring.datasource.url=jdbc:mysql://localhost:3306/todo
   spring.datasource.username=root
   spring.datasource.password=your_password

4. Run the application
   ```
   mvn spring-boot:run
5. Backend will start on:
   ```
   http://localhost:8080

⚙️ Frontend Setup
Prerequisites :-

Node.js (18+ recommended)

Steps :-

cd frontend
npm install
npm run dev

Frontend will start on: http://localhost:5173


## 🧠 Brief Explanation of Approach

The application is designed using a **layered architecture** to maintain clean separation of concerns.

### Backend Approach
- Implemented RESTful APIs using **Spring Boot**
- Used **DTOs** to separate request/response models from entities
- Applied **validation annotations** to handle invalid inputs early
- Used **PATCH** for partial updates of Todos to avoid unnecessary data overwrite
- Business logic handled in Service layer to keep controllers lightweight

### Frontend Approach
- Built using **React (Vite)** for fast development and performance
- Used **Axios** for API communication
- Managed authentication state using `localStorage`
- Implemented reusable components for Login, Signup, Navbar, and Todo List
- Used **Bootstrap** for responsive and clean UI design

This approach ensures scalability, readability, and ease of maintenance.


## 🧪 Test Cases to Verify Code and UI

### Backend Test Cases

| Scenario                         |      Input                               Expected Result     |
|--------                          |--------                                      ----------------|
| Signup with valid data           | Valid email & password          User registered successfully |
| Signup with existing email       | Duplicate email                       Error message returned |
| Login with correct credentials   | Valid email & password           User logged in successfully |
| Login with invalid credentials   | Wrong password                     Invalid credentials error |
| Create Todo                      | Valid title & description                       Todo created |
| Update Todo                      | Modify title/description           Todo updated successfully |
| Delete Todo                      | Valid Todo ID                                   Todo deleted |
| Fetch Todos                      | Existing records                      List of Todos returned |

---

### Frontend UI Test Cases

| Scenario                        | Action                                        Expected Result |
|-------                          |-------                                        ----------------|
| Empty login fields              | Click Login                            Validation error shown |
| Invalid login                   | Wrong credentials                     Error message displayed |
| Successful login                | Correct credentials                     Redirect to Todo List |
| Add Todo                        | Enter title & description                Todo appears in list |
| Edit Todo                       | Click Edit → Modify → Update                     Todo updated |
| Delete Todo                     | Click Delete                                     Todo removed |
| Logout                          | Click Logout                           Redirect to Login page |
| Responsive UI                   | Resize screen                         Layout adapts correctly |

---

### Manual Testing
- APIs tested using **Postman**
- UI tested manually across multiple screen sizes
