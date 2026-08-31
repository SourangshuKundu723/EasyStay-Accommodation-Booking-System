# 🏡 EasyStay

A full-stack accommodation booking web application inspired by Airbnb-style platforms, built with Node.js, Express, MongoDB, and EJS. This project enables users to browse stay listings, view details, add reviews, and manage property listings with authentication and map integration.

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Unbounded&weight=800&size=40&duration=1500&pause=1000&color=FE424D&center=true&vCenter=true&width=900&lines=EasyStay;" alt="EasyStay banner" />
</p>

## ✨ Features

- Browse accommodation listings by category
- View detailed listing pages with pricing and location info
- Add, edit, and delete listings for authenticated users
- User signup/login/logout using Passport.js
- Leave reviews on listings
- Integrated Cloudinary for image upload
- Mapbox geocoding and location-based listing data
- Flash notifications for success and error states
- Responsive UI built with EJS templates, Bootstrap and custom CSS

## 🧑‍💻 Tech Stack

- Backend: Node.js, Express.js
- Frontend: EJS, custom CSS, Bootstrap, JavaScript
- Database: MongoDB with Mongoose
- Authentication: Passport.js + passport-local-mongoose
- File Uploads: Multer + Cloudinary
- Maps: Mapbox Geocoding API
- Validation: Joi
- Session Management: Express Session + Connect Flash

## 🚀 Project Overview

EasyStay is designed as a marketplace for short-term stays and vacation rentals. Users can explore listings, check property details, and manage their own accommodation posts. The backend handles secure authentication, listing validation, image uploads, and review management.

## 📁 Project Structure

```bash
MajorProject/
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── package-lock.json
├── README.md
├── schema.js
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── css/
│   └── js/
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/
│   ├── error.ejs
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
└── .env
```

## ⚙️ Prerequisites

Before running the app, ensure you have:

- Node.js installed
- MongoDB running locally
- A Cloudinary account
- A Mapbox access token

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/SourangshuKundu723/EasyStay-Accommodation-Booking-System.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add the following:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
```

4. Start MongoDB locally on:

```bash
mongodb://127.0.0.1:27017/Wanderlust
```

5. Run the app:

```bash
node app.js
```

The application runs on:

```bash
http://localhost:8080
```

## 🧩 Main Functionalities

### Listings
- Create new accommodation listings
- Update listing details and image
- Delete listings securely
- Filter by category

### Reviews
- Users can leave reviews on properties
- Ratings and comments are linked to the listing and author

### Authentication & Authorization
- Sign up and login system
- Protected routes for creating and editing listings
- User-specific profile access

### Maps and Location
- Listing locations are geocoded through Mapbox
- Coordinates are stored with each listing to support location-based features

## 📌 Future Improvements

- Payment integration
- Booking and reservation management
- Advanced search and filtering
- Admin dashboard
- Email verification and password reset
- Responsive mobile-first design enhancements

## 🤝 Contributing

Contributions are welcome. If you want to improve the project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙌 Author

Sourangshu Kundu