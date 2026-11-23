
# 👟 SneakerVault – Sneaker Collection

### Discover. Explore. Collect.

SneakerVault is a modern and responsive sneaker discovery web application developed using HTML, CSS, JavaScript, Materialize CSS, Node.js and Express.js.

The application allows users to explore different sneaker collections, browse popular brands, view product information and search for their favourite sneakers.

---

## 🚀 Features

- Modern and responsive user interface.
- Premium dark-themed design with orange accents.
- Sneaker collection with product images.
- Display sneaker names, brands, categories and prices.
- Search sneakers by name or brand.
- Filter sneakers by brand.
- View detailed sneaker information.
- Dynamic frontend data loading using REST API.
- Express.js backend server.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Webpage structure |
| CSS3 | Styling and responsive design |
| Materialize CSS | UI components and layout |
| JavaScript | Frontend functionality |
| Node.js | JavaScript runtime |
| Express.js | Backend server and REST API |
| Git and GitHub | Version control |

---

## 📁 Project Structure

```text
SneakerVault/
│
├── public/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   └── images/
│
├── server/
│   └── routes/
│       └── sneakerRoutes.js
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd SneakerVault
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

### 5. Open the application

Visit the following URL in your browser:

```text
http://localhost:3000
```

---

## 🔗 REST API

SneakerVault uses an Express.js REST API to provide sneaker information to the frontend.

### GET All Sneakers

**Endpoint:**

```text
GET /api/sneakers
```

**Local URL:**

```text
http://localhost:3000/api/sneakers
```

**Response:**

The API returns a JSON array containing sneaker information, including:

- ID
- Sneaker name
- Brand
- Category
- Price
- Colour
- Image path
- Description

---

## 💻 Application Workflow

1. The user opens the SneakerVault homepage.
2. The frontend sends a GET request to the Express backend.
3. Express retrieves the sneaker collection from its sample data.
4. The backend returns the information in JSON format.
5. JavaScript processes the response.
6. Sneaker cards are dynamically displayed on the webpage.
7. Users can search and filter the sneaker collection.

---

## 📸 Screenshots

Application screenshots can be added here after completing the project and capturing the final interface.

---

## 🎯 Project Objective

The objective of SneakerVault is to demonstrate the development of a modern web application using frontend technologies, an Express.js backend and a simple GET REST API.

The project focuses on improving user interface design and understanding client-server communication.

---

## 👨‍💻 Author

Developed as part of SIT725 – Applied Software Engineering.

**Project:** SneakerVault – Sneaker Collection

**Task:** 3.2P – Getting Graphical
