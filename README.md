

# 💰 Expense Tracker Web Application

A **full-stack expense management system** that allows users to record, categorize, and analyze their income and expenses in real-time.  
Built using **ReactJS**, **Spring Boot**, and **MongoDB**, this system provides secure data handling and an intuitive interface.

---

## 🧩 Tech Stack

| Layer | Technology Used |
|-------|-----------------|
| 💻 Frontend | ReactJS |
| ⚙️ Backend | Spring Boot |
| 🗄️ Database | MongoDB |
| 🔤 Languages | Java, JavaScript |
| 🧰 Tools | Maven, npm, VS Code |

---

## 🚀 How to Run the Project

### 🖥️ Backend (Spring Boot)

1. Open the backend project in **VS Code** or **Eclipse**.  
2. Ensure MongoDB is running locally:
   ```bash
   mongod
    ````

3. Verify your `application.properties` file:

   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/expense_tracker
   spring.data.mongodb.database=expense_tracker
   server.port=8080
   ```
4. Run the backend server:

   open your IDE and **run `ExpenseTrackerApplication.java`**.

5. Backend will be available at 👉 **[http://localhost:8080](http://localhost:8080)**

---

### 🌐 Frontend (ReactJS)

1. Open the frontend folder in **VS Code**.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the frontend app:

   ```bash
   npm start
   ```
4. React app will run at 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔗 Connecting Frontend and Backend

In your React project, open
`/src/services/api.js`
and make sure the base URL matches your backend:

```javascript
const BASE_URL = "http://localhost:8080/api";
```

---

## 🧾 Project Features

* ✅ Add, view, and delete income/expense transactions
* 📊 Set and manage monthly budgets
* 📈 Real-time dashboard visualization
* 💾 Export all financial data as JSON
* ⚡ Fast, responsive, and user-friendly interface

---

## 🧱 Folder Structure

```
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

```

---


I didn't upload the `node_modules` folder as The folder is huge— it can be regenerated using `npm install`.

### ✅ Recommended `.gitignore` file:

```gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

To clean your repo:

```bash
git rm -r --cached node_modules
git add .
git commit -m "Added .gitignore and removed node_modules"
git push
```

---

## 🔐 Security & Performance

* Uses **MongoDB** for reliable and scalable data management
* **Spring Boot REST APIs** ensure efficient communication
* Lightweight, responsive **ReactJS** frontend for smooth performance

---

## 🌟 Future Enhancements

* 🔑 User authentication (login/signup)
* 📅 Monthly and category-based analytics
* ☁️ Cloud data sync
* 📄 Export to PDF and Excel

---

## 👩‍💻 Author

**Harshida A**
🎓 Computer Science Engineering Student
💻 Passionate about full-stack web development

---

## 🏁 Conclusion

The Expense Tracker simplifies personal finance management through automation, analytics, and accessibility — empowering users to make smarter financial decisions with a clean, modern interface.


