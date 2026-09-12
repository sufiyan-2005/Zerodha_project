# Zerodha — Full-Stack Stock Trading Platform

A full-stack stock trading platform inspired by Zerodha, built to explore how modern financial applications are designed and developed using the MERN stack.

This project brings together a public-facing trading platform website, an interactive trading dashboard, and a Node.js backend with MongoDB models for managing trading-related data.

The goal was not just to build a website that looks like a trading platform, but to understand how different parts of a full-stack application work together—from the user interface to the backend and database.

> **Note:** This is an educational project inspired by Zerodha. It is not affiliated with or operated by Zerodha, and it does not represent a real stock brokerage service.

---

## 🚀 Live Demo

* **Frontend:** [TODO — Add deployed frontend URL]
* **Dashboard:** [TODO — Add deployed dashboard URL]
* **Backend API:** [TODO — Add deployed backend URL]

## 📸 Screenshots

Add screenshots of your project here to help visitors quickly understand the interface.

### Landing Page

[TODO — Add landing page screenshot]

### Trading Dashboard

[TODO — Add dashboard screenshot]

### Holdings / Orders

[TODO — Add holdings or orders screenshot]

---

## ✨ Features

### Public Website

The public-facing website is designed to provide information about the platform and its products.

* Home page with a trading-platform-style landing experience.
* About page with company and team information.
* Pricing page with brokerage-related information.
* Products page showcasing platform-related services.
* Support page with a ticket-creation interface.
* Signup and login pages.
* Responsive navigation and footer.
* Educational and ecosystem-related sections.
* Custom illustrations, logos, and supporting media assets.

### Trading Dashboard

The dashboard provides an interface for exploring stock-market portfolio and order-management workflows.

* Watchlist interface for viewing selected stocks.
* Holdings section for displaying investment holdings.
* Orders section for displaying order-related information.
* Positions section for displaying trading positions.
* Funds section for displaying fund-related information.
* Dashboard summary and portfolio overview.
* Buy action window for initiating a buy workflow.
* Charts and visual components for presenting financial data.
* Shared context for managing application-level state.
* AI chatbot interface.

**Important:** The exact behavior of live market prices, real order execution, authentication, and AI responses depends on the implementation of the application and its backend services.

### Backend

The backend is organized around a Node.js and Express.js application with MongoDB-related models and schemas.

* Server entry point through `index.js`.
* Separate model files for holdings, orders, and positions.
* Separate schema files for database structures.
* Backend package management through `package.json`.
* Database integration through MongoDB.

[TODO — Add confirmed API routes, validation, authentication, error handling, and database connection details.]

---

## 🛠️ Tech Stack

| Technology        | Purpose                                    |
| ----------------- | ------------------------------------------ |
| React.js          | Building the user interfaces               |
| Node.js           | Running the backend JavaScript environment |
| Express.js        | Creating the backend server and API layer  |
| MongoDB           | Storing application data                   |
| JavaScript        | Application logic and interactions         |
| HTML & CSS        | Structure and styling                      |
| React Context API | Shared application state in the dashboard  |
| Font Awesome      | Icons and visual elements                  |

### Additional libraries

[TODO — Add the actual libraries from `package.json`, such as Mongoose, Axios, React Router, Chart.js, or any other dependencies used in the project.]

---

## 🏗️ Project Architecture

The project is divided into three main parts:

1. **Frontend:** The public-facing website inspired by Zerodha.
2. **Dashboard:** The user-facing trading interface.
3. **Backend:** The server and database layer responsible for managing trading-related data.

### High-level architecture

```text
                    USER
                     |
          +----------+----------+
          |                     |
          v                     v
     FRONTEND              DASHBOARD
   Public Website       Trading Interface
          |                     |
          |                     |
          +----------+----------+
                     |
                     v
              BACKEND SERVER
               Node.js
              Express.js
                     |
                     v
                API LAYER
                     |
                     v
                 MONGODB
                     |
          +----------+----------+
          |          |          |
          v          v          v
       Holdings    Orders    Positions
       Collection Collection Collection
```

### How the application works

1. A user opens the public website or trading dashboard.
2. React renders the appropriate page and user interface.
3. When the dashboard needs data, it can communicate with the backend through API requests.
4. Express handles incoming requests and connects the application logic to the database layer.
5. MongoDB stores trading-related records such as holdings, orders, and positions.
6. The backend returns data to the dashboard, where React displays it through tables, charts, and other components.

[TODO — Confirm the exact request flow by checking the backend routes and frontend API calls.]

---

## 📂 Folder Structure

