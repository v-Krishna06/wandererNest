# 🌍 WandererNest

A full-stack travel accommodation platform inspired by Airbnb, where users can discover, create, review, and manage property listings. WandererNest provides a seamless booking-style experience with secure authentication, image uploads, interactive maps, and responsive design.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-8BC34A?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📖 About

WandererNest is a full-stack web application built using the **MVC Architecture**. It allows users to browse accommodations, add new listings, upload property images, write reviews, and manage their own listings securely.

The project emphasizes clean backend architecture, authentication, RESTful routing, server-side validation, cloud image storage, and responsive UI design.

---

## ✨ Features

- 🔐 User Authentication (Sign Up, Login & Logout)
- 🏡 Create, Edit & Delete Property Listings
- 📷 Cloud Image Upload using Cloudinary
- ⭐ Review & Rating System
- 🗑️ Authorization for Listings & Reviews
- 🗺️ Interactive Maps using Geoapify + MapLibre
- 📍 Automatic Location Geocoding
- ⚡ Flash Messages & Error Handling
- 📱 Responsive UI with Bootstrap
- 🛡️ Server-side Validation using Joi
- 🎯 RESTful Routing
- ☁️ MongoDB Atlas Database Support

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap
- JavaScript
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local Strategy

### Cloud & APIs
- Cloudinary
- Multer
- Geoapify Geocoding API
- MapLibre GL JS

### Validation
- Joi

---

## 📂 Project Structure

```
wandererNest/
│
├── models/
├── routes/
├── controllers/
├── middleware.js
├── schema.js
├── utils/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── views/
├── init/
├── app.js
├── package.json
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/v-Krishna06/wandererNest.git
```

### Navigate into the project

```bash
cd wandererNest
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret

GEOAPIFY_API_KEY=your_geoapify_api_key
```

### Run the application

```bash
node app.js
```

or

```bash
nodemon app.js
```

Visit

```
http://localhost:8080
```

---

## 📸 Screenshots

> Add your screenshots here

### Home Page

```
/screenshots/home.png
```

### Listing Page

```
/screenshots/listing.png
```

### Create Listing

```
/screenshots/create.png
```

### Map View

```
/screenshots/map.png
```

---

## 🔒 Authentication & Authorization

### Authentication

- User Registration
- User Login
- User Logout

### Authorization

Only the listing owner can

- Edit Listings
- Delete Listings

Only the review owner can

- Delete Reviews

---

## 🗺️ Maps & Location

Every listing location is automatically geocoded using **Geoapify** and displayed on an interactive **MapLibre** map, helping users visualize the exact property location.

---

## 📷 Image Upload

Images are uploaded securely to **Cloudinary** using **Multer**, ensuring optimized cloud storage instead of storing images locally.

---

## 📑 Validation

Server-side validation is implemented using **Joi** to prevent invalid or malicious data before it reaches the database.

---

## ⚙️ Future Improvements

- ❤️ Wishlist/Favorites
- 📅 Booking System
- 💳 Payment Integration
- 🔎 Advanced Search & Filters
- 🌐 Google OAuth Login
- 📱 Progressive Web App (PWA)
- 💬 Real-time Chat
- 📊 Admin Dashboard

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Krishna Kumar Verma**

- GitHub: https://github.com/v-Krishna06
- LinkedIn: *(Add your LinkedIn URL here)*

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

It motivates me to build more open-source projects.
