

💰 Expense Tracker Application

An intuitive full-stack web application developed by **Harshida A** , designed to manage and analyze personal income and expenses efficiently.
This project integrates **ReactJS (Frontend)**, **Spring Boot (Backend)**, and **MongoDB (Database)** to provide a real-time, user-friendly financial management experience.

---

## 🚀 Features

* 💵 **Add, Edit, Delete Transactions** – Manage your income and expenses with ease
* 🧾 **Budget Management** – Set monthly budgets and track progress
* ☁️ **Data Export** – Export your data in JSON format
* 🔒 **Secure Storage** – Backend powered by Spring Boot and MongoDB
* 💻 **Responsive Design** – Works smoothly across devices

---

## 🛠️ Technologies Used

| Layer    | Technology               |
| -------- | ------------------------ |
| Frontend | ReactJS, Axios, CSS      |
| Backend  | Spring Boot, Java, Maven |
| Database | MongoDB                  |
| Tools    | npm, Maven               |


**⚙️ Installation & Setup**

1. Clone the Repository

```bash
git clone https://github.com/Harshida-A/Expense-Tracker#
cd expense-tracker

2. Start the Backend (Spring Boot)

✅ Requirements:

* Java 17 or higher
* Maven installed
* MongoDB running locally at `mongodb://localhost:27017`

#### ▶ Steps:

open your IDE and run `ExpenseTrackerApplication.java`.

3. Start the Frontend (ReactJS)

✅ Requirements:

* Node.js and npm installed

#### ▶ Steps:


cd frontend
npm install
npm start


Frontend runs on **[http://localhost:3000](http://localhost:3000)**


4. Connect Frontend and Backend

In your frontend folder, open:
`src/services/api.js`

Make sure the backend API base URL is correct:

javascript
const BASE_URL = "http://localhost:8080/api";


5. Run the App

Once both servers are running:
🔗 Visit **[http://localhost:3000](http://localhost:3000)** in your browser
You can now add income, expenses, and budgets in real time!


🧠 Folder Structure

expense-tracker/
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── ExpenseTrackerApplication.java
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── public/
│
└── README.md


🌟 Future Enhancements

* 🔐 Add user authentication (JWT login system)
* 📈 Advanced analytics with custom time filters
* ☁️ Connect to MongoDB Atlas (cloud)
* 🎨 Add dark/light theme toggle for UI customization


🧾 License

Developed by Harshida A for educational and personal use.