```text
Zerodha_project/
│
├── backend/
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   │
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   │
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── dashboard/
│   ├── public/
│   │   ├── index.html
│   │   ├── logo.png
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AIChatbot.js
│   │   │   ├── Apps.js
│   │   │   ├── BuyActionWindow.js
│   │   │   ├── Dashboard.js
│   │   │   ├── DoughnoutChart.js
│   │   │   ├── Funds.js
│   │   │   ├── GeneralContext.js
│   │   │   ├── Holdings.js
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── Orders.js
│   │   │   ├── Positions.js
│   │   │   ├── Summary.js
│   │   │   ├── TopBar.js
│   │   │   ├── VerticalGraph.js
│   │   │   └── WatchList.js
│   │   │
│   │   ├── data/
│   │   │   └── data.js
│   │   ├── index.css
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   └── media/images/
│   │
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── about/
│   │   │   ├── home/
│   │   │   ├── pricing/
│   │   │   ├── products/
│   │   │   └── support/
│   │   │
│   │   ├── signup/
│   │   ├── AIChatbot.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── OpenAccount.js
│   │   ├── NotFound.js
│   │   └── index.js
│   │
│   ├── test/
│   │   └── Hero.test.js
│   │
│   ├── package.json
│   └── package-lock.json
│
└── .gitignore
```

---

## 🖥️ Frontend Architecture

The frontend is responsible for the public website that introduces the platform and its services.

### Main sections

#### Home

The home section provides the primary landing experience, including the hero section, product information, statistics, awards, and educational content.

Relevant files:

* `HomePage.js`
* `Hero.js`
* `Stats.js`
* `Awards.js`
* `Education.js`

#### About

The about section presents information about the organization and its team.

Relevant files:

* `AboutPage.js`
* `Hero.js`
* `Team.js`

#### Products

The products section explains different platform-related offerings through reusable sections.

Relevant files:

* `ProductPage.js`
* `LeftSection.js`
* `RightSection.js`
* `Universe.js`

#### Pricing

The pricing section contains pricing-related information and brokerage pages.

Relevant files:

* `PricingPage.js`
* `Brokerage.js`
* `Hero.js`

#### Signup and Support

The signup section contains login and registration interfaces. The support section provides a support page and ticket-creation interface.

Relevant files:

* `Login.js`
* `Signup.js`
* `SupportPage.js`
* `CreateTicket.js`

### Frontend flow

```text
User
 |
 v
React Application
 |
 +--> Navbar
 |
 +--> Home / About / Products / Pricing
 |
 +--> Signup / Login
 |
 +--> Support
 |
 v
Reusable Components
 |
 v
Rendered User Interface
```

[TODO — Confirm whether React Router is used and document the actual route configuration.]

---

## 📊 Dashboard Architecture

The dashboard is the main interactive part of the application. It contains components for displaying trading-related information and managing the user interface.

### Important components

| Component            | Responsibility                         |
| -------------------- | -------------------------------------- |
| `Dashboard.js`       | Main dashboard screen                  |
| `WatchList.js`       | Displays the watchlist interface       |
| `Holdings.js`        | Displays holdings-related information  |
| `Orders.js`          | Displays orders-related information    |
| `Positions.js`       | Displays positions-related information |
| `Funds.js`           | Displays fund-related information      |
| `Summary.js`         | Displays a portfolio summary           |
| `BuyActionWindow.js` | Provides the buy-action interface      |
| `DoughnoutChart.js`  | Displays doughnut-chart data           |
| `VerticalGraph.js`   | Displays vertical graph data           |
| `TopBar.js`          | Dashboard top navigation area          |
| `Menu.js`            | Dashboard menu interface               |
| `GeneralContext.js`  | Shared React context                   |
| `AIChatbot.js`       | AI chatbot interface                   |

### Dashboard component flow

```text
Dashboard
 |
 +--> TopBar
 |
 +--> Menu
 |
 +--> WatchList
 |
 +--> Summary
 |
 +--> Holdings
 |
 +--> Orders
 |
 +--> Positions
 |
 +--> Funds
 |
 +--> BuyActionWindow
 |
 +--> Charts
       |
       +--> DoughnoutChart
       |
       +--> VerticalGraph
```

The dashboard uses React components to separate different responsibilities. This makes the interface easier to maintain and allows individual sections to be developed or updated independently.

---

## 🗄️ Database Architecture

The backend contains separate model and schema files for three important trading-related entities:

* Holdings
* Orders
* Positions

The exact fields and relationships should be documented from the source code in the schema files.

### Entity relationship overview

```text
                  USER
                   |
        +----------+----------+
        |          |          |
        v          v          v
    HOLDINGS     ORDERS    POSITIONS
        |          |          |
        v          v          v
 HoldingsSchema OrdersSchema PositionsSchema
        |          |          |
        v          v          v
 HoldingsModel OrdersModel PositionsModel
        |          |          |
        +----------+----------+
                   |
                   v
                MongoDB
```

### Holdings

The holdings model is intended to represent assets or stocks held in a user's portfolio.

Potential information may include:

* Stock symbol
* Quantity
* Average purchase price
* Current value
* Profit or loss

[TODO — Confirm the actual fields in `HoldingsSchema.js`.]

### Orders

The orders model is intended to represent buy or sell order records.

Potential information may include:

* Stock symbol
* Order type
* Quantity
* Price
* Order status
* Order timestamp

[TODO — Confirm the actual fields in `OrdersSchema.js`.]

### Positions

The positions model is intended to represent trading positions.

Potential information may include:

* Stock symbol
* Quantity
* Entry price
* Current price
* Profit or loss

