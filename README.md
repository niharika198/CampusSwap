# CampusSwap

CampusSwap is a platform designed for college students to rent or exchange items such as clothing, books, gadgets, and accessories. It fosters community sharing and reduces waste by encouraging reuse of items.

## Features
- User registration and login system.
- Add and list items for rent or exchange.
- Browse items available within the college community.
- Request to rent or exchange items.
- Profile page showing user's items and requests.
- Simple and responsive UI.

## Tech Stack
### Frontend
- HTML
- CSS (Bootstrap/Tailwind CSS)
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB (via MongoDB Atlas)

### Cloud Storage
- Cloudinary (for item images)

### Authentication
- JWT Token

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/campusswap.git
   cd campusswap
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_uri
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     JWT_SECRET=your_jwt_secret
     ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the application at `http://localhost:3000`.

## Additional Features (Planned)
- Chat functionality for users.
- Item reviews and ratings.
- Advanced search and filters.
- Notifications for rent/exchange requests.
- Admin panel for monitoring user activity.
- Payment integration for rentals.
- Geolocation-based browsing.

## Contributing
We welcome contributions! Please fork this repository, make your changes, and submit a pull request.

## License
[MIT License](LICENSE)

---