[TODO — Confirm the actual fields in `PositionsSchema.js`.]

### Database relationship note

The provided folder structure confirms separate model and schema files, but it does not establish whether the collections are connected through user IDs, order IDs, or other references.

[TODO — Document actual relationships, indexes, validation rules, and references after reviewing the schemas.]

---

## 🔄 API Request Flow

The expected full-stack data flow can be represented as follows:

```text
React Dashboard
      |
      | HTTP Request
      v
Express.js Backend
      |
      v
Route / Controller
      |
      v
Model Layer
      |
      v
MongoDB
      |
      v
Database Response
      |
      v
Express.js Response
      |
      v
React State Update
      |
      v
Updated Dashboard UI
```

For example, a holdings-related request could follow this general flow:

1. The dashboard requests holdings data.
2. The Express server receives the request.
3. The backend retrieves the required records from MongoDB.
4. The server sends the result back to the dashboard.
5. React renders the holdings in the interface.

[TODO — Replace this generic flow with the actual API endpoints and request methods used in the project.]

### API documentation

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| [TODO] | [TODO]   | Holdings API       |
| [TODO] | [TODO]   | Orders API         |
| [TODO] | [TODO]   | Positions API      |
| [TODO] | [TODO]   | Authentication API |
| [TODO] | [TODO]   | AI chatbot API     |

---

## 🤖 AI Chatbot

The project contains an AI chatbot interface in both the frontend and dashboard:

* `frontend/src/AIChatbot.js`
* `frontend/src/AIChatbot.css`
* `dashboard/src/components/AIChatbot.js`
* `dashboard/src/components/AIChatbot.css`

The chatbot is designed as an additional interactive feature within the application.

[TODO — Explain the actual AI provider, model, API integration, prompt handling, backend endpoint, and response flow after confirming the implementation.]

---

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB or a MongoDB Atlas database
* Git

### 1. Clone the repository

```bash
git clone https://github.com/sufiyan-2005/Zerodha_project.git
cd Zerodha_project
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install dashboard dependencies

Open another terminal or return to the project root:

```bash
cd dashboard
npm install
```

### 4. Install backend dependencies

```bash
cd backend
npm install
```

### 5. Configure environment variables

Create a `.env` file in the backend directory if your implementation uses environment variables.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
[TODO — Add other required environment variables]
```

Do not commit real passwords, API keys, database credentials, or other secrets to GitHub.

### 6. Run the backend

```bash
cd backend
npm start
```

[TODO — Confirm the actual start script in `backend/package.json`. If it uses `nodemon` or another command, update this section.]

### 7. Run the frontend

```bash
cd frontend
npm start
```

### 8. Run the dashboard

```bash
cd dashboard
npm start
```

[TODO — Confirm the actual scripts and ports in all three `package.json` files.]

---

## 🔐 Security and Data Disclaimer

This is an educational stock-trading platform project.

* It is not connected to a real stock exchange unless explicitly documented.
* It should not be used for actual financial transactions.
* Market prices and portfolio values may be simulated or based on data sources that need verification.
* Authentication and authorization details must be confirmed from the implementation.
* Never expose database credentials or private API keys.

---

## 🧠 What I Learned

Building this project helped me explore how a full-stack web application is structured and how different technologies work together.

### Frontend development

* Building reusable React components.
* Organizing pages into separate sections.
* Creating responsive layouts with CSS.
* Managing UI state and user interactions.
* Creating charts and dashboard components.

### Backend development

* Setting up a Node.js and Express.js server.
* Organizing backend files into models and schemas.
* Understanding the role of an API layer.
* Connecting application logic with a database.

### Database

* Understanding MongoDB as a document-oriented database.
* Structuring trading-related data into separate collections.
* Exploring the relationship between models and schemas.

### Full-stack architecture

* Understanding the communication between frontend and backend.
* Separating the public website from the dashboard.
* Organizing a project into multiple applications.
* Understanding how data moves from the database to the user interface.

---

## 🔮 Future Improvements

The following are possible improvements for future versions of the project:

* Add secure user authentication and authorization.
* Add a complete user profile and account-management system.
* Integrate a verified market-data provider.
* Implement proper order validation and order-status tracking.
* Add transaction history and portfolio analytics.
* Improve error handling and loading states.
* Add automated testing for important workflows.
* Add API documentation using Swagger or another documentation tool.
* Improve accessibility and responsive design.
* Deploy the frontend, dashboard, and backend.
* Add a production-ready AI chatbot with secure API integration.

---

## 👨‍💻 Author

**Sufiyan Khan**

* GitHub: [sufiyan-2005](https://github.com/sufiyan-2005)
* Project Repository: [Zerodha_project](https://github.com/sufiyan-2005/Zerodha_project)

---

## 📄 License

[TODO — Add the license selected for this project, such as MIT, if applicable.]

---

## ⭐ Acknowledgement

This project was created for learning and practicing full-stack web development using the MERN stack. The design and concept are inspired by Zerodha's trading platform.

If you find this project useful, feel free to explore the repository and share feedback.
